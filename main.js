let allProducts = [
    {
        id: 1,
        name: 'COSMIC LOVE PULLOVER HOOD',
        price: 112,
        image: '/images/hood1.jpg',
        categories: 'hoodies',
        info: 'Meet the "Cosmic Love Pullover Hood" sweatshirt. A stylish combination of comfort and design. Inspired by the universe, this hoodie is one-of-a-kind. Ideal for cold days and a fantastic gift. Get your Cosmic Love Pullover Hood now!',
    },

    {
        id: 2,
        name: 'STARGAZE PULLOVER HOOD',
        price: 115,
        image: '/images/hood2.jpg',
        categories: 'hoodies',
        info:'Introducing the "Stargaze Pullover Hood" sweatshirt. A cozy and stylish hoodie featuring a stunning night sky design. Perfect for chilly days and for all star-gazing enthusiasts. Get your Stargaze Pullover Hood today!',
    },

    {
        id: 3,
        name: 'OBEY STOMPED PULLOVER HOOD',
        price: 115,
        image: '/images/hood3.jpg',
        categories: 'hoodies',
        info:'Check out the "Stomped Pullover Hood" sweatshirt. A bold and comfortable hoodie with a unique tread design. Perfect for making a statement on any casual occasion. Get your Stomped Pullover Hood today!',
    },

    {
        id: 4,
        name: 'WAVY DOG ZIP HOOD',
        price: 120,
        image: '/images/hood4.jpg',
        categories: 'hoodies',
        info:'Meet the "Wavy Dog Zip Hood" sweatshirt. A fun and cozy hoodie featuring a wavy dog design. Perfect for casual wear and for all dog lovers. Get your Wavy Dog Zip Hood today!',
    },


    
// ----------------------------------------------------------------------------------------



    {
        id: 5,
        name: 'WAVY AMBER PUFFER',
        price: 140,
        image: '/images/jacket1.jpg',
        categories: 'jackets',
        info:'Introducing the "Wavy Amber Puffer". A warm and stylish puffer jacket with a unique wavy pattern. Perfect for staying warm and making a fashion statement. Get your Wavy Amber Puffer today!',
    },

    {
        id: 6,
        name: 'OBEY ICON COACH JACKET',
        price: 132,
        image: '/images/jacket2.jpg',
        categories: 'jackets',
        info:'Check out the "Icon Coach Jacket". A classic and stylish coach jacket featuring iconic emblem designs. Perfect for casual wear or as a fashionable layering piece. Get your Icon Coach Jacket today!',
    },

    {
        id: 7,
        name: 'OBEY ICON BOMBER JACKET',
        price: 128,
        image: '/images/jacket3.jpg',
        categories: 'jackets',
        info:'Introducing the "Icon Bomber Jacket". A stylish and versatile bomber jacket featuring iconic emblem designs. Perfect for casual wear or as a fashionable layering piece. Get your Icon Bomber Jacket today!',
    },

    {
        id: 8,
        name: 'ORDER JACKET',
        price: 128,
        image: '/images/jacket4.jpg',
        categories: 'jackets',
        info:'Meet the "Order Jacket". A sleek and stylish jacket with a clean and modern design. Perfect for creating a sharp and sophisticated look. Get your Order Jacket today!',
    },
    
    
    
    // --------------------------------------------------------------------------------



    {
        id: 9,
        name: 'OBEY EYES TIE DYE CHOICE T-SHIRT',
        price: 54,
        image: '/images/tshirt1.jpg',
        categories: 't-shirts',
        info:'Introducing the "Eyes Tie Dye Choice T-Shirt". A fun and trendy t-shirt featuring a bold tie-dye pattern with eye designs. Perfect for making a statement and expressing your personal style. Get your Eyes Tie Dye Choice T-Shirt today!',
    },

    {
        id: 10,
        name: 'ESTABLISHED WORKS EYES LS T-SHIRT',
        price: 57,
        image: '/images/tshirt2.jpg',
        categories: 't-shirts',
        info:'Check out the "Established Works Eyes LS T-Shirt". A stylish and comfortable long-sleeve t-shirt featuring eye designs and an "Established Works" tagline. Perfect for casual wear and making a statement. Get your Established Works Eyes LS T-Shirt today!',
    },

    {
        id: 11,
        name: 'ESTABLISHED WORKS EYES T-SHIRT',
        price: 51,
        image: '/images/tshirt3.jpg',
        categories: 't-shirts',
        info:'Introducing the "Established Works Eyes T-Shirt". A casual and comfortable t-shirt featuring eye designs and an "Established Works" tagline. Perfect for everyday wear and making a statement. Get your Established Works Eyes T-Shirt today!',
    },

    {
        id: 12,
        name: 'OBEY WORM CROPPED CHLOE FITTED T-SHIRT',
        price: 51,
        image: '/images/tshirt4.jpg',
        categories: 't-shirts',
        info:'Introducing the "Fubar Pleated Denim". A fashionable and comfortable pair of denim pants featuring pleated detailing and a "Fubar" tagline. Perfect for casual wear and making a statement. Get your Fubar Pleated Denim today!',
    },



    // ------------------------------------------------------------------------------------



    {
        id: 13,
        name: 'FUBAR PLEATED DENIM',
        price: 72,
        image: '/images/pants1.jpg',
        categories: 'pants',
        info:'Meet the "Worm Cropped Chloe Fitted T-Shirt". A stylish and form-fitting t-shirt featuring a worm design. Perfect for making a bold fashion statement and showing off your personal style. Get your Worm Cropped Chloe Fitted T-Shirt today!',
    },

    {
        id: 14,
        name: 'ESTATE PANT',
        price: 68,
        image: '/images/pants2.jpg',
        categories: 'pants',
        info:'Check out the "Estate Pant". A stylish and versatile pair of pants with a clean and modern design. Perfect for creating a sharp and sophisticated look. Get your Estate Pant today!',
    },

    {
        id: 15,
        name: 'LEAH BAGGY DENIM',
        price: 68,
        image: '/images/pants3.jpg',
        categories: 'pants',
        info:'Introducing the "Leah Baggy Denim". A comfortable and fashionable pair of baggy denim pants featuring a unique design. Perfect for casual wear and making a statement. Get your Leah Baggy Denim today!'
    },

    {
        id: 16,
        name: 'STRAGGLER FLOODED PANT',
        price: 70,
        image: '/images/pants4.jpg',
        categories: 'pants',
        info:'Meet the "Straggler Flooded Pant". A stylish and comfortable pair of pants featuring a flooded design. Perfect for casual wear and making a bold fashion statement. Get your Straggler Flooded Pant today!'
    },
]

