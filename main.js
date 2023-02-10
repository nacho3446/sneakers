let allProducts = [
    {
        id: 1,
        name: 'COSMIC LOVE PULLOVER HOOD',
        price: 112,
        image: '/images/hood1.jpg',
        categories: 'hoodies',
    },

    {
        id: 2,
        name: 'STARGAZE PULLOVER HOOD',
        price: 115,
        image: '/images/hood2.jpg',
        categories: 'hoodies',
    },

    {
        id: 3,
        name: 'OBEY STOMPED PULLOVER HOOD',
        price: 115,
        image: '/images/hood3.jpg',
        categories: 'hoodies',
    },

    {
        id: 4,
        name: 'WAVY DOG ZIP HOOD',
        price: 120,
        image: '/images/hood4.jpg',
        categories: 'hoodies',
    },


    
// ----------------------------------------------------------------------------------------



    {
        id: 5,
        name: 'WAVY AMBER PUFFER',
        price: 140,
        image: '/images/jacket1.jpg',
        categories: 'jackets',
    },

    {
        id: 6,
        name: 'OBEY ICON COACH JACKET',
        price: 132,
        image: '/images/jacket2.jpg',
        categories: 'jackets',
    },

    {
        id: 7,
        name: 'OBEY ICON BOMBER JACKET',
        price: 128,
        image: '/images/jacket3.jpg',
        categories: 'jackets',
    },

    {
        id: 8,
        name: 'ORDER JACKET',
        price: 128,
        image: '/images/jacket4.jpg',
        categories: 'jackets',
    },
    
    
    
    // --------------------------------------------------------------------------------



    {
        id: 9,
        name: 'OBEY EYES TIE DYE CHOICE T-SHIRT',
        price: 54,
        image: '/images/tshirt1.jpg',
        categories: 't-shirts',
    },

    {
        id: 10,
        name: 'ESTABLISHED WORKS EYES LS T-SHIRT',
        price: 57,
        image: '/images/tshirt2.jpg',
        categories: 't-shirts',
    },

    {
        id: 11,
        name: 'ESTABLISHED WORKS EYES T-SHIRT',
        price: 51,
        image: '/images/tshirt3.jpg',
        categories: 't-shirts',
    },

    {
        id: 12,
        name: 'OBEY WORM CROPPED CHLOE FITTED T-SHIRT',
        price: 51,
        image: '/images/tshirt4.jpg',
        categories: 't-shirts',
    },



    // ------------------------------------------------------------------------------------



    {
        id: 13,
        name: 'FUBAR PLEATED DENIM',
        price: 72,
        image: '/images/pants1.jpg',
        categories: 'pants',
    },

    {
        id: 14,
        name: 'ESTATE PANT',
        price: 68,
        image: '/images/pants2.jpg',
        categories: 'pants',
    },

    {
        id: 15,
        name: 'LEAH BAGGY DENIM',
        price: 68,
        image: '/images/pants3.jpg',
        categories: 'pants',
    },

    {
        id: 16,
        name: 'STRAGGLER FLOODED PANT',
        price: 70,
        image: '/images/pants4.jpg',
        categories: 'pants',
    },
]

// ---------------------------MENU TOGGLE------------------------------------
const listItems = document.querySelector('.nav_list_menu');
const list = document.querySelector('.list')
const barsMenu = document.querySelector('.fa-bars')
const xMenu = document.querySelector('.fa-x')


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
    <img class="img-card-product" src=${array.image} />
    <h4>${array.name}</h4>
    <p>$${array.price}</p>
    <div class="card_shop" id='asd'>
    <p>asdsad</p>
</div>
</li>
    `
}

const renderAllProductsHtml = (array) =>{
    products.innerHTML = array.map(product => showAllProductsHtml(product)).join('')
}
 
// ------------------------------TERMINA RENDERIZADO PRODUCTOS------------------

// --------------------------------CARD SHOP--------------------------------------
const card_shop = document.getElementById('asd')

const showCardProduct = (e) =>{
    if (!e.target.classList.contains('img-card-product'))return

    card_shop.style.display = 'block'
}







document.addEventListener('click', showCardProduct)


// -----------------------------------TERMINA CARD SHOP---------------------------


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

