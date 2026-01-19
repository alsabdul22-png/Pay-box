// ========================
// TRADUÇÕES / TRANSLATIONS
// ========================

// Mehrsprachige Texte (i18n)
const translations = {
    de: {
        appName: 'PayBox',
        articles: 'Artikel',
        newArticle: 'Neuer Artikel',
        selectImage: 'Bild auswählen',
        addButton: '+ Hinzufügen',
        login: 'Anmelden',
        loginButton: 'Anmelden',
        userPlaceholder: 'Benutzer',
        passwordPlaceholder: 'Passwort',
        loginError: 'Ungültige Anmeldedaten',
        cart: 'Warenkorb',
        emptyCart: 'Warenkorb ist leer',
        total: 'Gesamt:',
        cancel: 'Abbrechen',
        cash: '💵 Bargeld',
        card: '💳 Karte',
        openCash: '🔓 Kasse Öffnen',
        receiptQuestion: 'Quittung?',
        receiptAsk: 'Möchten Sie eine Quittung?',
        yes: '✓ Ja, drucken',
        no: '✕ Nein',
        paymentMethod: 'Zahlungsart',
        completed: 'Zahlung abgeschlossen',
        scanHint: 'Barcode einscannen oder manuell eingeben',
        categoryInfo: 'Das System unterstützt nun eine professionelle Produktkategorisierung.',
        selectUser: 'Benutzer auswählen',
        selectUserHint: 'Wählen Sie einen Benutzer für den Kassiervorgang',
        dailyClosing: 'Tagesabschluss',
        dailyClosingReport: 'Tagesabschlussbericht',
        totalSales: 'Gesamtumsatz',
        customersCount: 'Anzahl Kunden',
        noPurchases: 'Keine Verkäufe',
        dailyClosingSummary: 'Zusammenfassung des Tagesabschlusses'
    },
    en: {
        appName: 'PayBox',
        articles: 'Articles',
        newArticle: 'New Article',
        selectImage: 'Select Image',
        addButton: '+ Add',
        login: 'Login',
        loginButton: 'Login',
        userPlaceholder: 'User',
        passwordPlaceholder: 'Password',
        loginError: 'Invalid credentials',
        cart: 'Shopping Cart',
        emptyCart: 'Cart is empty',
        total: 'Total:',
        cancel: 'Cancel',
        cash: '💵 Cash',
        card: '💳 Card',
        openCash: '🔓 Open Cash',
        receiptQuestion: 'Receipt?',
        receiptAsk: 'Would you like a receipt?',
        yes: '✓ Yes, print',
        no: '✕ No',
        paymentMethod: 'Payment Method',
        completed: 'Payment completed',
        scanHint: 'Scan barcode or enter manually',
        categoryInfo: 'The system now supports professional product categorization.',
        selectUser: 'Select User',
        selectUserHint: 'Choose a user for the transaction',
        dailyClosing: 'Daily Closing',
        dailyClosingReport: 'Daily Closing Report',
        totalSales: 'Total Sales',
        customersCount: 'Customer Count',
        noPurchases: 'No Sales',
        dailyClosingSummary: 'Daily Closing Summary'
    },
    ar: {
        appName: 'PayBox',
        articles: 'المنتجات',
        newArticle: 'منتج جديد',
        selectImage: 'اختر صورة',
        addButton: '+ إضافة',
        login: 'تسجيل الدخول',
        loginButton: 'تسجيل الدخول',
        userPlaceholder: 'المستخدم',
        passwordPlaceholder: 'كلمة المرور',
        loginError: 'بيانات تسجيل غير صحيحة',
        cart: 'سلة التسوق',
        emptyCart: 'السلة فارغة',
        total: 'الإجمالي:',
        cancel: 'إلغاء',
        cash: '💵 نقداً',
        card: '💳 بطاقة',
        openCash: '🔓 فتح الدرج',
        receiptQuestion: 'الإيصال؟',
        receiptAsk: 'هل تريد إيصالاً؟',
        yes: '✓ نعم، اطبع',
        no: '✕ لا',
        paymentMethod: 'طريقة الدفع',
        completed: 'تمت الدفع',
        scanHint: 'امسح الباركود أو أدخله يدويًا',
        categoryInfo: 'يدعم النظام الآن تصنيف المنتجات بشكل احترافي.',
        selectUser: 'اختر المستخدم',
        selectUserHint: 'اختر مستخدمًا للمعاملة',
        dailyClosing: 'الإغلاق اليومي',
        dailyClosingReport: 'تقرير الإغلاق اليومي',
        totalSales: 'إجمالي المبيعات',
        customersCount: 'عدد العملاء',
        noPurchases: 'لا توجد مبيعات',
        dailyClosingSummary: 'ملخص الإغلاق اليومي'
    }
};

