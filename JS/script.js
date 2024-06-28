function addToCart(name, description, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, description, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto agregado al carrito');
}
