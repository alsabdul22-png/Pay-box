    // --- Benutzerverwaltung und Tagesabschluss ---
    const users = ['Ahmed', 'Aboud', 'Jawad'];
    let currentUser = null;
    let salesData = JSON.parse(localStorage.getItem('salesData') || '{}');

    function selectUser(user) {
        currentUser = user;
        localStorage.setItem('currentUser', user);
        document.getElementById('userSelectionModal').classList.remove('show');
        updateUserButton();
    }

    function updateUserButton() {
        // Optional: Benutzername im UI anzeigen
        // z.B. in der Header-Leiste
        // document.getElementById('currentUserBtn').textContent = currentUser;
    }

    function recordSale(total, customerCount=1) {
        if (!currentUser) return;
        if (!salesData[currentUser]) {
            salesData[currentUser] = { totalSales: 0, customersCount: 0 };
        }
        salesData[currentUser].totalSales += total;
        salesData[currentUser].customersCount += customerCount;
        localStorage.setItem('salesData', JSON.stringify(salesData));
    }

    function openDailyClosing() {
        // Zeige Modal
        document.getElementById('dailyClosingModal').classList.add('show');
        renderDailyClosing();
    }

    function closeDailyClosing() {
        document.getElementById('dailyClosingModal').classList.remove('show');
    }

    function renderDailyClosing() {
        const t = translations[currentLanguage];
        let html = '';
        if (currentUser && salesData[currentUser]) {
            html += `<div><strong>${currentUser}</strong></div>`;
            html += `<div>${t.totalSales}: <span style="color:#0074d9;font-weight:bold;">€ ${salesData[currentUser].totalSales.toFixed(2)}</span></div>`;
            html += `<div>${t.customersCount}: <span style="color:#0074d9;font-weight:bold;">${salesData[currentUser].customersCount}</span></div>`;
        } else {
            html += `<div>${t.noPurchases}</div>`;
        }
        document.getElementById('dailyClosingContent').innerHTML = html;
    }

    function resetDailySales() {
        if (currentUser && salesData[currentUser]) {
            salesData[currentUser] = { totalSales: 0, customersCount: 0 };
            localStorage.setItem('salesData', JSON.stringify(salesData));
        }
    }
    // Einstellungen öffnen/schließen
    function openSettings() {
        document.getElementById('settingsModal').classList.add('show');
    }
    function closeSettings() {
        document.getElementById('settingsModal').classList.remove('show');
    }
    function resetApp() {
        if(confirm('App wirklich zurücksetzen? Alle Daten gehen verloren!')) {
            localStorage.clear();
            location.reload();
        }
    }
