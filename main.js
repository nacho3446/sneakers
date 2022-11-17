const minusBtn = document.querySelector('.input__minus');
const plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');
const priceProduct = document.querySelector('.details__prices')
const message__carrito = document.querySelector('.message__carrito')

let cart = JSON.parse(localStorage.getItem('cart')) || [];


let userInputNumber = 0;

let productos = [{
    name: "Adidas NDM_R1",
    price: 40000,
    color: ['black','white','grey'],
    img: [["../images/zapa1.jpg","../images/zapa2.jpg","../images/zapa3.jpg"],["../images/zapa-white-1.jpg","../images/zapa-white-2.jpg","../images/zapa-white-3.jpg"],["../images/zapa-gray-1.jpg","../images/zapa-gray-2.jpg","../images/zapa-gray-3.jpg"]]
}]

//precio del producto
const createHtmlPrices = array => {
    return `
    <p class="details_now">$${productos[0].price}<span class="details_discount">50%</span></p>
    <p class="details__before">$${productos[0].price*2}</p>
    <button class="btnColor"
    ></button> `
}



//mostrar mensaje 
document.addEventListener('click', (e) => {
    if(!e.target.classList.contains('cart-modal__chekount')) return;

    message__carrito.style.visibility = "visible";
    message__carrito.style.height = "50px";
    message__carrito.style.transition = "all 0.3s ease-in-out"

    setTimeout(()=>{
        message__carrito.style.height = "0";
        message__carrito.style.visibility = "hidden";
        message__carrito.style.transition = "all 0.3s ease-in-out"
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
        userInput.value = 0;
        userInputNumber = 0;
    },2500)
})


const saveLocalStorage = array => {
    localStorage.setItem('productos', JSON.stringify(array))
}

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
});

// Agregar el total de productos al carrito cuando se presiona el boton ADD TO CART
const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=>{ 
    lastValue = lastValue + userInputNumber;
    
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    cart =  productos;
        saveLocalStorage(cart)
        drawProductInModal(cart);
        drawProductInModal(cart);
    
});

//Mostrar el modal con el detalle del carrito
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
const productContainer = document.querySelector('.cart-modal__chekout-container');

cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');

    if(lastValue === 0){
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    }else{
        cart = productos;
        saveLocalStorage(cart)
        drawProductInModal(cart);
    }
    
});

//Borrar el contenido del carrito
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');
    deleteProductBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });
}

// Cambiar imagenes cuando se presione los botones flecha.
const imageContainer = document.querySelector('.gallery__image-container');
const previusGalleryBtn = document.querySelector('.gallery__previus');
imageContainer.style.backgroundImage = `url('../images/zapa1.jpg')`
const nextGalleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);
});

previusGalleryBtn.addEventListener('click', ()=>{
    changePreviusImage(imageContainer);
});

//Cambiar las imagenes principales desde los zapatillaAdidas
let zapatillaAdidas = document.querySelectorAll('.gallery__nmd_r1')
zapatillaAdidas = [...zapatillaAdidas]

zapatillaAdidas.forEach(adidas => {
    adidas.addEventListener('click', event=>{
        imageContainer.style.backgroundImage = `url('../images/zapa${event.target.id}.jpg')`
    });
});

//Cambiar las imagenes principales desde los zapatillaAdidas en el MODAL
let modalzapatillaAdidas = document.querySelectorAll('.modal-gallery__nmd_r1');
const modalImageContainer = document.querySelector('.modal-gallery__image-container')
modalzapatillaAdidas = [...modalzapatillaAdidas]

modalzapatillaAdidas.forEach(modaladidas => {
    modaladidas.addEventListener('click', event=>{
        modalImageContainer.style.backgroundImage = `url('../images/zapa${event.target.id.slice(-1)}.jpg')`
    });
});

// Cambiar imagen principal de modal desde flechas en el modal
const previusModalBtn = document.querySelector('.modal-gallery__previus');
const nextModalBtn = document.querySelector('.modal-gallery__next');

nextModalBtn.addEventListener('click', ()=>{
    changeNextImage(modalImageContainer);
});

previusModalBtn.addEventListener('click', ()=>{
    changePreviusImage(modalImageContainer);
});

// Mostrar el navbar cuando presiono el menu de hamburgesa
const hamburgerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeModalNavbar = document.querySelector('.modal-navbar__close-icon');

modalNavbar.style.display = 'none'

hamburgerMenu.addEventListener('click', ()=>{
    modalNavbar.style.display = 'block';
});

closeModalNavbar.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
});





// FUNCIONES

function drawProductInModal(array){
    const {name, img, price} = array[0];
    productContainer.innerHTML = `
        <div class="cart-modal__details-container">
            <img class="cart-modal__image" src="${img}" alt="">
            <div>
            <p class="cart-modal__product">${name}</p>
            <p class="cart-modal__price">$${price}</span></p>
            </div>
            <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
        </div>
        <button class="cart-modal__chekount" >Checkout</button>`
    deleteProduct()
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$${price} x${lastValue} <span>$${lastValue*price}.00</span>`;
}

function changeNextImage(imgContainer){
    if(imgIndex === 3){
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('../images/zapa${imgIndex}.jpg')`
}

function changePreviusImage(imgContainer){
    if(imgIndex === 1){
        imgIndex = 3;
    }else{
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../images/zapa${imgIndex}.jpg')`
}