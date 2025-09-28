<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ice Pack</title>
    <!-- NOTE: You must keep your assets folder in the same directory -->
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="icon" href="./assets/logo/icon.svg" type="image/png" sizes="16x16">
    <style>
        .page-content { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .product a, .has-shadow { border-radius: 10px; }
        .popup { position: fixed; visibility: hidden; opacity: 0; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(0, 0, 0, 0.85); z-index: 1000; display: flex; justify-content: center; align-items: center; transition: visibility 0s 0.25s, opacity 0.25s ease-in-out; }
        .popup.visible { visibility: visible; opacity: 1; transition: visibility 0s, opacity 0.25s ease-in-out; }
        .popup img { max-width: 90%; max-height: 90%; transition: transform 0.25s ease; cursor: zoom-in; }
        .popup .close { position: absolute; top: 20px; right: 35px; color: white; font-size: 40px; font-weight: bold; cursor: pointer; }
        .zoomed-in { transform: scale(1.5); cursor: zoom-out; }
        .product1 a { background: #663793; display: block; background-image: url("./assets/background/bg2.jpg"); background-size: cover; border-radius: 10px; }
        .product1 .content { padding: 15px; }
    </style>
</head>
<body class="init">

    <div id="app-container" class="page-wrap page__menu">
        <!-- Dynamic content will be rendered here -->
    </div>

    <div id="popup" class="popup">
      <span class="close">&times;</span>
      <img id="popup-img" src="" alt="Popup Image">
    </div>

<script type="module">
    // --- STATE ---
    let menuData;
    let currentLang = 'en';

    // --- DOM ELEMENTS ---
    const appContainer = document.getElementById('app-container');
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const closeBtn = document.querySelector(".popup .close");

    // --- RENDERING FUNCTIONS ---
    function renderLanguageSelector() {
        const t = menuData.translations[currentLang];
        const languages = [ { code: 'ku', name: t.kurdish, flag: './assets/flags/ku.jpg' }, { code: 'ar', name: t.arabic, flag: './assets/flags/ar.jpg' }, { code: 'en', name: t.english, flag: './assets/flags/en.jpg' }];
        appContainer.innerHTML = `
            <div class="logo"><img src="./assets/logo/icelogo.svg" alt="ICE PACK"></div>
            <div class="menu__page__content page-content"><div class="container"><div class="row10 u-flex"><div class="col-content">
                <div class="section section--home"><div class="products u-flex--wrap" style="justify-content: center;">
                    ${languages.map(lang => `
                        <div style="width: 33.333%; max-width: 200px; padding: 7px; margin: 10px;" class="has-shadow">
                            <a href="#/${lang.code}/categories" style="display: block;">
                                <figure><img src="${lang.flag}" alt="${lang.name}"></figure>
                                <div class="content"><h5 style="color: #663793;">${lang.name}</h5></div>
                            </a>
                        </div>`).join('')}
                </div></div>
            </div></div></div></div>`;
        document.body.className = `init`;
    }

    function renderCategories(lang) {
        currentLang = lang;
        const t = menuData.translations[lang];
        document.body.className = `init ${lang}`;
        appContainer.innerHTML = `
             <div class="menu__page__content page-content">
                <div class="logo">
                    <img src="./assets/logo/icelogo.svg" alt="ICE PACK">
                    <h5 class="ff" style="font-size: 30px;">${t.branch_name}</h5>
                </div>
                <div class="container"><div class="row10 u-flex"><div class="col-content">
                    <div class="section section--home">
                        <a href="#/" class="back-btn" style="display:inline-block; margin-bottom: 20px; background: #663793; color: white; padding: 8px 15px; border-radius: 8px; font-weight: bold;">&larr; Back to Languages</a>
                        <div class="products u-flex u-flex--wrap">
                            ${menuData.categories.map(cat => `
                                <div class="product">
                                    <a class="has-shadow" href="#/${lang}/items/${cat.id}">
                                        <figure><img src="${cat.image}" alt="${cat.name[lang] || cat.name.en}"></figure>
                                        <div class="content"><h5>${cat.name[lang] || cat.name.en}</h5></div>
                                    </a>
                                </div>`).join('')}
                        </div>
                    </div>
                </div></div></div>
            </div>`;
    }
    
    function renderItems(lang, categoryId) {
        currentLang = lang;
        const category = menuData.categories.find(c => c.id === categoryId);
        if (!category) {
            appContainer.innerHTML = `<div class="p-8 text-center text-red-500">Category not found. <a href="#/${lang}/categories" class="text-blue-500">Go back</a></div>`;
            return;
        }
        
        const items = menuData.items[categoryId] || [];
        document.body.className = `init ${lang}`;
        
        const itemsHtml = items.map(item => {
            switch(item.layout) {
                case 'list-item': return renderListItem(item, lang);
                case 'flavor-item': return renderFlavorItem(item, lang);
                case 'grid-item':
                default:
                    return renderGridItem(item, lang);
            }
        }).join('');
        
        let headerHtml = '';
        if (category.layout === 'list-header-priced' && category.header_prices) {
            headerHtml = `<div class="sec-head u-flex products u-flex--content-between u-flex--item-center u-flex--wrap">
                ${category.header_prices.map(p => `<h5 class="flaver">${p.size}<br>${p.price}</h5>`).join('')}
            </div>`;
        }

        appContainer.innerHTML = `
            <div class="menu__page__content page-content">
                <div class="logo"><img src="./assets/logo/icelogo.svg" alt="ICE PACK"></div>
                <div class="container"><div class="row10 u-flex"><div class="col-content"><div class="section section--home">
                    <a href="#/${lang}/categories" style="display:inline-block; margin-bottom: 20px; background: #663793; color: white; padding: 8px 15px; border-radius: 8px; font-weight: bold;">&larr; Back to Categories</a>
                    <h2 style="font-size: 2rem; color: #4E3022; text-align: center; margin-bottom: 20px; font-weight: bold;">${category.name[lang]}</h2>
                    ${headerHtml}
                    <div class="products u-flex u-flex--wrap">${itemsHtml}</div>
                </div></div></div></div>
            </div>`;

        document.querySelectorAll('.item-image').forEach(img => img.addEventListener('click', (e) => openPopup(e.currentTarget)));
    }

    function renderGridItem(item, lang) {
        return `<div class="product">
            <a class="has-shadow">
                <figure><img class="item-image" src="${item.image}" alt="${item.name[lang]}"></figure>
                <div class="content">
                    <h5>${item.name[lang]}</h5>
                    ${item.description && item.description[lang] ? `<p style="font-size: 14px; color: #555; margin-top: 5px;">${item.description[lang]}</p>` : ''}
                    <div style="margin-top: 8px;">
                        ${(item.prices || []).map(p => `
                            <h5 style="font-size:18px; display: inline-block; margin-right: 10px;">
                                ${p.size !== 'Standard' ? p.size + ':' : ''} ${p.price}
                            </h5>`).join('')}
                    </div>
                </div>
            </a>
        </div>`;
    }

    function renderListItem(item, lang) {
         return `<div class="product1">
            <a>
                <figure><img class="item-image" src="${item.image}" alt="${item.name[lang]}"></figure>
                <div class="content"><h5>${item.name[lang]}</h5></div>
                <div class="sec-head u-flex products u-flex--content-between u-flex--item-center u-flex--wrap" style="background-image:none;">
                   ${(item.prices || []).map(p => `<h5 style="font-size:20px">${p.size}<br>${p.price}</h5>`).join('')}
                </div>
            </a>
        </div>`;
    }
    
    function renderFlavorItem(item, lang) {
        return `<div class="flaver">
            <a>
                <figure><img class="item-image" src="${item.image}" alt="${item.name[lang]}"></figure>
                <div class="content"><h5 class="flverColor">${item.name[lang]}</h5></div>
            </a>
        </div>`;
    }


    // --- ROUTING & INITIALIZATION ---
    function handleRouteChange() {
        const hash = window.location.hash || '#/';
        const [_, lang, page, param] = hash.split('/');
        if (!menuData) return;
        if (page === 'categories') {
            renderCategories(lang || 'en');
        } else if (page === 'items' && param) {
            renderItems(lang || 'en', param);
        } else {
            renderLanguageSelector();
        }
    }

    async function init() {
        try {
            // UPDATED: Fetch from PHP API instead of static JSON file
            const response = await fetch('api.php?action=get_menu&t=' + new Date().getTime());
            if (!response.ok) throw new Error('Could not load menu data from the server.');
            menuData = await response.json();
            window.addEventListener('hashchange', handleRouteChange);
            handleRouteChange();
        } catch (error) {
            appContainer.innerHTML = `<div style="padding: 2rem; text-align: center; color: red;">Error: ${error.message}</div>`;
        }
    }

    // --- POPUP LOGIC ---
    function openPopup(img) { popupImg.src = img.src; popup.classList.add("visible"); }
    function closePopup() { popup.classList.remove("visible"); popupImg.classList.remove("zoomed-in"); }
    function toggleZoom() { popupImg.classList.toggle("zoomed-in"); }
    closeBtn.addEventListener("click", closePopup);
    popup.addEventListener("click", (e) => { if (e.target === popup) closePopup(); });
    popupImg.addEventListener("click", (e) => { e.stopPropagation(); toggleZoom(); });

    init();
</script>

</body>
</html>