const translations = {
    fr: {
        appName: 'PayBox',
        articles: 'Articles',
        newArticle: 'Nouvel article',
        selectImage: 'Sélectionner une image',
        addButton: '+ Ajouter',
        login: 'Connexion',
        loginButton: 'Connexion',
        userPlaceholder: 'Utilisateur',
        passwordPlaceholder: 'Mot de passe',
        loginError: 'Identifiants invalides',
        cart: 'Panier',
        emptyCart: 'Le panier est vide',
        total: 'Total :',
        cancel: 'Annuler',
        cash: '💵 Espèces',
        card: '💳 Carte',
        openCash: '🔓 Ouvrir la caisse',
        receiptQuestion: 'Reçu ?',
        receiptAsk: 'Voulez-vous un reçu ?',
        yes: '✓ Oui, imprimer',
        no: '✕ Non',
        paymentMethod: 'Mode de paiement',
        completed: 'Paiement effectué',
        scanHint: 'Scannez le code-barres ou saisissez-le manuellement',
        categoryInfo: 'Le système prend désormais en charge la catégorisation professionnelle des produits...',
        selectUser: 'Sélectionner un utilisateur',
        selectUserHint: 'Choisissez un utilisateur pour la transaction',
        dailyClosing: 'Clôture du jour',
        dailyClosingReport: 'Rapport de clôture',
        totalSales: 'Ventes totales',
        customersCount: 'Nombre de clients',
        noPurchases: 'Aucune vente',
        dailyClosingSummary: 'Résumé de la clôture du jour'
    },
    ru: {
        appName: 'PayBox',
        articles: 'Товары',
        newArticle: 'Новый товар',
        selectImage: 'Выбрать изображение',
        addButton: '+ Добавить',
        login: 'Войти',
        loginButton: 'Войти',
        userPlaceholder: 'Пользователь',
        passwordPlaceholder: 'Пароль',
        loginError: 'Неверные данные',
        cart: 'Корзина',
        emptyCart: 'Корзина пуста',
        total: 'Итого:',
        cancel: 'Отмена',
        cash: '💵 Наличные',
        card: '💳 Карта',
        openCash: '🔓 Открыть кассу',
        receiptQuestion: 'Чек?',
        receiptAsk: 'Хотите чек?',
        yes: '✓ Да, печать',
        no: '✕ Нет',
        paymentMethod: 'Способ оплаты',
        completed: 'Оплата завершена',
        scanHint: 'Отсканируйте штрихкод или введите вручную',
        categoryInfo: 'Система теперь поддерживает профессиональную категоризацию товаров...',
        selectUser: 'Выбрать пользователя',
        selectUserHint: 'Выберите пользователя для операции',
        dailyClosing: 'Закрытие дня',
        dailyClosingReport: 'Отчет о закрытии дня',
        totalSales: 'Общий объем продаж',
        customersCount: 'Количество клиентов',
        noPurchases: 'Нет продаж',
        dailyClosingSummary: 'Сводка закрытия дня'
    },
    it: {
        appName: 'PayBox',
        articles: 'Articoli',
        newArticle: 'Nuovo articolo',
        selectImage: 'Seleziona immagine',
        addButton: '+ Aggiungi',
        login: 'Accedi',
        loginButton: 'Accedi',
        userPlaceholder: 'Utente',
        passwordPlaceholder: 'Password',
        loginError: 'Credenziali non valide',
        cart: 'Carrello',
        emptyCart: 'Il carrello è vuoto',
        total: 'Totale:',
        cancel: 'Annulla',
        cash: '💵 Contanti',
        card: '💳 Carta',
        openCash: '🔓 Apri cassa',
        receiptQuestion: 'Ricevuta?',
        receiptAsk: 'Vuoi una ricevuta?',
        yes: '✓ Sì, stampa',
        no: '✕ No',
        paymentMethod: 'Metodo di pagamento',
        completed: 'Pagamento completato',
        scanHint: 'Scansiona il codice a barre o inseriscilo manualmente',
        categoryInfo: 'Il sistema ora supporta la categorizzazione professionale dei prodotti...',
        selectUser: 'Seleziona utente',
        selectUserHint: 'Scegli un utente per la transazione',
        dailyClosing: 'Chiusura giornaliera',
        dailyClosingReport: 'Rapporto di chiusura',
        totalSales: 'Vendite totali',
        customersCount: 'Numero clienti',
        noPurchases: 'Nessuna vendita',
        dailyClosingSummary: 'Riepilogo chiusura giornaliera'
    }
};
// Sprach-Dropdown öffnen/schließen
function toggleLanguageDropdown(event) {
    event.stopPropagation();
    const dropdown = event.currentTarget.closest('.language-dropdown');
    dropdown.classList.toggle('open');
}

// Sprach-Dropdown schließen, wenn außerhalb geklickt wird
document.addEventListener('click', function(e) {
    document.querySelectorAll('.language-dropdown.open').forEach(el => el.classList.remove('open'));
});
// Öffnet das Modal für neues Produkt
function openAddProduct() {
    document.getElementById('addProductModal').classList.add('show');
}

// Schließt das Modal für neues Produkt
function closeAddProductModal() {
    document.getElementById('addProductModal').classList.remove('show');
}
// Produkt-Kategorien

const PRODUCT_CATEGORIES = [
    { key: 'food', label: 'Lebensmittel' },
    { key: 'cheese_meat', label: 'Käse & Fleisch' },
    { key: 'vegetables', label: 'Gemüse' },
    { key: 'drinks', label: 'Getränke' },
    { key: 'sweets', label: 'Süßwaren' },
    { key: 'other', label: 'Sonstiges' }
];

let currentLanguage = 'de';

// تغيير اللغة
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
}

// تحديث نصوص الصفحة
function updatePageLanguage() {
    const t = translations[currentLanguage];
    // ...existing code...
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            if (el.tagName === 'BUTTON' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'SPAN' || el.tagName === 'P') {
                el.textContent = t[key];
            }
        }
    });
    document.getElementById('productName').placeholder = currentLanguage === 'de' ? 'Artikelname' : 
                                                          currentLanguage === 'en' ? 'Article Name' : 'اسم المنتج';
    document.getElementById('productPrice').placeholder = currentLanguage === 'de' ? 'Preis' : 
                                                          currentLanguage === 'en' ? 'Price' : 'السعر';
    if (currentLanguage === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.style.direction = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
        document.body.style.direction = 'ltr';
    }
    updateCategoryInfoText();
}

