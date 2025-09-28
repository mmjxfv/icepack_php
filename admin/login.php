<?php
// Initialize the session
session_start();
 
// Check if the user is already logged in, if yes then redirect him to welcome page
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
    header("location: index.php");
    exit;
}
 
// Define variables and initialize with empty values
$password = "";
$password_err = "";

// The password to log in. In a real application, use a hashed password from a database.
define('ADMIN_PASSWORD', 'icepackadmin');
 
// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){
 
    // Check if password is empty
    if(empty(trim($_POST["password"]))){
        $password_err = "Please enter your password.";
    } else{
        $password = trim($_POST["password"]);
    }
    
    // Validate credentials
    if(empty($password_err)){
        if($password == ADMIN_PASSWORD){
            // Password is correct, so start a new session
            session_start();
            
            // Store data in session variables
            $_SESSION["loggedin"] = true;
            
            // Redirect user to admin index page
            header("location: index.php");
        } else{
            // Password is not valid, display a generic error message
            $password_err = "Incorrect password.";
        }
    }
}
?>
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin Login</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
        @import url('https://rsms.me/inter/inter.css');
    </style>
</head>
<body class="bg-gray-100">
    <div class="min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm">
            <h2 class="text-2xl font-bold mb-4 text-center">Admin Access</h2>
            <p class="text-gray-600 mb-6 text-center">Please enter the password to manage the menu.</p>
            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                <div class="mb-4">
                    <input type="password" name="password" class="w-full px-4 py-2 border <?php echo (!empty($password_err)) ? 'border-red-500' : 'border-gray-300'; ?> rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Password">
                    <?php if(!empty($password_err)): ?>
                        <p class="text-red-500 text-sm mt-2"><?php echo $password_err; ?></p>
                    <?php endif; ?>
                </div>
                <div class="form-group">
                    <input type="submit" class="mt-6 w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300" value="Login">
                </div>
            </form>
        </div>
    </div>    
</body>
</html>
