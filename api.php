<?php
session_start();
header('Content-Type: application/json');
require_once 'db_config.php';

// Check if user is logged in for protected actions
$is_logged_in = isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true;
$method = $_SERVER['REQUEST_METHOD'];

function handle_error($message) {
    http_response_code(500);
    echo json_encode(['error' => $message]);
    exit;
}

function handle_unauthorized() {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}


// --- Image Upload Function ---
function upload_image($file_input_name) {
    if (isset($_FILES[$file_input_name]) && $_FILES[$file_input_name]['error'] == 0) {
        $upload_dir = 'uploads/';
        if (!file_exists($upload_dir)) {
            mkdir($upload_dir, 0777, true);
        }
        $file_name = uniqid() . '-' . basename($_FILES[$file_input_name]['name']);
        $target_path = $upload_dir . $file_name;
        if (move_uploaded_file($_FILES[$file_input_name]['tmp_name'], $target_path)) {
            return $target_path;
        }
    }
    return null;
}


// --- Main API Logic ---
$action = $_GET['action'] ?? '';

if ($method === 'GET' && $action === 'getMenu') {
    // --- GET FULL MENU DATA ---
    $response = ['categories' => [], 'items' => [], 'translations' => []];

    // Get categories
    $sql_cat = "SELECT id, category_id_str, name_en, name_ku, name_ar, image, layout FROM categories ORDER BY display_order ASC";
    $result_cat = mysqli_query($link, $sql_cat);
    $categories_map = [];
    while ($row = mysqli_fetch_assoc($result_cat)) {
        $cat_id = $row['id'];
        $categories_map[$cat_id] = [
            'id' => $row['category_id_str'],
            'db_id' => intval($cat_id),
            'name' => ['en' => $row['name_en'], 'ku' => $row['name_ku'], 'ar' => $row['name_ar']],
            'image' => $row['image'],
            'layout' => $row['layout'],
            'header_prices' => []
        ];
    }

    // Get category header prices
    $sql_hp = "SELECT category_id, size, price FROM category_header_prices";
    $result_hp = mysqli_query($link, $sql_hp);
    while($row = mysqli_fetch_assoc($result_hp)){
        if(isset($categories_map[$row['category_id']])){
            $categories_map[$row['category_id']]['header_prices'][] = ['size' => $row['size'], 'price' => $row['price']];
        }
    }
    
    $response['categories'] = array_values($categories_map);

    // Get items
    $sql_items = "SELECT id, category_id, name_en, name_ku, name_ar, description_en, description_ku, description_ar, image, layout FROM items ORDER BY display_order ASC";
    $result_items = mysqli_query($link, $sql_items);
    $items_map = [];
    $item_id_map = [];
    while ($row = mysqli_fetch_assoc($result_items)) {
        $item_id = $row['id'];
        $category_db_id = $row['category_id'];
        $category_str_id = '';
        foreach($response['categories'] as $cat) {
            if ($cat['db_id'] == $category_db_id) {
                $category_str_id = $cat['id'];
                break;
            }
        }

        if(!isset($response['items'][$category_str_id])){
            $response['items'][$category_str_id] = [];
        }
        
        $item_data = [
            'id' => intval($item_id),
            'name' => ['en' => $row['name_en'], 'ku' => $row['name_ku'], 'ar' => $row['name_ar']],
            'description' => ['en' => $row['description_en'], 'ku' => $row['description_ku'], 'ar' => $row['description_ar']],
            'image' => $row['image'],
            'layout' => $row['layout'],
            'prices' => []
        ];
        $items_map[$item_id] = $item_data;
        $item_id_map[$item_id] = $category_str_id;
    }

    // Get item prices
    $sql_ip = "SELECT item_id, size, price FROM item_prices";
    $result_ip = mysqli_query($link, $sql_ip);
    while($row = mysqli_fetch_assoc($result_ip)){
        if(isset($items_map[$row['item_id']])){
            $items_map[$row['item_id']]['prices'][] = ['size' => $row['size'], 'price' => $row['price']];
        }
    }
    
    foreach($items_map as $item_id => $item){
        $cat_id = $item_id_map[$item_id];
        $response['items'][$cat_id][] = $item;
    }

    // Get translations
    $sql_trans = "SELECT setting_value FROM settings WHERE setting_key = 'translations'";
    $result_trans = mysqli_query($link, $sql_trans);
    if($row = mysqli_fetch_assoc($result_trans)){
        $response['translations'] = json_decode($row['setting_value'], true);
    }

    echo json_encode($response);
} 
else if ($method === 'POST') {
    if (!$is_logged_in) handle_unauthorized();

    $data = $_POST;
    
    // --- ADD/EDIT CATEGORY ---
    if ($action === 'saveCategory') {
        $is_edit = !empty($data['db_id']);
        if ($is_edit) { // Edit
            $stmt = mysqli_prepare($link, "UPDATE categories SET name_en=?, name_ku=?, name_ar=?, image=?, layout=? WHERE id=?");
            mysqli_stmt_bind_param($stmt, "sssssi", $data['name_en'], $data['name_ku'], $data['name_ar'], $data['image'], $data['layout'], $data['db_id']);
        } else { // Add
            $stmt = mysqli_prepare($link, "INSERT INTO categories (category_id_str, name_en, name_ku, name_ar, image, layout) VALUES (?, ?, ?, ?, ?, ?)");
            mysqli_stmt_bind_param($stmt, "ssssss", $data['id'], $data['name_en'], $data['name_ku'], $data['name_ar'], $data['image'], $data['layout']);
        }

        // Handle image upload
        $image_path = upload_image('image_file');
        if ($image_path) {
            $data['image'] = $image_path;
        }

        mysqli_stmt_execute($stmt);
        $category_db_id = $is_edit ? $data['db_id'] : mysqli_insert_id($link);

        // Update header prices
        mysqli_query($link, "DELETE FROM category_header_prices WHERE category_id = $category_db_id");
        if (isset($data['header_prices']) && is_array($data['header_prices'])) {
            foreach($data['header_prices'] as $price) {
                $stmt_hp = mysqli_prepare($link, "INSERT INTO category_header_prices (category_id, size, price) VALUES (?, ?, ?)");
                mysqli_stmt_bind_param($stmt_hp, "iss", $category_db_id, $price['size'], $price['price']);
                mysqli_stmt_execute($stmt_hp);
            }
        }
        echo json_encode(['success' => true, 'id' => $category_db_id]);
    }
    // --- ADD/EDIT ITEM ---
    else if ($action === 'saveItem') {
        $is_edit = !empty($data['id']);
        if ($is_edit) { // Edit
             $stmt = mysqli_prepare($link, "UPDATE items SET category_id=?, name_en=?, name_ku=?, name_ar=?, description_en=?, description_ku=?, description_ar=?, image=?, layout=? WHERE id=?");
             mysqli_stmt_bind_param($stmt, "issssssssi", $data['category_db_id'], $data['name_en'], $data['name_ku'], $data['name_ar'], $data['desc_en'], $data['desc_ku'], $data['desc_ar'], $data['image'], $data['layout'], $data['id']);
        } else { // Add
            $stmt = mysqli_prepare($link, "INSERT INTO items (category_id, name_en, name_ku, name_ar, description_en, description_ku, description_ar, image, layout) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
            mysqli_stmt_bind_param($stmt, "issssssss", $data['category_db_id'], $data['name_en'], $data['name_ku'], $data['name_ar'], $data['desc_en'], $data['desc_ku'], $data['desc_ar'], $data['image'], $data['layout']);
        }

        // Handle image upload
        $image_path = upload_image('image_file');
        if ($image_path) {
            $data['image'] = $image_path;
        }

        mysqli_stmt_execute($stmt);
        $item_db_id = $is_edit ? $data['id'] : mysqli_insert_id($link);

        // Update item prices
        mysqli_query($link, "DELETE FROM item_prices WHERE item_id = $item_db_id");
         if (isset($data['prices']) && is_array($data['prices'])) {
            foreach($data['prices'] as $price) {
                $stmt_p = mysqli_prepare($link, "INSERT INTO item_prices (item_id, size, price) VALUES (?, ?, ?)");
                mysqli_stmt_bind_param($stmt_p, "iss", $item_db_id, $price['size'], $price['price']);
                mysqli_stmt_execute($stmt_p);
            }
        }
        echo json_encode(['success' => true, 'id' => $item_db_id]);
    }
    // --- DELETE ITEM ---
    else if ($action === 'deleteItem') {
        $stmt = mysqli_prepare($link, "DELETE FROM items WHERE id = ?");
        mysqli_stmt_bind_param($stmt, "i", $data['id']);
        mysqli_stmt_execute($stmt);
        echo json_encode(['success' => true]);
    }
    // --- DELETE CATEGORY ---
    else if ($action === 'deleteCategory') {
        // First check if category has items
        $check_stmt = mysqli_prepare($link, "SELECT COUNT(*) as item_count FROM items WHERE category_id = ?");
        mysqli_stmt_bind_param($check_stmt, "i", $data['id']);
        mysqli_stmt_execute($check_stmt);
        $result = mysqli_stmt_get_result($check_stmt);
        $row = mysqli_fetch_assoc($result);
        if ($row['item_count'] > 0) {
            handle_error('Cannot delete category because it contains items.');
        } else {
            $stmt = mysqli_prepare($link, "DELETE FROM categories WHERE id = ?");
            mysqli_stmt_bind_param($stmt, "i", $data['id']);
            mysqli_stmt_execute($stmt);
            echo json_encode(['success' => true]);
        }
    }
    // --- UPDATE ORDER ---
    else if ($action === 'updateOrder') {
        $order_data = json_decode($data['order_data'], true);
        $type = $data['type'];
        $table_name = $type === 'categories' ? 'categories' : 'items';
        
        $stmt = mysqli_prepare($link, "UPDATE `$table_name` SET `display_order` = ? WHERE `id` = ?");
        foreach($order_data as $item) {
            mysqli_stmt_bind_param($stmt, "ii", $item['order'], $item['id']);
            mysqli_stmt_execute($stmt);
        }
        echo json_encode(['success' => true]);
    }
     // --- SAVE TRANSLATIONS ---
    else if ($action === 'saveTranslations') {
        $translations = $data['translations'];
        $stmt = mysqli_prepare($link, "UPDATE settings SET setting_value = ? WHERE setting_key = 'translations'");
        mysqli_stmt_bind_param($stmt, "s", $translations);
        mysqli_stmt_execute($stmt);
        echo json_encode(['success' => true]);
    }
} 
else {
    handle_error('Invalid request method or action.');
}

mysqli_close($link);
?>

