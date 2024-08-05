// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 10.00, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 15.00, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 20.00, image: 'https://via.placeholder.com/150' }
];

let cart = [];

// Load cart from localStorage
function loadCart() {
    const cartJSON = localStorage.getItem('cart');
    if (cartJSON) {
        cart = JSON.parse(cartJSON);
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addProductToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartDisplay();
}

function updateCartQuantity(productId, quantity) {
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity = quantity;
    }

    saveCart();
    updateCartDisplay();
}

function removeProductFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
}

function calculateTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}

function updateCartDisplay() {
    const cartItemsDiv = document.querySelector('.cart-items');
    const totalPriceSpan = document.getElementById('totalPrice');

    if (cartItemsDiv) {
        cartItemsDiv.innerHTML = '';

        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <input type="number" value="${item.quantity}" min="1" onchange="updateCartQuantity(${item.id}, this.value)">
                <button onclick="removeProductFromCart(${item.id})">Remove</button>
            `;
            cartItemsDiv.appendChild(cartItemDiv);
        });

        totalPriceSpan.textContent = calculateTotalPrice();
    }
}

function validateCheckoutForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    if (!name || !address || !cardNumber || !expiryDate || !cvv) {
        alert('Please fill in all fields.');
        return false;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
        alert('Please enter a valid 16-digit card number.');
        return false;
    }

    if (!/^\d{3}$/.test(cvv)) {
        alert('Please enter a valid 3-digit CVV.');
        return false;
    }

    saveOrder(name);
    alert('Payment Successful!');
    localStorage.removeItem('cart'); // Clear the cart after successful payment
    window.location.href = 'orders.html'; // Redirect to orders page
    return false;
}

function saveOrder(customerName) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
        customer: customerName,
        items: [...cart],
        date: new Date().toLocaleString()
    };
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
}