// Kategoriebeschreibungstexte
const categoryInfoTexts = {
    de: 'Das System unterstützt nun eine professionelle Produktkategorisierung. Produkte können beim Anlegen einer der vordefinierten Kategorien wie Lebensmittel, Käse & Fleisch, Gemüse, Getränke, Süßwaren oder Sonstiges zugeordnet werden.',
    en: 'The system now supports professional product categorization. When adding a product, you can assign it to one of the predefined categories such as Food, Cheese & Meat, Vegetables, Drinks, Sweets, or Other.',
    ar: 'يدعم النظام الآن تصنيف المنتجات بشكل احترافي. عند إضافة منتج جديد، يمكنك تعيينه إلى إحدى الفئات المحددة مسبقًا.'
};

// ========================
// GLOBALE VARIABLEN
// ========================

const PRODUCT_CATEGORIES = [
    { key: 'food', label: 'Lebensmittel' },
    { key: 'cheese_meat', label: 'Käse & Fleisch' },
    { key: 'vegetables', label: 'Gemüse' },
    { key: 'drinks', label: 'Getränke' },
    { key: 'sweets', label: 'Süßwaren' },
    { key: 'other', label: 'Sonstiges' }
];

let currentLanguage = 'de';
let currentUser = null;
const users = ['Ahmed', 'Aboud', 'Jawad'];
let products = [];
let cart = [];
let nextProductId = 7;
let currentProductImage = null;

let salesData = {
    'Ahmed': { totalSales: 0, customersCount: 0 },
    'Aboud': { totalSales: 0, customersCount: 0 },
    'Jawad': { totalSales: 0, customersCount: 0 }
};

// ========================
// SCREEN MANAGEMENT
// ========================

function showUserSelection() {
    document.getElementById('userSelectionScreen').style.display = 'flex';
    document.getElementById('mainApp').style.display = 'none';
    document.getElementById('dailyClosingScreen').style.display = 'none';
}

function showMainApp() {
    document.getElementById('userSelectionScreen').style.display = 'none';
    document.getElementById('mainApp').style.display = 'flex';
    document.getElementById('dailyClosingScreen').style.display = 'none';
}

function showDailyClosing() {
    document.getElementById('userSelectionScreen').style.display = 'none';
    document.getElementById('mainApp').style.display = 'none';
    document.getElementById('dailyClosingScreen').style.display = 'flex';
}

function backToMainApp() {
    showMainApp();
}

// ========================
// BENUTZER-MANAGEMENT
// ========================

function selectUser(userName) {
    currentUser = userName;
    localStorage.setItem('currentUser', userName);
    updateUserButton();
    showMainApp();
}

function changeUser() {
    showUserSelection();
}

function updateUserButton() {
    const btn = document.getElementById('currentUserBtn');
    if (btn) {
        btn.textContent = currentUser ? `👤 ${currentUser}` : '👤 Benutzer';
    }
}

// ========================
// SPRACH-VERWALTUNG
// ========================

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
}

function updatePageLanguage() {
    const t = translations[currentLanguage];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            if (el.tagName === 'BUTTON' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'SPAN' || el.tagName === 'P') {
                el.textContent = t[key];
            }
        }
    });
    
    const productNameInput = document.getElementById('productName');
    const productPriceInput = document.getElementById('productPrice');
    
    if (productNameInput) {
        productNameInput.placeholder = currentLanguage === 'de' ? 'Artikelname' : 
                                      currentLanguage === 'en' ? 'Article Name' : 'اسم المنتج';
    }
    if (productPriceInput) {
        productPriceInput.placeholder = currentLanguage === 'de' ? 'Preis' : 
                                       currentLanguage === 'en' ? 'Price' : 'السعر';
    }
    
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

// ========================
// VERKAUFSDATEN
// ========================

function loadSalesData() {
    const savedData = localStorage.getItem('salesData');
    if (savedData) {
        salesData = JSON.parse(savedData);
    }
}

function saveSalesData() {
    localStorage.setItem('salesData', JSON.stringify(salesData));
}

function openDailyClosing() {
    loadSalesData();
    generateDailyClosingReport();
    showDailyClosing();
}

function closeDailyClosing() {
    showMainApp();
}

