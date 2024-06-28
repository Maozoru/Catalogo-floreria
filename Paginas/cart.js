document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    cart.forEach(function(item) {
        // Check if the item has all required properties
        if (item.name && item.description && typeof item.price === 'number' && item.image) {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;

            const name = document.createElement('h3');
            name.textContent = item.name;

            const description = document.createElement('p');
            description.textContent = item.description;

            const price = document.createElement('p');
            price.textContent = 'Precio: $' + item.price.toFixed(2);

            cartItem.appendChild(img);
            cartItem.appendChild(name);
            cartItem.appendChild(description);
            cartItem.appendChild(price);
            cartItemsContainer.appendChild(cartItem);

            totalPrice += item.price;
        } else {
            console.error('Invalid item found in cart:', item);
        }
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);

    document.getElementById('clear-cart').addEventListener('click', function() {
        localStorage.removeItem('cart');
        cartItemsContainer.innerHTML = '';
        totalPriceElement.textContent = '0.00';
    });

    document.getElementById('buy-now').addEventListener('click', function() {
        alert('Gracias por tu compra!');
        // Aquí puedes agregar más lógica para manejar la compra.
    });
});