// ---------------------------MENU TOGGLE------------------------------------
const listItems = document.querySelector('.nav_list_menu');
const list = document.querySelector('.list')
const barsMenu = document.querySelector('.fa-bars')
const xMenu = document.querySelector('.fa-x')
const userPage = document.querySelector('.user-page')


const body = document.querySelector('#body')

const openMenu = (e) =>{
    if(!e.target.classList.contains('fa-bars')) return;
    listItems.style.display = 'flex'
    barsMenu.style.display= 'none'
    xMenu.style.display = 'block'
    body.style.overflowY= 'hidden'
}

const closeMenu = (e) =>{
    if(!e.target.classList.contains('fa-x')) return;
    listItems.style.display = 'none'
    barsMenu.style.display = 'block'
    xMenu.style.display = 'none'
    body.style.overflowY= 'visible'
    
}

const openUserPage = (e) =>{
    window.open('/login_register/acount.html')
}

userPage.addEventListener('click', openUserPage)
// ---------------------------TERMINA MENU TOGGLE----------------------------


// --------------------------------SUBMENU--------------------------------------


const subMenu = document.querySelector('.subMenu')

const showSubMenu = (e) =>{
    if(e.target.classList.contains('container')){
        subMenu.style.display='block'
    }else{
        return
    }
}

const hiddenSubMenu = (e) => {
    if(e.target.classList.contains('container')) return;
    subMenu.style.display = 'none'

 }


 document.addEventListener('click', showSubMenu)
 document.addEventListener('click', hiddenSubMenu)
//  ----------------------------TERMINA SUBMENU----------------------------------

// --------------------------------RENDERIZADO PRODUCTOS----------------------------------
const products = document.querySelector('.products')

let showAllProductsHtml = (array) =>{
    return`
    <li class="cardProduct">
    <img class="img-card-product" data-id=${array.id} src=${array.image} />
    <h4>${array.name}</h4>
    <p>$${array.price}</p>
</div>
</li>
    `
}

const renderAllProductsHtml = (array) => products.innerHTML = array.map(product => showAllProductsHtml(product)).join('')

 
// ------------------------------TERMINA RENDERIZADO PRODUCTOS------------------

