// Standardprodukte
const defaultProducts = [
    { id: 1, name: 'Kaffee', price: 2.50 },
    { id: 2, name: 'Wasser', price: 1.50 },
    { id: 3, name: 'Sandwich', price: 5.99 },
    { id: 4, name: 'Kuchen', price: 3.50 },
    { id: 5, name: 'Saft', price: 2.99 },
    { id: 6, name: 'Salat', price: 6.99 }
];

let products = [];
let cart = [];
let nextProductId = 7;

// Uhrzeit aktualisieren
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
        btn.innerHTML = `
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
    
    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);
    
    if (!name || isNaN(price) || price < 0) {
        alert('Bitte geben Sie einen gültigen Namen und Preis ein.');
        return;
    }
    
    products.push({
        id: nextProductId++,
        name: name,
        price: price
    });
    
    localStorage.setItem('products', JSON.stringify(products));
    nameInput.value = '';
    priceInput.value = '';
    renderProducts();
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
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.19;
    const total = subtotal + tax;
    
    document.getElementById('subtotal').textContent = `€ ${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `€ ${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `€ ${total.toFixed(2)}`;
    
    // Button aktivieren/deaktivieren
    document.querySelector('.btn-checkout').disabled = cart.length === 0;
}

// Kasse (Bezahlung)
function checkout() {
    if (cart.length === 0) return;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.19;
    const total = subtotal + tax;
    
    // Quittung generieren
    const receiptHTML = `
        ${cart.map(item => `
            <div class="receipt-item">
                <span class="receipt-item-name">${item.name} (${item.quantity}×)</span>
                <span class="receipt-item-price">€ ${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('')}
        
        <div class="receipt-summary">
            <div class="receipt-row">
                <span>Summe:</span>
                <span>€ ${subtotal.toFixed(2)}</span>
            </div>
            <div class="receipt-row">
                <span>Steuer (19%):</span>
                <span>€ ${tax.toFixed(2)}</span>
            </div>
            <div class="receipt-total">
                <span>GESAMT:</span>
                <span>€ ${total.toFixed(2)}</span>
            </div>
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

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    updateTime();
    setInterval(updateTime, 1000);
    loadProducts();
});
