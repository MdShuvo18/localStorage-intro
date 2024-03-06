const addProduct = () => {
    const productField = document.getElementById('product');
    const quantityField = document.getElementById('quantity');

    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    console.log(product, quantity);
    displayProduct(product, quantity);
    saveLocalStorageCart(product, quantity);

}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('cart-item-list');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    return cart
}

const saveLocalStorageCart = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    // console.log(cart);
    const cartStringify = JSON.stringify(cart);
    // console.log(cartStringify)
    localStorage.setItem('cart', cartStringify);
}


const displayProductFromCart = () => {
    const ShowSavedcart = getStoredShoppingCart();
    console.log(ShowSavedcart);
    for(const product in ShowSavedcart){
        const quantity=ShowSavedcart[product]
        console.log(product,quantity);
        displayProduct(product,quantity)
    }
}

displayProductFromCart();