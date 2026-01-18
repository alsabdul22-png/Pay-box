// Mehrsprachige Texte (i18n)
const translations = {
    de: {
        appName: 'PayBox',
        articles: 'Artikel',
        newArticle: 'Neuer Artikel',
        selectImage: 'Bild auswählen',
        addButton: '+ Hinzufügen',
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
        scanHint: 'Barcode einscannen oder manuell eingeben'
    },
    en: {
        appName: 'PayBox',
        articles: 'Articles',
        newArticle: 'New Article',
        selectImage: 'Select Image',
        addButton: '+ Add',
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
        scanHint: 'Scan barcode or enter manually'
    },
    ar: {
        appName: 'PayBox',
        articles: 'المنتجات',
        newArticle: 'منتج جديد',
        selectImage: 'اختر صورة',
        addButton: '+ إضافة',
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
        scanHint: 'امسح الباركود أو أدخله يدويًا'
    }
};

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
    
    // تحديث جميع العناصر التي لديها data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            if (el.tagName === 'BUTTON' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'SPAN' || el.tagName === 'P') {
                el.textContent = t[key];
            }
        }
    });
    
    // تحديث Placeholder
    document.getElementById('productName').placeholder = currentLanguage === 'de' ? 'Artikelname' : 
                                                          currentLanguage === 'en' ? 'Article Name' : 'اسم المنتج';
    document.getElementById('productPrice').placeholder = currentLanguage === 'de' ? 'Preis' : 
                                                          currentLanguage === 'en' ? 'Price' : 'السعر';
    
    // تحديث RTL für Arabisch
    if (currentLanguage === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.style.direction = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
        document.body.style.direction = 'ltr';
    }
}
const articleImages = {
    'Kaffee': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2YwZjBmMCIvPjxyZWN0IHg9IjYwIiB5PSI1MCIgd2lkdGg9IjEzNiIgaGVpZ2h0PSIxNTAiIHJ4PSIxMCIgZmlsbD0iIzhCNDUxMyIvPjxyZWN0IHg9IjcwIiB5PSI2MCIgd2lkdGg9IjExNiIgaGVpZ2h0PSIxMzAiIGZpbGw9IiM2NDMzMDMiIHJ4PSI4Ii8+PHJlY3QgeD0iODAiIHk9IjcwIiB3aWR0aD0iOTYiIGhlaWdodD0iNTAiIGZpbGw9IiNBRjY0MjYiIHJ4PSI1Ii8+PHBhdGggZD0iTSAxOTAgOTAgUSAyMDAgOTAgMjEwIDEwMCIgc3Ryb2tlPSIjOEI0NTEzIiBzdHJva2Utd2lkdGg9IjgiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==',
    'Wasser': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2VmZjZmYiIvPjxyZWN0IHg9IjgwIiB5PSI0MCIgd2lkdGg9Ijk2IiBoZWlnaHQ9IjE2MCIgcng9IjEyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGI0ZDgiIHN0cm9rZS13aWR0aD0iOCIvPjxyZWN0IHg9Ijg4IiB5PSI2MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjExMiIgZmlsbD0iIzJCQzZFQyIgcng9IjgiIHJ5PSIzMiIvPjxwYXRoIGQ9Ik0gMTAwIDEyMCBRIDExMCAxMTAgMTIwIDEyMCBRIDEzMCAxMTAgMTQwIDEyMCIgc3Ryb2tlPSIjNjZERkZGIiBzdHJva2Utd2lkdGg9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==',
    'Sandwich': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2ZmZjJjYyIvPjxwYXRoIGQ9Ik0gNjAgMTIwIEwgNjAgMTQwIFEgNjAgMTUwIDcwIDE1MCBMIDE4NiAxNTAgUSAxOTYgMTUwIDE5NiAxNDAgTCAxOTYgMTIwIiBmaWxsPSIjRDJCNDhDIiByeD0iOCIvPjxyZWN0IHg9IjcwIiB5PSI5MCIgd2lkdGg9IjExNiIgaGVpZ2h0PSIzMCIgZmlsbD0iI0Q4MjAzQiIgcng9IjgiLz48cmVjdCB4PSI3MCIgeT0iMjAiIHdpZHRoPSIxMTYiIGhlaWdodD0iNzAiIGZpbGw9IiNENDQxMzEiIHJ4PSI4Ii8+PHJlY3QgeD0iNzAiIHk9IjMwIiB3aWR0aD0iMTExNiIgaGVpZ2h0PSI1MCIgZmlsbD0iI0ZGRkFDRCIgb3BhY2l0eT0iMC42Ii8+PHJlY3QgeD0iOTAiIHk9IjEwMCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMjJBNjQ2IiBvcGFjaXR5PSIwLjgiLz48cmVjdCB4PSIxMzQiIHk9IjEwMCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMjJBNjQ2IiBvcGFjaXR5PSIwLjgiLz48L3N2Zz4=',
    'Kuchen': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2ZmZTZkNSIvPjxwYXRoIGQ9Ik0gNTAgMTcwIEwgNzAgNTAgTCAxODYgNTAgTCAyMDYgMTcwIFoiIGZpbGw9IiM4QjQ1MTMiIHN0cm9rZT0iIzY0MzMwMyIgc3Ryb2tlLXdpZHRoPSI0Ii8+PGNpcmNsZSBjeD0iODUiIGN5PSI4MCIgcj0iOCIgZmlsbD0iI0ZGNDQwMCIvPjxjaXJjbGUgY3g9IjEyMCIgY3k9IjcwIiByPSI4IiBmaWxsPSIjRkY0NDAwIi8+PGNpcmNsZSBjeD0iMTU1IiBjeT0iODAIiByPSI4IiBmaWxsPSIjRkY0NDAwIi8+PHJlY3QgeD0iNjAiIHk9IjE3MCIgd2lkdGg9IjEzNiIgaGVpZ2h0PSIyMCIgZmlsbD0iI0Y1RDc2QiIgcng9IjUiLz48cGF0aCBkPSJNIDEwMCA0MCBMIDEwMCAyNSBRIDEwMCA0IDEwOCAyNCBMIDExNiAyOCBRIDExNiA0IDEyOCAyMiBMIDEyOCA0MCIgZmlsbD0iI0ZGRkEwMCIgc3Ryb2tlPSIjRkZFNjAwIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=',
    'Saft': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2ZmZTZkNSIvPjxyZWN0IHg9IjkwIiB5PSI0MCIgd2lkdGg9Ijc2IiBoZWlnaHQ9IjEzMCIgcng9IjEwIiBmaWxsPSJub25lIiBzdHJva2U9IiNFQTIwMDAiIHN0cm9rZS13aWR0aD0iOCIvPjxyZWN0IHg9IjEwMCIgeT0iNjAiIHdpZHRoPSI1NiIgaGVpZ2h0PSI5MCIgZmlsbD0iI0ZGNDA0MCIgb3BhY2l0eT0iMC44Ii8+PHJlY3QgeD0iMTA4IiB5PSI0MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjNDQ0IiByeD0iNSIvPjxjaXJjbGUgY3g9IjEyOCIgY3k9IjMwIiByPSI2IiBmaWxsPSIjODg4Ii8+PGNpcmNsZSBjeD0iMTI0IiBjeT0iMjAiIHI9IjQiIGZpbGw9IiNBQUIiLz48L3N2Zz4=',
    'Salat': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2VmZjZmYiIvPjxwYXRoIGQ9Ik0gNzAgMTUwIEwgOTAgNjAgTCAxMjggNDAgTCAxNjYgNjAgTCAxODYgMTUwIiBmaWxsPSIjMjJBNjQ2IiBvcGFjaXR5PSIwLjciLz48cGF0aCBkPSJNIDUwIDE3MCBMIDcwIDE1MCBMMTg2IDE1MCBMMjA2IDE3MCBaIiBmaWxsPSIjRThGNUU5Ii8+PGNpcmNsZSBjeD0iOTAiIGN5PSIxMjAiIHI9IjEyIiBmaWxsPSIjMjJBNjQ2IiBvcGFjaXR5PSIwLjkiLz48Y2lyY2xlIGN4PSIxMjgiIGN5PSI5MCIgcj0iMTYiIGZpbGw9IiMyMkE2NDYiIHN0cm9rZT0iI0ZGNDQ4QyIgc3Ryb2tlLXdpZHRoPSI0Ii8+PGNpcmNsZSBjeD0iMTY2IiBjeT0iMTIwIiByPSIxMiIgZmlsbD0iIzIyQTY0NiIgb3BhY2l0eT0iMC45Ii8+PHJlY3QgeD0iNjAiIHk9IjE3MCIgd2lkdGg9IjEzNiIgaGVpZ2h0PSIyMCIgZmlsbD0iI0YyRkQyRiIgcng9IjUiLz48L3N2Zz4='
};

