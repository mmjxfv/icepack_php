<?php
session_start();
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ice Pack - Menu Management</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- SortableJS for drag-and-drop -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
        @import url('https://rsms.me/inter/inter.css');
        .modal { transition: opacity 0.25s ease; }
        .modal-content { transition: transform 0.25s ease; }
        .sidebar-item { transition: background-color 0.2s ease, color 0.2s ease; }
        .sidebar-item.active { background-color: #4f46e5; color: white; }
        .sidebar-item:hover:not(.active) { background-color: #eef2ff; }
        .price-row:not(:last-child) { border-bottom: 1px solid #e5e7eb; padding-bottom: 0.75rem; }
        .image-preview { width: 100px; height: 100px; object-fit: cover; border: 2px dashed #d1d5db; border-radius: 0.5rem; }
        .sortable-ghost { background: #eef2ff; border: 2px dashed #4f46e5; }
        .sortable-chosen { cursor: grabbing; }
        .handle { cursor: move; }

        /* Toast notifications */
        #toast-container { position: fixed; bottom: 20px; right: 20px; z-index: 1000; }
        .toast { display: flex; align-items: center; padding: 12px 20px; margin-top: 10px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: all 0.3s ease-in-out; opacity: 0; transform: translateY(20px); }
        .toast.show { opacity: 1; transform: translateY(0); }
        .toast-success { background-color: #10B981; color: white; }
        .toast-error { background-color: #EF4444; color: white; }
    </style>
</head>
<body class="bg-gray-50 text-gray-800">

    <div id="app" class="flex h-screen bg-gray-100 hidden">
        <!-- Sidebar -->
        <div class="w-64 bg-white shadow-md flex-shrink-0 flex flex-col">
            <div class="p-6">
                <h1 class="text-2xl font-bold text-indigo-600">Ice Pack Admin</h1>
                <p class="text-sm text-gray-500">Management Panel</p>
            </div>
            <nav class="mt-6 flex-grow">
                <a id="nav-dashboard" href="#" class="sidebar-item flex items-center px-6 py-3 text-gray-700">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    <span class="mx-3">Dashboard</span>
                </a>
                <a id="nav-items" href="#" class="sidebar-item flex items-center px-6 py-3 text-gray-700">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    <span class="mx-3">Menu Items</span>
                </a>
                <a id="nav-categories" href="#" class="sidebar-item flex items-center px-6 py-3 text-gray-700">
                     <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2m14 0h-2M5 11H3"></path></svg>
                    <span class="mx-3">Categories</span>
                </a>
                 <a id="nav-settings" href="#" class="sidebar-item flex items-center px-6 py-3 text-gray-700">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span class="mx-3">Settings</span>
                </a>
            </nav>
            <div class="p-6">
                <a href="logout.php" class="w-full text-center bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">Logout</a>
            </div>
        </div>

        <!-- Main content -->
        <div class="flex-1 flex flex-col overflow-hidden">
            <header class="flex justify-between items-center p-6 bg-white border-b">
                <h2 id="page-title" class="text-2xl font-semibold text-gray-700"></h2>
            </header>

            <main id="main-content" class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                <!-- Content will be injected here -->
            </main>
        </div>
    </div>

    <!-- Modals and Toasts -->
    <div id="modal-container"></div>
    <div id="toast-container"></div>
    <div id="loader" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 hidden">
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
    </div>


<script type="module">
    // --- APP STATE ---
    let menuData = null;
    let currentView = 'dashboard';
    let sortableInstances = [];

    // --- DOM ELEMENTS ---
    const appElement = document.getElementById('app');
    const mainContent = document.getElementById('main-content');
    const pageTitle = document.getElementById('page-title');
    const navDashboard = document.getElementById('nav-dashboard');
    const navItems = document.getElementById('nav-items');
    const navCategories = document.getElementById('nav-categories');
    const navSettings = document.getElementById('nav-settings');
    const modalContainer = document.getElementById('modal-container');
    const loader = document.getElementById('loader');

    // --- API & UTILITIES ---
    async function apiRequest(endpoint, options = {}) {
        loader.classList.remove('hidden');
        try {
            const response = await fetch(endpoint, options);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            showToast(`API Error: ${error.message}`, 'error');
            throw error; // Re-throw to handle in calling function if needed
        } finally {
            loader.classList.add('hidden');
        }
    }

    function showToast(message, type = 'success') {
        const toastContainer = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toastContainer.appendChild(toast);

        requestAnimationFrame(() => toast.classList.add('show'));

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // --- INITIALIZATION ---
    async function initializeApp() {
        appElement.classList.remove('hidden');
        try {
            menuData = await apiRequest('../api.php?action=getMenu');
            navigate(currentView);
        } catch (error) {
            mainContent.innerHTML = `<div class="text-red-500">Error loading menu data. Please check the API connection and try again.</div>`;
        }
    }

    // --- ROUTING / VIEW MANAGEMENT ---
    function navigate(view) {
        currentView = view;
        document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
        document.getElementById(`nav-${view}`).classList.add('active');
        render();
    }

    navDashboard.addEventListener('click', (e) => { e.preventDefault(); navigate('dashboard'); });
    navItems.addEventListener('click', (e) => { e.preventDefault(); navigate('items'); });
    navCategories.addEventListener('click', (e) => { e.preventDefault(); navigate('categories'); });
    navSettings.addEventListener('click', (e) => { e.preventDefault(); navigate('settings'); });

    // --- RENDERING ---
    function render() {
        if (!menuData) return;
        destroySortable();
        switch(currentView) {
            case 'dashboard':
                pageTitle.textContent = 'Dashboard';
                renderDashboard();
                break;
            case 'items':
                pageTitle.textContent = 'Menu Items';
                renderItemsView();
                break;
            case 'categories':
                pageTitle.textContent = 'Categories';
                renderCategoriesView();
                break;
            case 'settings':
                pageTitle.textContent = 'Settings';
                renderSettingsView();
                break;
        }
    }

    function renderDashboard() {
        const totalCategories = menuData.categories.length;
        const totalItems = Object.values(menuData.items).flat().length;
        mainContent.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-lg font-semibold text-gray-500">Total Categories</h3>
                    <p class="text-4xl font-bold mt-2">${totalCategories}</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-lg font-semibold text-gray-500">Total Menu Items</h3>
                    <p class="text-4xl font-bold mt-2">${totalItems}</p>
                </div>
            </div>
            <div class="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold mb-4">Welcome to the Ice Pack Menu Manager!</h3>
                <p class="text-gray-600">Use the sidebar to navigate:</p>
                <ul class="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li><b>Dashboard:</b> An overview of your menu.</li>
                    <li><b>Menu Items:</b> Add, edit, delete, and reorder all items.</li>
                    <li><b>Categories:</b> Manage your menu categories and their order.</li>
                    <li><b>Settings:</b> Update site-wide text and translations.</li>
                </ul>
            </div>
        `;
    }

    function renderItemsView(searchTerm = '') {
        let html = `
        <div class="flex justify-between items-center mb-6">
            <button id="add-item-btn" class="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 shadow-sm">+ Add New Item</button>
            <div class="relative">
                <input type="text" id="search-input" placeholder="Search items..." class="pl-10 pr-4 py-2 border rounded-lg" value="${searchTerm}">
                <svg class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
        </div>
        `;
        const lowerCaseSearch = searchTerm.toLowerCase();

        menuData.categories.forEach(category => {
            const filteredItems = (menuData.items[category.id] || []).filter(item =>
                item.name.en.toLowerCase().includes(lowerCaseSearch) ||
                item.name.ku.toLowerCase().includes(lowerCaseSearch) ||
                item.name.ar.toLowerCase().includes(lowerCaseSearch)
            );

            if (filteredItems.length === 0 && searchTerm) return;

            html += `
                <div class="mb-8">
                    <h3 class="text-xl font-semibold text-gray-600 border-b pb-2 mb-4">${category.name.en} / ${category.name.ku}</h3>
                    <div id="items-container-${category.id}" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        ${filteredItems.map(item => renderItemCard(item, category.id)).join('')}
                    </div>
                </div>
            `;
        });
        mainContent.innerHTML = html;
        bindItemEventListeners();
        if(!searchTerm) initItemSortable();
        document.getElementById('search-input').addEventListener('input', (e) => renderItemsView(e.target.value));
    }

    function renderItemCard(item, categoryId) {
        const pricesHtml = (item.prices || []).map(p => `
            <span class="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">${p.size}: ${p.price}</span>
        `).join('');

        return `
            <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col" data-item-id="${item.id}">
                <div class="p-4 flex justify-between items-center bg-gray-50 border-b">
                    <h4 class="font-bold text-lg">${item.name.en}</h4>
                    <svg class="handle h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
                <img src="../${item.image}" alt="${item.name.en}" class="w-full h-40 object-cover" onerror="this.src='https://placehold.co/400x400/e2e8f0/e2e8f0?text=No+Image'">
                <div class="p-4 flex flex-col flex-grow">
                    <p class="text-sm text-gray-500">${item.name.ku} / ${item.name.ar}</p>
                    <p class="text-xs text-gray-400 mt-2">Layout: <span class="font-semibold">${item.layout}</span></p>
                    ${item.description && item.description.en ? `<p class="text-xs text-gray-500 mt-1 italic">"${item.description.en}"</p>` : ''}
                    <div class="mt-2 flex-grow">${pricesHtml}</div>
                    <div class="mt-4 flex justify-end space-x-2">
                        <button class="edit-item-btn text-sm bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600" data-category-id="${categoryId}" data-item-id="${item.id}">Edit</button>
                        <button class="delete-item-btn text-sm bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600" data-item-id="${item.id}">Delete</button>
                    </div>
                </div>
            </div>
        `;
    }

    function renderCategoriesView() {
        mainContent.innerHTML = `
            <button id="add-category-btn" class="mb-6 bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 shadow-sm">+ Add New Category</button>
            <div id="categories-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                ${menuData.categories.map(cat => renderCategoryCard(cat)).join('')}
            </div>`;
        bindCategoryEventListeners();
        initCategorySortable();
    }

    function renderCategoryCard(category) {
         return `
            <div class="bg-white rounded-lg shadow-md overflow-hidden" data-category-id="${category.db_id}">
                 <div class="p-4 flex justify-between items-center bg-gray-50 border-b">
                    <h4 class="font-bold text-lg">${category.name.en}</h4>
                    <svg class="handle h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
                <img src="../${category.image}" alt="${category.name.en}" class="w-full h-40 object-cover" onerror="this.src='https://placehold.co/400x400/e2e8f0/e2e8f0?text=No+Image'">
                <div class="p-4">
                    <p class="text-sm text-gray-500">${category.name.ku} / ${category.name.ar}</p>
                    <p class="text-xs text-gray-400 mt-2">ID: ${category.id} | Layout: <span class="font-semibold">${category.layout}</span></p>
                    <div class="mt-4 flex justify-end space-x-2">
                        <button class="edit-category-btn text-sm bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600" data-category-id="${category.db_id}">Edit</button>
                        <button class="delete-category-btn text-sm bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600" data-category-id="${category.db_id}">Delete</button>
                    </div>
                </div>
            </div>
        `;
    }

    function renderSettingsView() {
        const t = menuData.translations;
        mainContent.innerHTML = `
            <div class="bg-white p-8 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold mb-6">Manage Translations</h3>
                <form id="translations-form" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 border-b pb-6">
                        <div><h4 class="font-semibold text-lg">English (en)</h4></div>
                        <div class="md:col-span-2 space-y-4">
                            <div><label class="block text-sm font-medium text-gray-700">Branch Name</label><input type="text" name="en_branch_name" value="${t.en.branch_name}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></div>
                        </div>
                    </div>
                     <div class="grid grid-cols-1 md:grid-cols-3 gap-6 border-b pb-6">
                        <div><h4 class="font-semibold text-lg">Arabic (ar)</h4></div>
                        <div class="md:col-span-2 space-y-4">
                            <div><label class="block text-sm font-medium text-gray-700">Branch Name</label><input type="text" name="ar_branch_name" value="${t.ar.branch_name}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></div>
                        </div>
                    </div>
                     <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div><h4 class="font-semibold text-lg">Kurdish (ku)</h4></div>
                        <div class="md:col-span-2 space-y-4">
                            <div><label class="block text-sm font-medium text-gray-700">Branch Name</label><input type="text" name="ku_branch_name" value="${t.ku.branch_name}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></div>
                        </div>
                    </div>
                    <div class="flex justify-end mt-6">
                        <button type="submit" class="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700">Save Translations</button>
                    </div>
                </form>
            </div>
        `;
        document.getElementById('translations-form').addEventListener('submit', handleSaveTranslations);
    }

    // --- MODAL & FORM RENDERING / LOGIC ---
    function createCategoryForm(category = {}) {
        const headerPrices = category.header_prices && category.header_prices.length > 0 ? category.header_prices : [{ size: '', price: '' }];
        return `
        <form class="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
            <input type="hidden" name="db_id" value="${category.db_id || ''}">
            <div>
                <label class="block text-sm font-medium text-gray-700">Image</label>
                <div class="mt-1 flex items-center">
                    <img id="image-preview" src="${category.image ? '../' + category.image : 'https://placehold.co/100x100/e2e8f0/e2e8f0'}" class="image-preview mr-4">
                    <input type="file" name="image_file" accept="image/*" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100">
                </div>
                <input type="hidden" name="image" value="${category.image || ''}">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Category Layout</label>
                <select name="layout" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option value="default-category" ${category.layout === 'default-category' ? 'selected' : ''}>Default</option>
                    <option value="full-width-header" ${category.layout === 'full-width-header' ? 'selected' : ''}>Full-Width Header</option>
                </select>
            </div>
            <div><label class="block text-sm font-medium text-gray-700">Unique ID (e.g., "starters")</label><input type="text" name="id" value="${category.id || ''}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" ${category.id ? 'readonly' : 'required'}></div>
            <div><label class="block text-sm font-medium text-gray-700">Name (English)</label><input type="text" name="name_en" value="${category.name?.en || ''}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required></div>
            <div><label class="block text-sm font-medium text-gray-700">Name (Kurdish)</label><input type="text" name="name_ku" value="${category.name?.ku || ''}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required></div>
            <div><label class="block text-sm font-medium text-gray-700">Name (Arabic)</label><input type="text" name="name_ar" value="${category.name?.ar || ''}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required></div>
            <div id="category-prices-section">
                <label class="block text-sm font-medium text-gray-700">Header Prices (Optional)</label>
                <p class="text-xs text-gray-500">Prices that apply to the whole category (e.g., for different sizes of coffee).</p>
                <div id="cat-prices-container" class="mt-1 space-y-3">
                    ${headerPrices.map((p, i) => `
                        <div class="price-row flex items-center gap-2 pt-3">
                            <input type="text" name="header_size_${i}" value="${p.size}" placeholder="Size (e.g., 12oz)" class="block w-1/2 rounded-md border-gray-300 shadow-sm">
                            <input type="text" name="header_price_${i}" value="${p.price}" placeholder="Price" class="block w-1/2 rounded-md border-gray-300 shadow-sm">
                            <button type="button" class="remove-price-btn text-red-500 hover:text-red-700 ${headerPrices.length === 1 && !p.size && !p.price ? 'hidden' : ''}">&times;</button>
                        </div>
                    `).join('')}
                </div>
                <button type="button" id="add-cat-price-btn" class="mt-2 text-sm text-indigo-600 hover:text-indigo-800">+ Add Header Price</button>
            </div>
        </form>
        `;
    }

    function createItemForm(item = {}, categoryId = '') {
        const prices = item.prices && item.prices.length > 0 ? item.prices : [{ size: 'Standard', price: '' }];
        return `
        <form class="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
             <div>
                <label class="block text-sm font-medium text-gray-700">Image</label>
                <div class="mt-1 flex items-center">
                    <img id="image-preview" src="${item.image ? '../' + item.image : 'https://placehold.co/100x100/e2e8f0/e2e8f0'}" class="image-preview mr-4">
                    <input type="file" name="image_file" accept="image/*" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100">
                </div>
                <input type="hidden" name="image" value="${item.image || ''}">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Category</label>
                <select name="category_id" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    ${menuData.categories.map(cat => `<option value="${cat.id}" ${cat.id === categoryId ? 'selected' : ''}>${cat.name.en}</option>`).join('')}
                </select>
            </div>
             <div>
                <label class="block text-sm font-medium text-gray-700">Item Layout</label>
                <select name="layout" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option value="grid-item" ${item.layout === 'grid-item' ? 'selected' : ''}>Standard (Grid Item)</option>
                    <option value="list-item" ${item.layout === 'list-item' ? 'selected' : ''}>Full-Width Card (List)</option>
                    <option value="highlight-item" ${item.layout === 'highlight-item' ? 'selected' : ''}>Highlighted Item</option>
                    <option value="compact-list-item" ${item.layout === 'compact-list-item' ? 'selected' : ''}>Compact List Item</option>
                    <option value="flavor-item" ${item.layout === 'flavor-item' ? 'selected' : ''}>Flavor Style (No Price)</option>
                </select>
            </div>
            <div><label class="block text-sm font-medium text-gray-700">Name (English)</label><input type="text" name="name_en" value="${item.name?.en || ''}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required></div>
            <div><label class="block text-sm font-medium text-gray-700">Name (Kurdish)</label><input type="text" name="name_ku" value="${item.name?.ku || ''}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required></div>
            <div><label class="block text-sm font-medium text-gray-700">Name (Arabic)</label><input type="text" name="name_ar" value="${item.name?.ar || ''}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required></div>

            <div><label class="block text-sm font-medium text-gray-700">Description (English)</label><textarea name="desc_en" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">${item.description?.en || ''}</textarea></div>
            <div><label class="block text-sm font-medium text-gray-700">Description (Kurdish)</label><textarea name="desc_ku" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">${item.description?.ku || ''}</textarea></div>
            <div><label class="block text-sm font-medium text-gray-700">Description (Arabic)</label><textarea name="desc_ar" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">${item.description?.ar || ''}</textarea></div>

            <div id="item-prices-section">
                <label class="block text-sm font-medium text-gray-700">Prices</label>
                <div id="prices-container" class="mt-1 space-y-3">
                    ${prices.map((p, i) => `
                        <div class="price-row flex items-center gap-2 pt-3">
                            <input type="text" name="size_${i}" value="${p.size}" placeholder="Size (e.g., Small)" class="block w-1/2 rounded-md border-gray-300 shadow-sm">
                            <input type="text" name="price_${i}" value="${p.price}" placeholder="Price" class="block w-1/2 rounded-md border-gray-300 shadow-sm">
                            <button type="button" class="remove-price-btn text-red-500 hover:text-red-700 ${prices.length === 1 ? 'hidden' : ''}">&times;</button>
                        </div>
                    `).join('')}
                </div>
                <button type="button" id="add-price-btn" class="mt-2 text-sm text-indigo-600 hover:text-indigo-800">+ Add Price</button>
            </div>
        </form>
        `;
    }

    function parseItemForm(form) {
        const formData = new FormData(form);
        const categoryId = formData.get('category_id');
        const categoryDbId = menuData.categories.find(c => c.id === categoryId)?.db_id;
        const apiFormData = new FormData();
        for (const [key, value] of formData.entries()) {
            apiFormData.append(key, value);
        }
        apiFormData.set('category_db_id', categoryDbId);
        if (form.querySelector('input[name="image_file"]').files[0]) {
            apiFormData.set('image_file', form.querySelector('input[name="image_file"]').files[0]);
        } else {
            apiFormData.delete('image_file');
        }
        const prices = [];
        form.querySelectorAll('#prices-container .price-row').forEach(row => {
            const size = row.querySelector('input[name^="size_"]').value;
            const price = row.querySelector('input[name^="price_"]').value;
            if (size && price) prices.push({ size, price });
        });
        apiFormData.set('prices', JSON.stringify(prices));
        return { formData: apiFormData };
    }

    function parseCategoryForm(form) {
        const apiFormData = new FormData(form);
        if (form.querySelector('input[name="image_file"]').files[0]) {
            apiFormData.set('image_file', form.querySelector('input[name="image_file"]').files[0]);
        } else {
            apiFormData.delete('image_file');
        }
        const prices = [];
        form.querySelectorAll('#cat-prices-container .price-row').forEach(row => {
            const size = row.querySelector('input[name^="header_size_"]').value;
            const price = row.querySelector('input[name^="header_price_"]').value;
            if (size && price) prices.push({ size, price });
        });
        apiFormData.set('header_prices', JSON.stringify(prices));
        return { formData: apiFormData };
    }

    // --- EVENT HANDLERS ---
    async function handleSaveTranslations(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const updatedTranslations = {
            en: { ...menuData.translations.en, branch_name: data.en_branch_name },
            ar: { ...menuData.translations.ar, branch_name: data.ar_branch_name },
            ku: { ...menuData.translations.ku, branch_name: data.ku_branch_name }
        };
        const payload = new FormData();
        payload.append('translations', JSON.stringify(updatedTranslations));
        try {
            await apiRequest('../api.php?action=saveTranslations', { method: 'POST', body: payload });
            showToast('Translations saved successfully!');
            menuData.translations = updatedTranslations;
        } catch (error) {}
    }

    // --- SORTABLE (DRAG & DROP) LOGIC ---
    function initCategorySortable() {
        const container = document.getElementById('categories-container');
        if (container) {
            const s = Sortable.create(container, {
                animation: 150, handle: '.handle', ghostClass: 'sortable-ghost', chosenClass: 'sortable-chosen',
                onEnd: async (evt) => {
                    const orderData = Array.from(evt.target.children).map((el, index) => ({ id: el.dataset.categoryId, order: index }));
                    const payload = new FormData();
                    payload.append('order_data', JSON.stringify(orderData));
                    payload.append('type', 'categories');
                    await apiRequest('../api.php?action=updateOrder', { method: 'POST', body: payload });
                    showToast('Category order saved!');
                    await initializeApp();
                },
            });
            sortableInstances.push(s);
        }
    }

    function initItemSortable() {
        menuData.categories.forEach(category => {
            const container = document.getElementById(`items-container-${category.id}`);
            if (container) {
                const s = Sortable.create(container, {
                    animation: 150, handle: '.handle', ghostClass: 'sortable-ghost', chosenClass: 'sortable-chosen',
                    onEnd: async (evt) => {
                         const orderData = Array.from(evt.target.children).map((el, index) => ({ id: el.dataset.itemId, order: index }));
                        const payload = new FormData();
                        payload.append('order_data', JSON.stringify(orderData));
                        payload.append('type', 'items');
                        await apiRequest('../api.php?action=updateOrder', { method: 'POST', body: payload });
                        showToast('Item order saved!');
                        await initializeApp();
                    },
                });
                sortableInstances.push(s);
            }
        });
    }

    function destroySortable() {
        sortableInstances.forEach(s => s.destroy());
        sortableInstances = [];
    }

    // --- BINDINGS & STARTUP ---
    function bindItemEventListeners() {
        const addItemBtn = document.getElementById('add-item-btn');
        if (addItemBtn) addItemBtn.addEventListener('click', handleAddItem);
        document.querySelectorAll('.edit-item-btn').forEach(btn => btn.addEventListener('click', handleEditItem));
        document.querySelectorAll('.delete-item-btn').forEach(btn => btn.addEventListener('click', handleDeleteItem));
    }
    function bindCategoryEventListeners() {
        document.getElementById('add-category-btn').addEventListener('click', handleAddCategory);
        document.querySelectorAll('.edit-category-btn').forEach(btn => btn.addEventListener('click', handleEditCategory));
        document.querySelectorAll('.delete-category-btn').forEach(btn => btn.addEventListener('click', handleDeleteCategory));
    }

    async function handleAddItem() {
        const firstCatId = menuData.categories.length > 0 ? menuData.categories[0].id : '';
        const form = await renderModal({ title: 'Add New Item', body: createItemForm({}, firstCatId), confirmText: 'Add Item' }, setupItemForm);
        if (form) {
            const { formData } = parseItemForm(form);
            try {
                await apiRequest('../api.php?action=saveItem', { method: 'POST', body: formData });
                showToast('Item added successfully!');
                await initializeApp();
            } catch (e) {}
        }
    }
    async function handleEditItem(e) {
        const itemId = e.target.dataset.itemId;
        const categoryId = e.target.dataset.categoryId;
        const item = menuData.items[categoryId].find(i => i.id == itemId);
        const form = await renderModal({ title: 'Edit Menu Item', body: createItemForm(item, categoryId), confirmText: 'Save Changes' }, setupItemForm);
        if (form) {
            const { formData } = parseItemForm(form);
            formData.append('id', itemId);
            try {
                await apiRequest('../api.php?action=saveItem', { method: 'POST', body: formData });
                showToast('Item saved successfully!');
                await initializeApp();
            } catch (e) {}
        }
    }
    async function handleDeleteItem(e) {
        const itemId = e.target.dataset.itemId;
        const confirmed = await renderModal({ title: 'Delete Item', body: `<p>Are you sure you want to delete this item?</p>`, confirmText: 'Delete' });
        if (confirmed) {
            const formData = new FormData();
            formData.append('id', itemId);
            try {
                await apiRequest('../api.php?action=deleteItem', { method: 'POST', body: formData });
                showToast('Item deleted.');
                await initializeApp();
            } catch (e) {}
        }
    }

    async function handleAddCategory() {
        const form = await renderModal({ title: 'Add New Category', body: createCategoryForm(), confirmText: 'Add Category' }, setupCategoryForm);
        if (form) {
            const { formData } = parseCategoryForm(form);
            try {
                await apiRequest('../api.php?action=saveCategory', { method: 'POST', body: formData });
                showToast('Category added successfully!');
                await initializeApp();
            } catch (e) {}
        }
    }
    async function handleEditCategory(e) {
        const categoryId = e.target.dataset.categoryId;
        const category = menuData.categories.find(c => c.db_id == categoryId);
        const form = await renderModal({ title: 'Edit Category', body: createCategoryForm(category), confirmText: 'Save Changes' }, setupCategoryForm);
        if (form) {
            const { formData } = parseCategoryForm(form);
            try {
                await apiRequest('../api.php?action=saveCategory', { method: 'POST', body: formData });
                showToast('Category saved successfully!');
                await initializeApp();
            } catch (e) {}
        }
    }
    async function handleDeleteCategory(e) {
        const categoryId = e.target.dataset.categoryId;
        const confirmed = await renderModal({ title: 'Delete Category', body: `<p>Are you sure? This is only possible if the category has no items.</p>`, confirmText: 'Delete' });
        if (confirmed) {
            const formData = new FormData();
            formData.append('id', categoryId);
            try {
                await apiRequest('../api.php?action=deleteCategory', { method: 'POST', body: formData });
                showToast('Category deleted.');
                await initializeApp();
            } catch (e) {}
        }
    }

    function setupImageUpload(modalElement) {
        const fileInput = modalElement.querySelector('input[type="file"][name="image_file"]');
        const preview = modalElement.querySelector('#image-preview');
        fileInput?.addEventListener('change', () => {
            if (fileInput.files[0]) {
                preview.src = URL.createObjectURL(fileInput.files[0]);
            }
        });
    }

    function handlePriceForm(modalElement, containerId, addButtonId, sizePrefix, pricePrefix) {
        const container = modalElement.querySelector(`#${containerId}`);
        const addBtn = modalElement.querySelector(`#${addButtonId}`);

        const updateRemoveButtons = () => {
            const rows = container.querySelectorAll('.price-row');
            rows.forEach(row => {
                row.querySelector('.remove-price-btn').classList.toggle('hidden', rows.length === 1);
            });
        };
        container.addEventListener('click', e => {
            if (e.target.classList.contains('remove-price-btn')) {
                e.target.closest('.price-row').remove();
                updateRemoveButtons();
            }
        });
        addBtn.addEventListener('click', () => {
            const newIndex = container.children.length;
            const newRow = document.createElement('div');
            newRow.className = 'price-row flex items-center gap-2 pt-3';
            newRow.innerHTML = `
                <input type="text" name="${sizePrefix}_${newIndex}" value="" placeholder="Size" class="block w-1/2 rounded-md border-gray-300 shadow-sm">
                <input type="text" name="${pricePrefix}_${newIndex}" value="" placeholder="Price" class="block w-1/2 rounded-md border-gray-300 shadow-sm">
                <button type="button" class="remove-price-btn text-red-500 hover:text-red-700">&times;</button>
            `;
            container.appendChild(newRow);
            updateRemoveButtons();
        });
        updateRemoveButtons();
    }

    function setupItemForm(modalElement) {
        setupImageUpload(modalElement);
        handlePriceForm(modalElement, 'prices-container', 'add-price-btn', 'size', 'price');
    }

    function setupCategoryForm(modalElement) {
        setupImageUpload(modalElement);
        handlePriceForm(modalElement, 'cat-prices-container', 'add-cat-price-btn', 'header_size', 'header_price');
        const idInput = modalElement.querySelector('input[name="id"]');
        if (idInput.value) {
            idInput.readOnly = true;
            idInput.classList.add('bg-gray-100');
        }
    }

    async function renderModal(config, setupFn) {
        const modalId = `modal-${Date.now()}`;
        modalContainer.innerHTML = `
            <div id="${modalId}" class="modal fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-40 p-4 opacity-0">
                <div class="modal-content bg-white p-8 rounded-lg shadow-2xl w-full max-w-2xl transform scale-95">
                    <h2 class="text-2xl font-bold mb-6">${config.title}</h2>
                    ${config.body}
                    <div class="mt-8 flex justify-end space-x-3">
                        <button class="cancel-btn bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300">Cancel</button>
                        <button class="confirm-btn bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700">${config.confirmText}</button>
                    </div>
                </div>
            </div>`;
        const modalElement = document.getElementById(modalId);
        const form = modalElement.querySelector('form');

        requestAnimationFrame(() => {
            modalElement.classList.remove('opacity-0');
            modalElement.querySelector('.modal-content').style.transform = 'scale(1)';
        });

        if (setupFn) setupFn(modalElement);

        return new Promise(resolve => {
            modalElement.querySelector('.confirm-btn').onclick = () => {
                if (form && !form.checkValidity()) {
                    form.reportValidity();
                    return;
                }
                closeModal(modalElement);
                resolve(form || true);
            };
            modalElement.querySelector('.cancel-btn').onclick = () => { closeModal(modalElement); resolve(null); };
            modalElement.onclick = e => { if (e.target === modalElement) { closeModal(modalElement); resolve(null); } };
        });
    }

    function closeModal(modalElement) { if (!modalElement) return; modalElement.classList.add('opacity-0'); modalElement.querySelector('.modal-content').style.transform = 'scale(0.95)'; setTimeout(() => { modalContainer.innerHTML = ''; }, 250); }

    initializeApp();
</script>
</body>
</html>