function updateCategoryInfoText() {
    const infoDiv = document.getElementById('categoryInfo');
    if (infoDiv) {
        infoDiv.textContent = categoryInfoTexts[currentLanguage] || categoryInfoTexts['de'];
    }
}

// ...existing code...
const articleImages = {
    'Kaffee': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2YwZjBmMCIvPjxyZWN0IHg9IjYwIiB5PSI1MCIgd2lkdGg9IjEzNiIgaGVpZ2h0PSIxNTAiIHJ4PSIxMCIgZmlsbD0iIzhCNDUxMyIvPjxyZWN0IHg9IjcwIiB5PSI2MCIgd2lkdGg9IjExNiIgaGVpZ2h0PSIxMzAiIGZpbGw9IiM2NDMzMDMiIHJ4PSI4Ii8+PHJlY3QgeD0iODAiIHk9IjcwIiB3aWR0aD0iOTYiIGhlaWdodD0iNTAiIGZpbGw9IiNBRjY0MjYiIHJ4PSI1Ii8+PHBhdGggZD0iTSAxOTAgOTAgUSAyMDAgOTAgMjEwIDEwMCIgc3Ryb2tlPSIjOEI0NTEzIiBzdHJva2Utd2lkdGg9IjgiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==',
    'Wasser': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2VmZjZmYiIvPjxyZWN0IHg9IjgwIiB5PSI0MCIgd2lkdGg9Ijk2IiBoZWlnaHQ9IjE2MCIgcng9IjEyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGI0ZDgiIHN0cm9rZS13aWR0aD0iOCIvPjxyZWN0IHg9Ijg4IiB5PSI2MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjExMiIgZmlsbD0iIzJCQzZFQyIgcng9IjgiIHJ5PSIzMiIvPjxwYXRoIGQ9Ik0gMTAwIDEyMCBRIDExMCAxMTAgMTIwIDEyMCIgc3Ryb2tlPSIjNjZERkZGIiBzdHJva2Utd2lkdGg9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==',
    'Sandwich': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2ZmZjJjYyIvPjxwYXRoIGQ9Ik0gNjAgMTIwIEwgNjAgMTQwIFEgNjAgMTUwIDcwIDE1MCBMIDE4NiAxNTAgUSAxOTYgMTUwIDE5NiAxNDAgTCAxOTYgMTIwIiBmaWxsPSIjRDJCNDhDIiByeD0iOCIvPjxyZWN0IHg9IjcwIiB5PSI5MCIgd2lkdGg9IjExNiIgaGVpZ2h0PSIzMCIgZmlsbD0iI0Q4MjAzQiIgcng9IjgiLz48cmVjdCB4PSI3MCIgeT0iMjAiIHdpZHRoPSIxMTYiIGhlaWdodD0iNzAiIGZpbGw9IiNENDQxMzEiIHJ4PSI4Ii8+PHJlY3QgeD0iNzAiIHk9IjMwIiB3aWR0aD0iMTExNiIgaGVpZ2h0PSI1MCIgZmlsbD0iI0ZGRkFDRCIgb3BhY2l0eT0iMC42Ii8+PHJlY3QgeD0iOTAiIHk9IjEwMCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMjJBNjQ2IiBvcGFjaXR5PSIwLjgiLz48cmVjdCB4PSIxMzQiIHk9IjEwMCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMjJBNjQ2IiBvcGFjaXR5PSIwLjgiLz48L3N2Zz4=',
    'Kuchen': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2ZmZTZkNSIvPjxwYXRoIGQ9Ik0gNTAgMTcwIEwgNzAgNTAgTCAxODYgNTAgTCAyMDYgMTcwIFoiIGZpbGw9IiM4QjQ1MTMiIHN0cm9rZT0iIzY0MzMwMyIgc3Ryb2tlLXdpZHRoPSI0Ii8+PGNpcmNsZSBjeD0iODUiIGN5PSI4MCIgcj0iOCIgZmlsbD0iI0ZGNDQwMCIvPjxjaXJjbGUgY3g9IjEyMCIgY3k9IjcwIiByPSI4IiBmaWxsPSIjRkY0NDAwIi8+PGNpcmNsZSBjeD0iMTU1IiBjeT0iODAIiByPSI4IiBmaWxsPSIjRkY0NDAwIi8+PHJlY3QgeD0iNjAiIHk9IjE3MCIgd2lkdGg9IjEzNiIgaGVpZ2h0PSIyMCIgZmlsbD0iI0Y1RDc2QiIgcng9IjUiLz48cGF0aCBkPSJNIDEwMCA0MCBMIDEwMCAyNSBRIDEwMCA0IDEwOCAyNCBMIDExNiAyOCBRIDExNiA0IDEyOCAyMiBMIDEyOCA0MCIgZmlsbD0iI0ZGRkEwMCIgc3Ryb2tlPSIjRkZFNjAwIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=',
    'Saft': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2ZmZTZkNSIvPjxyZWN0IHg9IjkwIiB5PSI0MCIgd2lkdGg9Ijc2IiBoZWlnaHQ9IjEzMCIgcng9IjEwIiBmaWxsPSJub25lIiBzdHJva2U9IiNFQTIwMDAiIHN0cm9rZS13aWR0aD0iOCIvPjxyZWN0IHg9IjEwMCIgeT0iNjAiIHdpZHRoPSI1NiIgaGVpZ2h0PSI5MCIgZmlsbD0iI0ZGNDA0MCIgb3BhY2l0eT0iMC44Ii8+PHJlY3QgeD0iMTA4IiB5PSI0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjNDQ0IiByeD0iNSIvPjxjaXJjbGUgY3g9IjEyOCIgY3k9IjMwIiByPSI2IiBmaWxsPSIjODg4Ii8+PGNpcmNsZSBjeD0iMTI0IiBjeT0iMjAiIHI9IjQiIGZmlsbD0iI0FBQUIiLz48L3N2Zz4=',
    'Salat': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2VmZjZmYiIvPjxwYXRoIGQ9Ik0gNzAgMTUwIEwgOTAgNjAgTCAxMjggNDAgTCAxNjYgNjAgTCAxODYgMTUwIiBmaWxsPSIjMjJBNjQ2IiBvcGFjaXR5PSIwLjciLz48cGF0aCBkPSJNIDUwIDE3MCBMIDcwIDE1MCBMMTg2IDE1MCBMMjA2IDE3MCBaIiBmaWxsPSIjRThGNUU5Ii8+PGNpcmNsZSBjeD0iOTAiIGN5PSIxMjAiIHI9IjEyIiBmaWxsPSIjMjJBNjQ2IiBvcGFjaXR5PSIwLjkiLz48Y2lyY2xlIGN4PSIxMjgiIGN5PSI5MCIgcj0iMTYiIGZpbGw9IiMyMkE2NDYiIHN0cm9rZT0iI0ZGNDQ4QyIgc3Ryb2tlLXdpZHRoPSI0Ii8+PGNpcmNsZSBjeD0iMTY2IiBjeT0iMTIwIiByPSIxMiIgZmlsbD0iIzIyQTY0NiIgb3BhY2l0eT0iMC45Ii8+PHJlY3QgeD0iNjAiIHk9IjE3MCIgd2lkdGg9IjEzNiIgaGVpZ2h0PSIyMCIgZmlsbD0iI0YyRkQyRiIgcng9IjUiLz48L3N2Zz4='
};

