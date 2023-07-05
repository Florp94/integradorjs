const productsContainer = document.querySelector(".parent");

const createProductTemplate = (product) => {
    const {id, name, precio, cardImg} = product;


    return `
        <div class="card_parent">
            <img src=${cardImg} alt=${name}>
            <div class="fav_filter">
                <i class="fa-regular fa-heart"></i>
                <p>Hilo</p>
            </div>
            <h4>${name}</h4>
            <div class="color">
                <button>B</button>
                <button>L</button>
                <button>R</button>
            </div>
            <h2> $<span>${precio}</span> </h2>
            <button class="a_compra" data-id="${id}" data-name="${name}" data-precio="${precio}" data-img="${cardImg}" href="#"> <i class="fa-solid fa-cart-plus"></i> Agregar al carrito</button>
        </div>
    `
};

const renderProducts = (productsList) => {
    productsContainer.innerHTML += productsList.map(createProductTemplate).join("");
};







const init = () => {
    renderProducts(appState.product[appState.currentProductsIndex]);
};

init();