function generateDailyClosingReport() {
    loadSalesData();
    const t = translations[currentLanguage];
    
    let reportHTML = `<div class="daily-closing-report-header"><strong>${t.dailyClosingSummary}</strong></div>`;
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

// ========================
// PRODUKTE
// ========================

const defaultProducts = [
    { id: 1, name: 'Kaffee', price: 2.50, barcode: '123456', category: 'drinks' },
    { id: 2, name: 'Wasser', price: 1.50, barcode: '123457', category: 'drinks' },
    { id: 3, name: 'Sandwich', price: 4.99, barcode: '123458', category: 'food' },
    { id: 4, name: 'Kuchen', price: 3.50, barcode: '123459', category: 'sweets' },
    { id: 5, name: 'Saft', price: 2.00, barcode: '123460', category: 'drinks' },
    { id: 6, name: 'Salat', price: 5.99, barcode: '123461', category: 'vegetables' }
];

function loadProducts() {
    const saved = localStorage.getItem('products');
    if (saved) {
        products = JSON.parse(saved);
    } else {
        products = defaultProducts;
        localStorage.setItem('products', JSON.stringify(products));
    }
}

function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

function addProduct() {
    const name = document.getElementById('productName').value.trim();
    const price = parseFloat(document.getElementById('productPrice').value);
    const barcode = document.getElementById('productBarcode').value.trim() || null;
    const category = document.getElementById('productCategory').value;
    
    if (!name || !price || price <= 0) {
        alert('Bitte füllen Sie alle erforderlichen Felder aus');
        return;
    }
    
    const newProduct = {
        id: nextProductId++,
        name,
        price,
        barcode,
        category,
        image: currentProductImage || null
    };
    
    products.push(newProduct);
    saveProducts();
    
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productBarcode').value = '';
    document.getElementById('productCategory').value = 'food';
    document.getElementById('imagePreview').src = '';
    document.getElementById('imagePreviewSmall').textContent = '🖼️';
    currentProductImage = null;
    
    renderProducts();
}

function deleteProduct(e, id) {
    e.stopPropagation();
    if (confirm('Produkt wirklich löschen?')) {
        products = products.filter(p => p.id !== id);
        saveProducts();
        renderProducts();
    }
}

function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            currentProductImage = e.target.result;
            document.getElementById('imagePreview').src = currentProductImage;
            document.getElementById('imagePreviewSmall').textContent = '✓';
        };
        reader.readAsDataURL(file);
    }
}

function renderProducts(categoryFilter = 'all') {
    const grid = document.getElementById('productsGrid');
    let filtered = products;
    
    if (categoryFilter && categoryFilter !== 'all') {
        filtered = products.filter(p => p.category === categoryFilter);
    }
    
    grid.innerHTML = filtered.map(p => `
        <div class="product-card" onclick="addToCart({id: ${p.id}, name: '${p.name}', price: ${p.price}})">
            <img src="${p.image || 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%23333%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2250%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%23999%22 font-size=%2224%22%3E%F0%9F%96%BC%EF%B8%8F%3C/text%3E%3C/svg%3E'}" alt="${p.name}">
            <div class="product-info">
                <div class="product-name">${p.name}</div>
                <div class="product-price">€ ${p.price.toFixed(2)}</div>
            </div>
            <button class="delete-btn" onclick="deleteProduct(event, ${p.id})">✕</button>
        </div>
    `).join('');
}

function handleBarcodeInput(event) {
    if (event.key !== 'Enter') return;
    
    const barcode = document.getElementById('barcodeInput').value.trim();
    if (!barcode) return;
    
    const product = products.find(p => p.barcode && p.barcode.toLowerCase() === barcode.toLowerCase());
    
    if (product) {
        addToCart(product);
        document.getElementById('barcodeInput').value = '';
        document.getElementById('barcodeInput').focus();
        document.getElementById('barcodeInput').style.borderColor = '#00ff00';
        setTimeout(() => {
            document.getElementById('barcodeInput').style.borderColor = '';
        }, 300);
    } else {
        alert('Produkt nicht gefunden');
        document.getElementById('barcodeInput').value = '';
    }
}

function filterByCategory(categoryKey) {
    renderProducts(categoryKey);
}

function populateCategorySelect() {
    const select = document.getElementById('categorySelect');
    if (!select) return;
    select.innerHTML = '<option value="all">Alle Kategorien</option>' +
        PRODUCT_CATEGORIES.map(cat => `<option value="${cat.key}">${cat.label}</option>`).join('');
}

