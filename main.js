const minusBtn = document.querySelector('.input__minus');
const plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');
const priceProduct = document.querySelector('.details__prices')
const message__carrito = document.querySelector('.message__carrito')
const buttons__colors= document.querySelector('.buttons__colors')
const galeryImg = document.querySelector('.gallery__nmd_r1s')
const btnAddCart = document.querySelector('.btnAddCart')
const imageContainer = document.querySelector('.gallery__image-container');
const message__modal = document.querySelector('.message__modal')
const cart__empty = document.querySelector('.cart-empty')
const cart__modal = document.querySelector('.cart-modal')


//--------------------------------------------------------DATOS-----------------------------------------------------//
let userInputNumber = 0;

let count = 1;

let quantity = 1;

let productos = [{
    name: `Adidas_NDM_R1`,
    price: 225,
    color: ['black','white','gray'],
    img: [[["../images/zapa1.jpg"],["../images/zapa2.jpg"],["../images/zapa3.jpg"]],[["../images/zapa4.jpg"],["../images/zapa5.jpg"],["../images/zapa6.jpg"]],[["../images/zapa7.jpg"],["../images/zapa8.jpg"],["../images/zapa9.jpg"]]]
}]

let cart = [];
let cart2 = JSON.parse(localStorage.getItem('productos')) || [];

const saveLocalStorage = (xx) => {localStorage.setItem('productos', JSON.stringify(xx))}

// const getLocalStorage = () =>{
//     cart2 = JSON.parse(localStorage.getItem('productos'));
// }



//----------------------------------------------------------FIN DE DATOS ----------------------------------------/


//------------------------------RENDERIZADO DE ELEMENTOS  (buttons,mensajes) -----------------------------------//
//precio del producto
const createHtmlPrices = array => {
    return `
    <p class="details__now">$${array[0].price}<span class="details__discount"> 50%</span></p>
    <p class="details__before">$${array[0].price*2}</p>
    `
}

const renderCreateHTMLPrices = array => priceProduct.innerHTML = createHtmlPrices(array)

//crear botones de colores
const createHTMLButtonColor = (array) => {
    return buttons__colors.innerHTML= `
    <h3>Colors: 

    <button class="btnColor" style="background-color:black; color:white" 
    data-colors=${array[0].color[0]}>Black</button>

    <button class="btnColor" 
    data-colors=${array[0].color[1]}>White</button> 

    <button class="btnColor" style="background-color:gray; color:white"
    data-colors=${array[0].color[2]}>Gray</button>  
    </h3>
    `
}

//crear btnAddToCart
const btnAdd = (indice) => {
    return`<button class="details__button"
    data-name=${productos[0].name}
    data-img=${productos[0].img[indice][0]}
    data-price=${productos[0].price}
    data-color=${productos[0].color[indice]}> <img src="./images/icon-cart-white.svg" alt=""> Add to cart</button>`
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
        message__modal.innerHTML='';
        cartModal.innerHTML= verificarCarrito()
        // cartModal.innerHTML= '<p class="cart-empty">Your cart is empty</p>'
        lastValue = 0;
        cartNotification.innerText = lastValue;
        userInput.value = 0;
        userInputNumber = 0;
    },2500)
    localStorage.removeItem("productos")
   cart2 = []
})

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


//renderizar elementos al cargar la pagina
const renderOnLoad = () => {
    galeryImg.innerHTML = productos[0].img[0].map(img => createHTMLImg(img))
    imageContainer.style.backgroundImage = `url('../images/zapa1.jpg')`
    btnAddCart.innerHTML = btnAdd(0)
}

//-------------------------------------------FIN DE RENDERIZADO DE ELEMENTOS ----------------------------------//


//----------------------------------------------FUNCIONES DEL CARRITO------------------------------------------//
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
const productContainer = document.querySelector('.cart-modal__chekout-container');
const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);


const renderCreateHTMLCart = () =>{
    message__modal.innerHTML= ''
    cartModal.innerHTML= ""
     cartModal.innerHTML += createHTMLCart(JSON.parse(localStorage.getItem('productos')))
     cartModal.innerHTML += `<button class="cart-modal__chekount" >Checkout</button>`
}

const createHTMLCart = (allProds) => {
    if(!allProds) return;
 return allProds.map(prod => {
    const {img, name,color,price, quantity} = prod
    let totalPrice = price * quantity
    return`
      <div class="cart-modal__chekout-container">
        <div class="cart-modal__details-container">
          <img class="cart-modal__image" src="${img}" alt="">
          <div>
            <p class="cart-modal__product">${name}</p>
            <p class="cart-modal__price">$${price} x${quantity}  <span><b>$${totalPrice}</b></span> </p>
            <p>Color: ${color}</p>
          </div>
          <img id=${color} class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
        </div>
      </div>
    `
}
)
}