// Kategoriebeschreibungstexte für alle Sprachen
const categoryInfoTexts = {
    de: 'Das System unterstützt nun eine professionelle Produktkategorisierung. Produkte können beim Anlegen einer der vordefinierten Kategorien wie Lebensmittel, Käse & Fleisch, Gemüse, Getränke, Süßwaren oder Sonstiges zugeordnet werden. Über eine komfortable Auswahl oberhalb der Produktliste lassen sich die Artikel gezielt nach Kategorie filtern und übersichtlich anzeigen. Dies erleichtert die Verwaltung und sorgt für eine strukturierte, benutzerfreundliche Darstellung aller Produkte.',
    en: 'The system now supports professional product categorization. When adding a product, you can assign it to one of the predefined categories such as Food, Cheese & Meat, Vegetables, Drinks, Sweets, or Other. A convenient selection above the product list allows you to filter and display items by category. This makes management easier and ensures a structured, user-friendly presentation of all products.',
    ar: 'يدعم النظام الآن تصنيف المنتجات بشكل احترافي. عند إضافة منتج جديد، يمكنك تعيينه إلى إحدى الفئات المحددة مسبقًا مثل المواد الغذائية أو الجبن واللحوم أو الخضروات أو المشروبات أو الحلويات أو غير ذلك. يمكنك تصفية المنتجات حسب الفئة من خلال القائمة أعلى قائمة المنتجات، مما يسهل الإدارة ويضمن عرضًا منظمًا وسهل الاستخدام لجميع المنتجات.'
};