// ========================
// WARENKORB
// ========================

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
}

function updateQuantity(id, qty) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = Math.max(1, qty);
        renderCart();
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const totalEl = document.getElementById('total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart" data-i18n="emptyCart">Warenkorb ist leer</p>';
        totalEl.textContent = '€ 0,00';
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-price">€ ${item.price.toFixed(2)}</span>
            </div>
            <div class="cart-item-qty">
                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
        </div>
    `).join('');
    
    totalEl.textContent = '€ ' + total.toFixed(2);
}

function clearCart() {
    if (cart.length > 0 && !confirm('Warenkorb wirklich leeren?')) {
        return;
    }
    cart = [];
    renderCart();
}

// ========================
// CHECKOUT & ZAHLUNG
// ========================

function openCash() {
    const audio = new Audio('data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==');
    audio.play().catch(e => console.log('Audio-Fehler'));
    alert('💳 Kassenschublade öffnen!\n\nDie Kassenschublade wurde geöffnet.');
}

function checkoutWithPayment(method) {
    if (cart.length === 0) return;
    if (!currentUser) {
        alert('Bitte wählen Sie einen Benutzer aus');
        return;
    }
    
    window.currentPaymentMethod = method;
    if (method === 'cash') {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const modal = document.getElementById('receiptQuestionModal');
        let inputRow = document.getElementById('cashGivenRow');
        if (!inputRow) {
            inputRow = document.createElement('div');
            inputRow.id = 'cashGivenRow';
            inputRow.style = 'margin-bottom:10px;text-align:center;';
            const quickAmounts = [5, 10, 20, 50, 100];
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
        inputRow.querySelectorAll('.quick-cash-btn').forEach(btn => {
            btn.onclick = () => {
                input.value = btn.getAttribute('data-val');
                input.dispatchEvent(new Event('input'));
                input.focus();
            };
        });
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
        modal.classList.add('show');
        input.focus();
        return;
    }
    document.getElementById('receiptQuestionModal').classList.add('show');
}

function closeReceiptQuestion(wantReceipt) {
    const modal = document.getElementById('receiptQuestionModal');
    modal.classList.remove('show');
    const inputRow = document.getElementById('cashGivenRow');
    if (inputRow) inputRow.remove();
    if (wantReceipt) {
        showReceipt();
    } else {
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
    window.lastCashGiven = null;
    window.lastCashChange = null;
}

function showReceipt() {
    const method = window.currentPaymentMethod;
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const paymentMethodText = method === 'cash' ? '💵 Bargeld' : '💳 Karte';
    let changeBlock = '';
    if (method === 'cash' && typeof window.lastCashGiven === 'number') {
        changeBlock = `<div class="receipt-change"><strong>Gegeben:</strong> € ${window.lastCashGiven.toFixed(2)}<br><strong>Rückgeld:</strong> € ${window.lastCashChange.toFixed(2)}</div>`;
    }
    
    if (currentUser && cart.length > 0) {
        loadSalesData();
        if (!salesData[currentUser]) salesData[currentUser] = { totalSales: 0, customersCount: 0 };
        salesData[currentUser].totalSales += total;
        salesData[currentUser].customersCount += 1;
        saveSalesData();
    }
    
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
    cart = [];
    renderCart();
    window.lastCashGiven = null;
    window.lastCashChange = null;
}

function closeReceipt() {
    document.getElementById('receiptModal').classList.remove('show');
}

// ========================
// UHRZEIT
// ========================

function updateTime() {
    const now = new Date();
    const timeEl = document.getElementById('time');
    if (timeEl) {
        timeEl.textContent = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
}

// ========================
// INITIALISIERUNG
// ========================

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'de';
    const languageSelectScreen = document.getElementById('languageSelectScreen');
    const languageSelect = document.getElementById('languageSelect');
    
    if (languageSelectScreen) languageSelectScreen.value = savedLanguage;
    if (languageSelect) languageSelect.value = savedLanguage;
    
    changeLanguage(savedLanguage);
    updateTime();
    setInterval(updateTime, 1000);
    
    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify(defaultProducts));
    }
    
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser && users.includes(savedUser)) {
        currentUser = savedUser;
        updateUserButton();
        showMainApp();
    } else {
        showUserSelection();
    }
    
    loadProducts();
    populateCategorySelect();
    filterByCategory('all');
    const select = document.getElementById('categorySelect');
    if (select) {
        select.value = 'all';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('receiptModal').classList.remove('show');
    }
});

