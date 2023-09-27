const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingMenu = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);
shoppingMenu.addEventListener('click', toggleProductDetail);

window.addEventListener('resize', checkWindowSize);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}

function toggleProductDetail(){
    productDetail.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}



function checkWindowSize(){
    if (window.innerWidth > 640) {
        mobileMenu.classList.add('inactive');
    }
    if(window.innerWidth < 640) {
        desktopMenu.classList.add('inactive');
    }
}

// Comprobar el tamaño de la ventana al cargar la página
checkWindowSize();

// const productList = [];
// productList.push({
//     name: 'Bike',
//     price: 120,
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// })

// for (product of productList){
//     const productCard = document.createElement('div');
//     productCard.classList.add('product-card');

//     const img = document.createElement('img');
//     img.setAttribute('src', product.image)

//     const productInfo = document.createElement('div');
//     productInfo.classList.add('product-info');

//     const productInfoDiv = document.createElement('div');

//     const productPrice = document.createElement('p')
//     productPrice.innerText = '$' + productPrice;

//     const productName = document.createElement('p');
//     productName.innerText = productName;

//     productInfoDiv.appendChild(productPrice);
//     productInfoDiv.appendChild(productName);

//     const productInfoFigure = document.createElement('figure');
//     const productInfoImgCard = document.createElement('img');
//     img.setAttribute('src','./icons/bt_add_to_cart.svg');

//     productInfoFigure.appendChild(productInfoImgCart);


// }

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Car',
    price: 120000,
    image: "https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Motorcycle',
    price: 7500,
    image: "https://images.pexels.com/photos/2044871/pexels-photo-2044871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/1855349/pexels-photo-1855349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/4318198/pexels-photo-4318198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Bike',
    price: 600,
    image: "https://images.pexels.com/photos/3370153/pexels-photo-3370153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Bike',
    price: 100,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike',
    price: 1200,
    image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

// Seleccionar el contenedor correcto donde se añadirán las tarjetas de productos
const container = document.querySelector('.cards-container'); 

for (const product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.classList.add('product-img');
    img.setAttribute('src', product.image);
    img.setAttribute('alt', product.name);
    productCard.appendChild(img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productCard.appendChild(productInfo);

    const productInfoDiv = document.createElement('div');
    productInfo.appendChild(productInfoDiv);

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    productInfoDiv.appendChild(productPrice);

    const productName = document.createElement('p');
    productName.innerText = product.name;
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    productInfo.appendChild(productInfoFigure);

    const productInfoImgCart = document.createElement('img');
    productInfoImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoImgCart.setAttribute('alt', 'Add to Cart');
    productInfoFigure.appendChild(productInfoImgCart);

    container.appendChild(productCard);
}