let products = [];
let cart = [];
let nextProductId = 7;
let currentProductImage = null;

// Barcode-Handling
function handleBarcodeInput(event) {
    if (event.key !== 'Enter') return;
    
    const barcode = document.getElementById('barcodeInput').value.trim();
    if (!barcode) return;
    
    // Suche Produkt mit diesem Barcode
    const product = products.find(p => p.barcode && p.barcode.toLowerCase() === barcode.toLowerCase());
    
    if (product) {
        addToCart(product);
        document.getElementById('barcodeInput').value = '';
        document.getElementById('barcodeInput').focus();
        // Flash-Effekt für erfolgreichen Scan
        document.getElementById('barcodeInput').style.borderColor = '#00ff00';
        setTimeout(() => {
            document.getElementById('barcodeInput').style.borderColor = 'rgba(0, 212, 255, 0.3)';
        }, 500);
    } else {
        // Error-Flash
        document.getElementById('barcodeInput').style.borderColor = '#ff6b6b';
        alert(currentLanguage === 'de' ? 'Barcode nicht gefunden!' : 
              currentLanguage === 'en' ? 'Barcode not found!' : 'لم يتم العثور على الباركود!');
        setTimeout(() => {
            document.getElementById('barcodeInput').style.borderColor = 'rgba(0, 212, 255, 0.3)';
            document.getElementById('barcodeInput').value = '';
        }, 500);
    }
}

function updateTime() {
    const timeEl = document.getElementById('time');
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    };
    timeEl.textContent = now.toLocaleDateString('de-DE', options);
}

// Produkte laden und anzeigen
function loadProducts() {
    const stored = localStorage.getItem('products');
    products = stored ? JSON.parse(stored).map(p => ({...p, category: p.category || 'food'})) : defaultProducts.map(p => ({...p}));
    nextProductId = Math.max(...products.map(p => p.id), 6) + 1;
    renderProducts();
}

// Produkte rendern
function renderProducts(selectedCategory) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    let filtered = products;
    if (selectedCategory && selectedCategory !== 'all') {
        filtered = products.filter(p => p.category === selectedCategory);
    }
    filtered.forEach(product => {
        const btn = document.createElement('button');
        btn.className = 'product-btn';
        
        let imageHTML = '';
        if (product.image) {
            imageHTML = `<img src="${product.image}" class="product-image" alt="${product.name}">`;
        } else {
            imageHTML = `<div class="product-image-placeholder">📦</div>`;
        }
        
        btn.innerHTML = `
            ${imageHTML}
            <span class="product-name">${product.name}</span>
            <span class="product-price">€ ${product.price.toFixed(2)}</span>
            <span class="product-delete" onclick="deleteProduct(event, ${product.id})">✕</span>
        `;
        btn.onclick = () => addToCart(product);
        grid.appendChild(btn);
    });
    // Wenn keine Produkte, Hinweis anzeigen
    if (filtered.length === 0) {
        grid.innerHTML = '<div style="color:#888;text-align:center;padding:30px;">Keine Produkte in dieser Kategorie.</div>';
    }
}

// Neues Produkt hinzufügen
function addProduct() {
    const nameInput = document.getElementById('productName');
    const priceInput = document.getElementById('productPrice');
    const barcodeInput = document.getElementById('productBarcode');
    const categorySelect = document.getElementById('productCategory');

    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);
    const barcode = barcodeInput.value.trim() || null;
    const category = categorySelect ? categorySelect.value : 'food';

    if (!name || isNaN(price) || price < 0) {
        alert('Bitte geben Sie einen gültigen Namen und Preis ein.');
        return;
    }

    products.push({
        id: nextProductId++,
        name: name,
        price: price,
        image: currentProductImage,
        barcode: barcode,
        category: category
    });

    localStorage.setItem('products', JSON.stringify(products));
    nameInput.value = '';
    priceInput.value = '';
    barcodeInput.value = '';
    if (categorySelect) categorySelect.value = 'food';
    document.getElementById('productImage').value = '';
    const preview = document.getElementById('imagePreview');
    preview.classList.remove('show');
    document.getElementById('imageText').textContent = 'Bild auswählen';
    document.getElementById('imagePreviewSmall').textContent = '🖼️';
    currentProductImage = null;
    renderProducts();
}