// --------------------------------CARD SHOP--------------------------------------
const cardShop = document.querySelector('.card_shop')

const closeCardShop = (e) =>{
    if(!e.target.classList.contains('fa-xmark'))return;
    cardShop.style.display='none'
}

const createHTMLcardShop = (array) => {
    return `
    <img src="${array.image}" alt="" />
    <i class="fa-sharp fa-solid fa-xmark"></i>
    <div class="infoCard_shop">
      <h4>${array.name}</h4>
      <p>
        ${array.info}
      </p>
      <form class="quantity_container">
        <button class="addToCart" 
        data-id="${array.id}"
        data-name="${array.name}"
        data-categories="${array.categories}"
        data-image="${array.image}"
        data-price="${array.price}">ADD TO CART</button>
      </form>
    </div>`
}

const renderCreateHTMLcardShop = (array,e) => {
    cardShop.style.display='flex'
    cardShop.innerHTML = array.map(product => createHTMLcardShop(product))
}

const searchProductShop = (e) => {
    if(!e.target.classList.contains('img-card-product')) return;
    const productID = e.target.dataset.id
   
    const foundProduct = allProducts.filter(product => product.id === Number(productID))

    renderCreateHTMLcardShop(foundProduct)
    window.scroll(0,0)
}


document.addEventListener('click', searchProductShop)
document.addEventListener('click', closeCardShop)
// -----------------------------------TERMINA CARD SHOP---------------------------


//-------------------------------------   CARRITO  ------------------------------------//
const formQuantityContainer = document.querySelector('.quantity_container')
const cart_list = document.querySelector('.cart_list')
const cart_card = document.querySelector('.cart_card')
const buyConfirmMessage = document.querySelector('.buyConfirm')
const message = document.querySelector('.message')
const cart_alerts = document.querySelector('.cart_alerts')
const total = document.querySelector('.total')
const buy_btn = document.querySelector('.buy_btn')
const total_price = document.querySelector('.total_price')
const buyoutMessageContainer = document.querySelector('.buyout_message_container')
const buyoutMessage = document.querySelector('.buyout_message')
//carta de productos
let cart = [];

const buyout = () => {
    cart = []
    cart_card.style.display='none'
    showMessageBuyout()
}

//estilos de carrito al abrir y cerrarlo
const checkExistCartProduct = () => {
    if(!cart.length){
        total.style.display='none'
        buy_btn.style.display='none'
        cart_card.style.minHeight = '100px'
        cart_card.style.height = '100px'
        cart_card.style.transition='all 0.3s ease-in-out'
        cart_list.style.justifyContent='center'
        cart_list.innerHTML = `<h3>Cart is empty !</h3>`
    } else {        
        cart_list.style.justifyContent='start'
        total.style.display='block'
        buy_btn.style.display='block'
        cart_card.style.minHeight = '400px'
        cart_card.style.height = '400px'
        total_price.textContent= `$`+cart.reduce((acc, cur) => acc + Number(cur.price * cur.quantity), 0);
        renderCart(cart)
    }
}
const showMessageBuyout = () => {
    buyoutMessageContainer.style.transition = 'all 0.3s ease-in-out'
    buyoutMessageContainer.style.backdropFilter='blur(10px)'
    buyoutMessage.style.transition = 'all 0.3s ease-in-out'
    buyoutMessageContainer.style.height='100vh'
    buyoutMessage.style.height='150px'
    buyoutMessage.style.fontSize='1rem'

    setTimeout(()=> {
        buyoutMessageContainer.style.height='0'
        buyoutMessageContainer.style.backdropFilter='none'
        buyoutMessage.style.height='0'
        buyoutMessage.style.fontSize='1px'
    }, 3000)

}
const showMessageBuy = () => {
    buyConfirmMessage.style.transition = 'all 0.2s ease-in-out'
    buyConfirmMessage.style.height= '30px'
    message.style.transition = 'all 0.2s ease-in-out'
    message.style.height = '30px'
    

    setTimeout(()=> {
      buyConfirmMessage.style.height = '0';
      message.style.height = '0'
    },2000)
}

const showCart = (e) => {
    if(!e.target.classList.contains('cart_icon')) return;
     cart_card.style.display='flex'
    
     checkExistCartProduct()
}