// Standardprodukte mit Bildern
const defaultProducts = [
    { id: 1, name: 'Kaffee', price: 2.50, image: articleImages['Kaffee'], barcode: '4006381333932' },
    { id: 2, name: 'Wasser', price: 1.50, image: articleImages['Wasser'], barcode: '4006381333949' },
    { id: 3, name: 'Sandwich', price: 5.99, image: articleImages['Sandwich'], barcode: '4006381333956' },
    { id: 4, name: 'Kuchen', price: 3.50, image: articleImages['Kuchen'], barcode: '4006381333963' },
    { id: 5, name: 'Saft', price: 2.99, image: articleImages['Saft'], barcode: '4006381333970' },
    { id: 6, name: 'Salat', price: 6.99, image: articleImages['Salat'], barcode: '4006381333987' }
];

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
    products = stored ? JSON.parse(stored) : defaultProducts.map(p => ({...p}));
    nextProductId = Math.max(...products.map(p => p.id), 6) + 1;
    renderProducts();
}

// Produkte rendern
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    products.forEach(product => {
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
}

// Neues Produkt hinzufügen
function addProduct() {
    const nameInput = document.getElementById('productName');
    const priceInput = document.getElementById('productPrice');
    const barcodeInput = document.getElementById('productBarcode');
    
    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);
    const barcode = barcodeInput.value.trim() || null;
    
    if (!name || isNaN(price) || price < 0) {
        alert('Bitte geben Sie einen gültigen Namen und Preis ein.');
        return;
    }
    
    products.push({
        id: nextProductId++,
        name: name,
        price: price,
        image: currentProductImage,
        barcode: barcode
    });
    
    localStorage.setItem('products', JSON.stringify(products));
    nameInput.value = '';
    priceInput.value = '';
    barcodeInput.value = '';
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

// Bezahlung mit Zahlungsart
function checkoutWithPayment(method) {
    if (cart.length === 0) return;
    
    // Speichere die Zahlungsmethode für später
    window.currentPaymentMethod = method;
    
    // Zeige Quittungsfrage
    document.getElementById('receiptQuestionModal').classList.add('show');
}

// Quittungsfrage schließen
function closeReceiptQuestion(wantReceipt) {
    document.getElementById('receiptQuestionModal').classList.remove('show');
    
    if (wantReceipt) {
        showReceipt();
    } else {
        // Warenkorb leeren ohne Quittung zu zeigen
        cart = [];
        renderCart();
        
        // Kurze Bestätigung
        alert('✓ Zahlung abgeschlossen!\nKeine Quittung gedruckt.');
    }
}

// Quittung anzeigen
function showReceipt() {
    const method = window.currentPaymentMethod;
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const paymentMethodText = method === 'cash' ? '💵 Bargeld' : '💳 Karte';
    
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
    
    // Warenkorb leeren
    cart = [];
    renderCart();
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

// Modal mit ESC schließen
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('receiptModal').classList.remove('show');
    }
});

// Modal außen klicken schließen
document.getElementById('receiptModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'receiptModal') {
        document.getElementById('receiptModal').classList.remove('show');
    }
});

document.getElementById('receiptQuestionModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'receiptQuestionModal') {
        closeReceiptQuestion(false);
    }
});

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    // Lade gespeicherte Sprache
    const savedLanguage = localStorage.getItem('language') || 'de';
    document.getElementById('languageSelect').value = savedLanguage;
    changeLanguage(savedLanguage);
    
    updateTime();
    setInterval(updateTime, 1000);
    loadProducts();
});
