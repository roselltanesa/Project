let cart = [];

function addToCart(drinkName, price, drinkId) {
    const quantity = document.getElementById(`quantity${drinkId.charAt(drinkId.length-1)}`).value;
    const totalPrice = price * quantity;

    cart.push({ drinkName, price, quantity, totalPrice });

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = ''; 
    let total = 0;

    cart.forEach(item => {
        cartItems.innerHTML += `
            <div>
                ${item.quantity} x ${item.drinkName} - ₱${item.totalPrice.toFixed(2)}
            </div>
        `;
        total += item.totalPrice;
    });

    totalPrice.textContent = total.toFixed(2);
}

function placeOrder() {
    const receiptSection = document.getElementById('receipt-section');
    const receiptItems = document.getElementById('receipt-items');
    const totalPrice = document.getElementById('receipt-total');

    receiptItems.innerHTML = ''; 

    let total = 0;

    cart.forEach(item => {
        receiptItems.innerHTML += `
            <div>
                ${item.quantity} x ${item.drinkName} - ₱${item.totalPrice.toFixed(2)}
            </div>
        `;
        total += item.totalPrice;
    });

    totalPrice.textContent = total.toFixed(2);

    document.getElementById('cart-section').style.display = 'none';
    receiptSection.style.display = 'block';
}
function refreshMenu() {
    alert("Refreshing menu...");
    location.reload(); 
}

function searchProducts() {
    var input = document.querySelector('.search-bar input').value.toLowerCase(); 
    var products = document.querySelectorAll('.product-card');
    var addOns = document.querySelectorAll('.addon-card');

    products.forEach(function(product) {
        var productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.indexOf(input) > -1) {
            product.style.display = '';  
        } else {
            product.style.display = 'none';  
        }
    });
    addOns.forEach(function(addon) {
        var addonName = addon.querySelector('h3').textContent.toLowerCase();
        if (addonName.indexOf(input) > -1) {
            addon.style.display = '';  
        } else {
            addon.style.display = 'none'; 
        }
    });
}

document.querySelector('.search-bar input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchProducts(); 
    }
});

document.querySelector('.search-bar button').addEventListener('click', function() {
    searchProducts(); 
});