const closeCart = (e) => {
    if(!e.target.classList.contains('fa-circle-xmark')) return;
    cart_card.style.display = 'none'

}

const createHTMLCart = (array) => {
    return `
         <li class="cart_item">
           
            <i class="fa-solid fa-trash" data-id="${array.id}"></i>
            <img src=${array.image} alt="" class="cart_image">
            <div style="display:flex; justify-content: center; flex-direction: column; align-items: center; min-width:135px; max-width:300px; width:100%;">
               <h4 class="cart_name"> ${array.name}</h4>
               <p class="cart_price"> $${array.price}</p>
            </div>  
            <div class="btnQuantities"> 
                <i class="fa-solid fa-minus" data-id="${array.id}"></i>
                <p>${array.quantity}</p> 
                <i class="fa-solid fa-plus" data-id="${array.id}"></i>
            </div>
        </li>
    `
}
const renderCart = (array) => cart_list.innerHTML = array.map(product => createHTMLCart(product)).join(' ')

const targetProduct = (e) => {
    const {name,id,image,categories,price,} = e.target.dataset;
    const product = {name,id,image,categories,price}
    return product;
}

const isExistProduct = (array) => cart.find(product => product.id == array.id)

const addUnitProduct = array => {
    cart = cart.map(cartProduct => {
        return cartProduct.id === array.id
         ? { ... cartProduct, quantity: cartProduct.quantity+1} 
        : cartProduct;
    })
}

const addToCart = (e) => {
    e.preventDefault();
    if(!e.target.classList.contains('addToCart')) return;

    if(isExistProduct(targetProduct(e))){
        addUnitProduct(targetProduct(e))
    } else {
        cart = [... cart, {...targetProduct(e),quantity:1}]
    }
    showMessageBuy()
    checkExistCartProduct()
}

const btnPlus = e => {
    if(!e.target.classList.contains('fa-plus')) return;
    cart_card.style.display='flex'
    if(isExistProduct(targetProduct(e))){
        addUnitProduct(targetProduct(e))  
    }
    checkExistCartProduct()
}

const btnMinus = e => {
    if(!e.target.classList.contains('fa-minus')) return;
    cart_card.style.display='flex'
    removeUnitProduct(e)
    checkExistCartProduct()
}

const removeUnitProduct = e => {
    const valueID = e.target.dataset.id;
    
    cart = cart.map(cartProduct => {
        return cartProduct.id === valueID
         ? { ... cartProduct, quantity: cartProduct.quantity-1} 
        : cartProduct;
    })

    if(cart.find(product =>{ 
        if(product.quantity === 0){
            window.confirm('Desea eliminar producto ?') 
            ? removeProductCart(e)
            : product.quantity=1;
        }
    }))

    checkExistCartProduct()
}

const removeProductCart = e => {
    const valueID = e.target.dataset.id;
    cart = cart.filter(product => product.id !== valueID)  
    checkExistCartProduct()
}

const removeProductCartIcon = e => {
    if(!e.target.classList.contains('fa-trash')) return;

    if(window.confirm('Desea eliminar producto ?')){
        const valueID = e.target.dataset.id;
        cart = cart.filter(product => product.id !== valueID)
        checkExistCartProduct()
    } else {
        return;
    }
}


document.addEventListener('click', addToCart)
document.addEventListener('click', btnMinus)
document.addEventListener('click', btnPlus)
document.addEventListener('click', showCart)
document.addEventListener('click', closeCart)
document.addEventListener('click', removeProductCartIcon)
buy_btn.addEventListener('click', buyout)

//----------------------------------TERMINA CARRITO -------------------------------------//



// ---------------------------------FILTER----------------------------------
const title_category = document.querySelector('.title-category')

const filterCategory = (e) =>{
if (!e.target.classList.contains('subMenu_link'))return

const valueCategory = e.target.dataset.category

let filtredProducts = allProducts.filter(categories => categories.categories === valueCategory)
renderAllProductsHtml(filtredProducts)

let titleCategory = allProducts.find(categories => categories.categories === valueCategory)
title_category.innerHTML = titleCategory.categories[0].toUpperCase()+titleCategory.categories.substring(1)
}

document.addEventListener('click', filterCategory)
// ---------------------------------TERMINA FILTER------------------------



const init = () =>{
    renderAllProductsHtml(allProducts)
    document.addEventListener('click', openMenu)
    document.addEventListener('click', closeMenu)
    ;
}
init();

