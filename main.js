//import Swal from "sweetalert2";


const navbarEmail = document.querySelector('.navbar-email'); // Email en forma de texto que despliega el menu en version desktop
const desktopMenu = document.querySelector('.desktop-menu');
const navbarMobile = document.querySelector('.menu'); // Imagen en el navbar que despliega el menu en version mobile
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart'); // Imagen en el navbar que despliega el carrito de compras.
const shoppingCart = document.querySelector('#shopping-cart');
const shoppingCartProductCounter = document.querySelector('#shopping-cart-product-counter');
const orderContent = document.querySelector('.my-order-content');
let shoppingCartTotal = document.querySelector('#shopping-cart-total');

// Display products
const cardsContainer = document.querySelector('.cards-container'); //Para desplegar y setear las tarjetas con informacion de productos dentro de este contenedor

//Product details
const productDetailContainer = document.querySelector('#product-datail');
const productDetailClose = document.querySelector('.product-detail-close');
const productDetailImg = document.querySelector('.product-img');
const productDetailPrice = document.querySelector('.product-price');
const productDetailName = document.querySelector('.product-name');
const productDetailDescription = document.querySelector('.product-description');
const productDetailAddToCart = document.querySelector('.add-to-cart-button');

// Lista de productos, las propiedades de cada uno de ellos son > {name, price, src}
const products = [
    {
        id: 12,
        price: 487.99,
        name: "Hidratante",
        description: "Productos especiales que ayuden a renovar las células epidérmicas y el manto hidrolipídico.",
        src: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 11,
        price: 99.99,
        name: "Loción",
        description: "La loción corporal es un producto de consistencia más líquida y fluida.",
        src: "https://images.pexels.com/photos/3762882/pexels-photo-3762882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 10,
        price: 478.99,
        name: "Base",
        description: "La base de maquillaje es un producto elaborado para tapar y corregir imperfecciones de la piel.",
        src: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 9,
        price: 248.99,
        name: "Agua Miselar",
        description: "Es un producto hecho específicamente para retirar el maquillaje de tu piel de forma eficaz.",
        src: "https://media.istockphoto.com/id/596814774/es/foto/t%C3%B3nico-facial.jpg?b=1&s=612x612&w=0&k=20&c=Qvowndf-bin6zwSWJKk_AXJWm7oqtjHPWo4pzVpUV1s="
    },
    {
        id: 8,
        price: 112.99,
        name: "Labial y sombra",
        description: "Los clásicos labiales van desde los tonos más neutros hasta los más brillantes.",
        src: "https://images.pexels.com/photos/4735904/pexels-photo-4735904.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 7,
        price: 567.99,
        name: "Rimmel y labial",
        description: "El rimel prosa clásico es indispensable en tu cosmetiquera.",
        src: "https://images.pexels.com/photos/2633986/pexels-photo-2633986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 6,
        price: 782.99,
        name: "Labiales líquidos",
        description: "Los labiales son esencialmente una mezcla de aceites, grasas y ceras que dispersan sustancias colorantes en tus labios.",
        src: "https://images.pexels.com/photos/8145764/pexels-photo-8145764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 5,
        price: 299.99,
        name: "Base Hidratante",
        description: "Es una base de maquillaje cómoda que ayuda a corregir e igualar el tono de la piel, suavizar la textura y disimular los diferentes tipos de imperfecciones para obtener una tez de porcelana, muy natural y rejuvenecida.",
        src: "https://images.pexels.com/photos/10107538/pexels-photo-10107538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 4,
        price: 199.99,
        name: "Labial Mate",
        description: "Los pintalabios mate son tendencia actualmente y se caracterizan por proporcionar un color intenso, opaco y sin brillo. ",
        src: "https://images.pexels.com/photos/14716056/pexels-photo-14716056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        price: 299.99,
        name: "Kit de Brochas",
        description: "Una brocha es un instrumento consistente en un conjunto de cerdas unidas a un mango que se utiliza para maquillarse",
        src: "https://images.pexels.com/photos/1749452/pexels-photo-1749452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        price: 89.99,
        name: "Base de maquillaje Solida",
        description: "La base de maquillaje es un producto que ayuda a que la piel luzca un mejor aspecto, de igual manera puede ayudar a disminuir la apariencia de algunas imperfecciones.",
        src: "https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 1,
        price: 349.99,
        name: "Paleta de Sombras",
        description: "Las paletas de sombras son un producto esencial en el maquillaje, ya que permiten iluminar y aportar profundidad a la mirada.",
        src: "https://images.pexels.com/photos/1327689/pexels-photo-1327689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]
// Array que gestionara los elementos que estan en el carrito de compras.
let shoppingCartProducts = [];

navbarEmail.addEventListener('click', toggleDesktopMenu);
navbarMobile.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleShoppingCart);
productDetailClose.addEventListener('click', closeProductDetail);
productDetailAddToCart.addEventListener('click', addProductToShoppingCart);

function closeComponentsToDisplayMenu() {
    const isShoppingCartOpen = !shoppingCart.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');
    if (isShoppingCartOpen) {
        shoppingCart.classList.add('inactive')
    }
    if (isProductDetailOpen) {
        closeProductDetail();
    }
}

function toggleDesktopMenu() {
    closeComponentsToDisplayMenu();
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    closeComponentsToDisplayMenu();
    mobileMenu.classList.toggle('inactive');
}

function closeMobileOrDesktopMenu() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }
}