// Bildvorschau
function previewImage(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const imageData = e.target.result;
        currentProductImage = imageData;
        
        const preview = document.getElementById('imagePreview');
        const imageText = document.getElementById('imageText');
        const imageIcon = document.getElementById('imagePreviewSmall');
        
        preview.src = imageData;
        preview.classList.add('show');
        imageText.textContent = 'Bild geändert ✓';
        imageIcon.textContent = '✓';
    };
    reader.readAsDataURL(file);
}

// Produkt löschen
function deleteProduct(e, id) {
    e.stopPropagation();
    if (confirm('Produkt wirklich löschen?')) {
        products = products.filter(p => p.id !== id);
        localStorage.setItem('products', JSON.stringify(products));
        renderProducts();
    }
}

// Zum Warenkorb hinzufügen
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    renderCart();
}

// Warenkorb rendern
function renderCart() {
    const cartContainer = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart">Warenkorb ist leer</p>';
    } else {
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-details">${item.quantity} × € ${item.price.toFixed(2)}</div>
                </div>
                <div class="cart-item-price">€ ${(item.price * item.quantity).toFixed(2)}</div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
            </div>
        `).join('');
    }
    
    updateCartSummary();
}

// Aus Warenkorb entfernen
function removeFromCart(id) {
    const item = cart.find(item => item.id === id);
    if (item.quantity > 1) {
        item.quantity--;
    } else {
        cart = cart.filter(item => item.id !== id);
    }
    renderCart();
}

// Warenkorb-Zusammenfassung aktualisieren
function updateCartSummary() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    document.getElementById('total').textContent = `€ ${total.toFixed(2)}`;
    
    // Button aktivieren/deaktivieren
    document.querySelector('.btn-checkout').disabled = cart.length === 0;
}

// Kasse öffnen
function openCash() {
    const audio = new Audio('data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==');
    audio.play().catch(e => console.log('Audio-Fehler'));
    
    alert('💳 Kassenschublade öffnen!\n\nDie Kassenschublade wurde geöffnet.');
}

// Bezahlung mit Zahlungsart (Bargeld: Wechselgeld-Eingabe im Modal)
function checkoutWithPayment(method) {
    if (cart.length === 0) return;
    window.currentPaymentMethod = method;
    if (method === 'cash') {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        // Modal dynamisch anpassen
        const modal = document.getElementById('receiptQuestionModal');
        let inputRow = document.getElementById('cashGivenRow');
        if (!inputRow) {
            inputRow = document.createElement('div');
            inputRow.id = 'cashGivenRow';
            inputRow.style = 'margin-bottom:10px;text-align:center;';
            // Schnellwahl-Buttons
            const quickAmounts = [5, 10, 20, 50, 100];
            // Farben der syrischen Flagge: Rot, Weiß, Schwarz, Grün, Rot (wiederholt)
            const flagColors = ['#d90000', '#fff', '#111', '#1ca31c', '#d90000'];
            let quickBtns = quickAmounts.map((val, i) => {
                const color = flagColors[i];
                const textColor = (color === '#fff') ? '#111' : '#fff';
                return `<button type="button" class="quick-cash-btn" data-val="${val}" style="margin:0 2px 4px 2px;padding:2px 10px;background:${color};color:${textColor};border:1.5px solid #222;font-weight:bold;">${val} €</button>`;
            }).join('');
            inputRow.innerHTML = `
                <div style="margin-bottom:4px;">${quickBtns}</div>
                Gegeben: <input id="cashGivenInput" type="number" min="0" step="0.01" style="width:80px;text-align:right;"> € <span id="changeInfo" style="margin-left:10px;color:#0af;font-weight:bold;"></span>
            `;
            modal.querySelector('.modal-content')?.prepend(inputRow);
        }
        const input = document.getElementById('cashGivenInput');
        const changeInfo = document.getElementById('changeInfo');
        input.value = '';
        changeInfo.textContent = '';
        // Schnellwahl-Buttons Funktion
        inputRow.querySelectorAll('.quick-cash-btn').forEach(btn => {
            btn.onclick = () => {
                input.value = btn.getAttribute('data-val');
            };
        });
        // Schnellwahl-Buttons Funktion
        inputRow.querySelectorAll('.quick-cash-btn').forEach(btn => {
            btn.onclick = () => {
                input.value = btn.getAttribute('data-val');
                input.dispatchEvent(new Event('input'));
                input.focus();
            };
        });
        // Button für "Ja, drucken" erst aktivieren wenn genug gegeben
        const yesBtn = modal.querySelector('.btn-yes') || modal.querySelector('button[data-i18n="yes"]');
        if (yesBtn) yesBtn.disabled = true;
        input.oninput = function() {
            const given = parseFloat(input.value.replace(',', '.'));
            if (!isNaN(given) && given >= total) {
                const change = given - total;
                changeInfo.textContent = 'Rückgeld: € ' + change.toFixed(2);
                if (yesBtn) yesBtn.disabled = false;
                window.lastCashGiven = given;
                window.lastCashChange = change;
            } else {
                changeInfo.textContent = '';
                if (yesBtn) yesBtn.disabled = true;
                window.lastCashGiven = null;
                window.lastCashChange = null;
            }
        };
        // Modal anzeigen
        modal.classList.add('show');
        input.focus();
        return;
    }
    // Karte: Quittungsfrage direkt
    document.getElementById('receiptQuestionModal').classList.add('show');
}

// Quittungsfrage schließen
function closeReceiptQuestion(wantReceipt) {
    const modal = document.getElementById('receiptQuestionModal');
    modal.classList.remove('show');
    // Bargeld-Eingabe-UI entfernen
    const inputRow = document.getElementById('cashGivenRow');
    if (inputRow) inputRow.remove();
    if (wantReceipt) {
        showReceipt();
    } else {
        // Track sales for user
        if (currentUser && cart.length > 0) {
            loadSalesData();
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            if (!salesData[currentUser]) salesData[currentUser] = { totalSales: 0, customersCount: 0 };
            salesData[currentUser].totalSales += total;
            salesData[currentUser].customersCount += 1;
            saveSalesData();
        }
        cart = [];
        renderCart();
        alert('✓ Zahlung abgeschlossen!\nKeine Quittung gedruckt.');
    }
    // Reset cash info
    window.lastCashGiven = null;
    window.lastCashChange = null;
}

// Quittung anzeigen
function showReceipt() {
    const method = window.currentPaymentMethod;
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const paymentMethodText = method === 'cash' ? '💵 Bargeld' : '💳 Karte';
    let changeBlock = '';
    if (method === 'cash' && typeof window.lastCashGiven === 'number') {
        changeBlock = `<div class="receipt-change"><strong>Gegeben:</strong> € ${window.lastCashGiven.toFixed(2)}<br><strong>Rückgeld:</strong> € ${window.lastCashChange.toFixed(2)}</div>`;
    }
    // Quittung generieren
    const receiptHTML = `
        ${cart.map(item => `
            <div class="receipt-item">
                <span class="receipt-item-name">${item.name} (${item.quantity}×)</span>
                <span class="receipt-item-price">€ ${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('')}
        <div class="receipt-summary">
            <div class="receipt-total">
                <span>GESAMT:</span>
                <span>€ ${total.toFixed(2)}</span>
            </div>
        </div>
        ${changeBlock}
        <div class="receipt-payment">
            <strong>Zahlungsart:</strong> ${paymentMethodText}
        </div>
        <div class="receipt-time">
            ✓ Zahlung abgeschlossen<br>
            ${new Date().toLocaleString('de-DE')}
        </div>
    `;
    document.getElementById('receiptContent').innerHTML = receiptHTML;
    document.getElementById('receiptModal').classList.add('show');
    // Track sales for user
    if (currentUser && cart.length > 0) {
        loadSalesData();
        if (!salesData[currentUser]) salesData[currentUser] = { totalSales: 0, customersCount: 0 };
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        salesData[currentUser].totalSales += total;
        salesData[currentUser].customersCount += 1;
        saveSalesData();
    }
    cart = [];
    renderCart();
    window.lastCashGiven = null;
    window.lastCashChange = null;
}

// Quittung schließen
function closeReceipt() {
    document.getElementById('receiptModal').classList.remove('show');
}

// Warenkorb leeren (Abbrechen)
function clearCart() {
    if (cart.length > 0 && !confirm('Warenkorb wirklich leeren?')) {
        return;
    }
    cart = [];
    renderCart();
}

// User-Daten und Transaktionen
// ...existing code...

// Benutzerauswahl öffnen
function openUserSelection() {
    if (!currentUser) {
        document.getElementById('userSelectionModal').classList.add('show');
    } else {
        // Toggle - wenn bereits ein Benutzer ausgewählt, kann ein neuer ausgewählt werden
        document.getElementById('userSelectionModal').classList.add('show');
    }
}

// Button des aktuellen Benutzers aktualisieren
function updateUserButton() {
    const btn = document.getElementById('currentUserBtn');
    if (btn) {
        btn.textContent = currentUser ? `👤 ${currentUser}` : '👤 Benutzer';
    }
}

// Tagesabschluss öffnen
function openDailyClosing() {
    loadSalesData();
    generateDailyClosingReport();
    document.getElementById('dailyClosingModal').classList.add('show');
}

// Tagesabschluss schließen
function closeDailyClosing() {
    document.getElementById('dailyClosingModal').classList.remove('show');
}

// Verkaufsdaten laden
function loadSalesData() {
    const savedData = localStorage.getItem('salesData');
    if (savedData) {
        salesData = JSON.parse(savedData);
    }
}

// Verkaufsdaten speichern
function saveSalesData() {
    localStorage.setItem('salesData', JSON.stringify(salesData));
}

// Tagesabschlussbericht generieren
function generateDailyClosingReport() {
    loadSalesData();
    const t = translations[currentLanguage];
    
    let reportHTML = `<div class="daily-closing-report-header"><strong data-i18n="dailyClosingSummary">${t.dailyClosingSummary}</strong></div>`;
    reportHTML += '<div class="daily-closing-items">';
    
    let totalAllSales = 0;
    let totalAllCustomers = 0;
    
    users.forEach(user => {
        const data = salesData[user] || { totalSales: 0, customersCount: 0 };
        totalAllSales += data.totalSales;
        totalAllCustomers += data.customersCount;
        
        const salesDisplay = data.totalSales > 0 ? `€ ${data.totalSales.toFixed(2)}` : `<span class="no-sales">${t.noPurchases}</span>`;
        
        reportHTML += `
            <div class="daily-closing-user-item">
                <div class="user-name">👤 ${user}</div>
                <div class="user-stats">
                    <div class="stat">
                        <span class="stat-label">${t.totalSales}:</span>
                        <span class="stat-value">${salesDisplay}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">${t.customersCount}:</span>
                        <span class="stat-value">${data.customersCount}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    reportHTML += '</div>';
    reportHTML += `
        <div class="daily-closing-totals">
            <div class="total-row">
                <span><strong>${t.totalSales}:</strong></span>
                <span class="total-amount">€ ${totalAllSales.toFixed(2)}</span>
            </div>
            <div class="total-row">
                <span><strong>${t.customersCount}:</strong></span>
                <span class="total-amount">${totalAllCustomers}</span>
            </div>
        </div>
    `;
    
    document.getElementById('dailyClosingContent').innerHTML = reportHTML;
}

// Modal mit ESC schließen
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('receiptModal').classList.remove('show');
        document.getElementById('userSelectionModal').classList.remove('show');
        document.getElementById('dailyClosingModal').classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Lade gespeicherte Sprache
    const savedLanguage = localStorage.getItem('language') || 'de';
    document.getElementById('languageSelect').value = savedLanguage;
    changeLanguage(savedLanguage);

    updateTime();
    setInterval(updateTime, 1000);

    // Wenn keine Produkte gespeichert sind, Standardartikel laden
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify(defaultProducts));
    }
    
    // Lade gespeicherten Benutzer oder zeige Benutzerauswahl
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser && users.includes(savedUser)) {
        currentUser = savedUser;
        updateUserButton();
    } else {
        // Zeige Benutzerauswahl beim Start
        setTimeout(() => {
            document.getElementById('userSelectionModal').classList.add('show');
        }, 300);
    }
    
    loadProducts();
    populateCategorySelect();
    // Standard: alle anzeigen
    filterByCategory('all');
    // Optional: Auswahl merken
    const select = document.getElementById('categorySelect');
    if (select) {
        select.value = 'all';
    }
});

// Kategorien-Dropdown befüllen
function populateCategorySelect() {
    const select = document.getElementById('categorySelect');
    if (!select) return;
    select.innerHTML = '<option value="all">Alle Kategorien</option>' +
        PRODUCT_CATEGORIES.map(cat => `<option value="${cat.key}">${cat.label}</option>`).join('');
}

// Kategorie filtern
function filterByCategory(categoryKey) {
    renderProducts(categoryKey);
}