//mostrar carrito
const verificarCarrito = () => {
    if(lastValue===0){
        return '<p class="cart-empty">Your cart is empty</p>'
    } else{
        return '<p class="cart-empty" style="display: none;"></p>'
    }
}
const showCart = () => {
    cartModal.classList.toggle('show');
    if(lastValue===0){
        message__modal.innerHTML = '<p class="cart-empty">Your cart is empty</p>'
    }
}

const productData = (e) => {
    const {img,name,price,color} = e.target.dataset;
    const product = {img,name,price,color, quantity:userInputNumber}
    return product;
 }



const addToCart = (e) => {
    if(!e.target.classList.contains('details__button')) return;
    const product = productData(e)

    const existItem = cart2.find((X) => X.color === product.color)
        
    const newItems = existItem
          ? cart2.map((item) =>
              item.color === existItem.color ? {...existItem, quantity: existItem.quantity + product.quantity} : item
            )
          : [...cart2, product];
    
    saveLocalStorage(newItems)
    cart2 = JSON.parse(localStorage.getItem('productos'))
    renderCreateHTMLCart()
}




//Borrar el contenido del carrito

    const deleteItem = (e) => {
        if(!e.target.classList.contains('cart-modal__delete')) return;
            const id = e.target.id
            const newCart = cart2.filter((X) => X.color !== id)
            saveLocalStorage(newCart)
            cart2 = JSON.parse(localStorage.getItem('productos'))
            renderCreateHTMLCart() 
    }


//Total de productos
    const getTotal = () => {
        if (cart2.length > 0) {
            
          return  cart2.reduce((acc, prod) => {
                return prod.quantity + acc
            },0)
        }
    }
    
   console.log(getTotal())
        
    
    


//----------------------------------------------FIN DE FUNCIONES DE CARRITO ---------------------------------------//


//--------------------------------------------------FUNCIONES DE IMAGENES------------------------------------------//

//cambiar imagenes segun color
const selectColor = e => {
    const valueColor = e.target.dataset.colors;
   return valueColor.toString();
}
//cambiar imagene principal y miniaturas, agregar datos a btnAddtoCart.
const cambiarImagenes = (e) => {
  switch (selectColor(e)){
    case 'black':
        imageContainer.style.backgroundImage = `url('../images/zapa1.jpg')`
        renderCreateHTMLImg(productos[0].img[0]);
        btnAddCart.innerHTML = btnAdd(0)
        break;
    case 'white':   
        imageContainer.style.backgroundImage = `url('../images/zapa4.jpg')`
        renderCreateHTMLImg(productos[0].img[1])
        btnAddCart.innerHTML = btnAdd(1)
        break;
    case 'gray':
        imageContainer.style.backgroundImage = `url('../images/zapa7.jpg')`
        renderCreateHTMLImg(productos[0].img[2])
        btnAddCart.innerHTML = btnAdd(2)
        break;
        default:
    return;
}
}

//Cambiar las imagenes principales clickeando miniaturas
const changeImgFront = e => {
    if(!e.target.classList.contains('gallery__nmd_r1')) return;

    //este valor sale consoleando "e", se cambia la ruta de la imagen.
    const valueImg = e.srcElement.attributes[2].value;
    imageContainer.style.backgroundImage = `url('${valueImg}')`
}

//crear imagenes miniatura
const createHTMLImg = img => `<img id=${count++} class="gallery__nmd_r1" src="${img}" alt="Adidas NMD_R1">`


const renderCreateHTMLImg = array => galeryImg.innerHTML = array.map(imagen => createHTMLImg(imagen)).join('')


//------------------------------------------------FIN FUNCIONES DE IMAGENES----------------------------------------//
   

//---------------------------------------------------MENU HAMBURGUESA----------------------------------------------//
// Mostrar el navbar cuando presiono el menu de hamburgesa
const hamburgerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeModalNavbar = document.querySelector('.modal-navbar__close-icon');

modalNavbar.style.display = 'none'

hamburgerMenu.addEventListener('click', ()=> modalNavbar.style.display = 'block')


closeModalNavbar.addEventListener('click', ()=> modalNavbar.style.display = 'none');

//------------------------------------------------FIN MENU HAMBURGUESA-----------------------------------------//



const init = ()=> {
   
    renderCreateHTMLCart()
    renderCreateHTMLPrices(productos)
    createHTMLButtonColor(productos)
    buttons__colors.addEventListener('click', cambiarImagenes)
    document.addEventListener('click', changeImgFront)
    document.addEventListener('click', addToCart)
    cartIconBtn.addEventListener('click', showCart)
    renderOnLoad();
    cart__modal.addEventListener('click',deleteItem)
    
}

init()