function toggleShoppingCart() {
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');
    closeMobileOrDesktopMenu();
    if (isProductDetailOpen) {
        productDetailContainer.classList.add('inactive');
    }
    shoppingCart.classList.toggle('inactive');
}

function openProductDetail(e) {
    //validar que ningun menu este abierto, al igual que el carrito de compras.
    closeMobileOrDesktopMenu();
    const isShoppingCartOpen = !shoppingCart.classList.contains('inactive');
    if (isShoppingCartOpen) {
        shoppingCart.classList.add('inactive');
    }
    const product = products.filter(product => product.id == e.target.id); //obtener los datos del elemento clickeado

    //Le asigno los valores correspondientes a las partes del contenedor correspondientes
    productDetailImg.setAttribute('src', product[0].src)
    productDetailPrice.textContent = `$ ${product[0].price}`;
    productDetailName.textContent = product[0].name;
    productDetailDescription.textContent = product[0].description;
    productDetailAddToCart.setAttribute('id', e.target.id);
    productDetailContainer.classList.remove('inactive') //mostrar el product detail con los datos pertinentes.
}

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
}

function displayProducts(products) {
    for (product of products) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.src);
        productImg.setAttribute('alt', product.name);
        productImg.setAttribute('id', product.id); //para saber que datos de producto mostrar en los detalles
        productImg.addEventListener('click', openProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.textContent = `$ ${product.price}`;

        const productName = document.createElement('p');
        productName.textContent = product.name;

        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');

        const imgCart = document.createElement('img');
        imgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        imgCart.setAttribute('alt', `carrito compras`);
        imgCart.setAttribute('title', `Agregar ${product.name} al carrito`);
        imgCart.setAttribute('id', product.id);
        imgCart.addEventListener('click', addProductToShoppingCart);

        productInfoFigure.appendChild(imgCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }
}

function updateShoppingCartTotal(e) {
    setTimeout(() => {
        let total = 0.00;
        shoppingCartProducts.forEach((product) => {
            total += product.price
        })
        shoppingCartTotal.innerHTML = `$ ${total.toFixed(2)}`;
        // Amentar el contador de productos.
        shoppingCartProductCounter.innerHTML = shoppingCartProducts.length; 
    }, 100);
}

function deleteProductToShoppingCart(e) {
    //Visualmente (html)
    let producto = document.getElementById(e.target.id);
    if (producto.parentNode) {
        producto.parentNode.removeChild(producto);
    }
    //logicamente (array)
    for(let i in shoppingCartProducts) {
        if((shoppingCartProducts[i].id == e.target.id)){
            shoppingCartProducts.splice(i, 1);
            break;
        }
    }
    updateShoppingCartTotal();
}

function addProductToShoppingCart(e) {
    
    console.log(e.target)
    const product = products.filter(product => product.id == e.target.id);
    
        console.log(product);
        console.log(product[0]);

        // Agregarlo al carrito (array)
        shoppingCartProducts.push(product[0]);
        // Crear una tarjeta para añadirla al carrito (html)
        const shoppingCart = document.createElement('div');
        shoppingCart.setAttribute('class', 'shopping-cart');
        shoppingCart.setAttribute('id', e.target.id); //para saber que tarjeta quitar a nivel de html

        // Datos del producto en el carrito de compras
        const figure = document.createElement('figure');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product[0].src);
        productImg.setAttribute('alt', product[0].name);
        figure.appendChild(productImg);

        const productName = document.createElement('p');
        productName.textContent = product[0].name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$ ${product[0].price}`;

        const productDelete = document.createElement('img');
        productDelete.setAttribute('src', './icons/icon_close.png');
        productDelete.setAttribute('alt', 'delete product icon');

        productDelete.setAttribute('id', product[0].id); //para saber que dato eliminar
        productDelete.addEventListener('click', deleteProductToShoppingCart);
        
        //Agregar los datos del producto a una tarjeta
        shoppingCart.append(figure, productName, productPrice, productDelete);
        
        //Agregar la tarjeta con los datos del producto al carrito de compras como tal
        orderContent.appendChild(shoppingCart);
       
        
        updateShoppingCartTotal(); //Actualiza los datos del carrito 
        alert("¡Usted a agregado un nuevo articulo al carrito!");
        
}

displayProducts(products);
