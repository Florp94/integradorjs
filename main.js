const productsContainer = document.querySelector(".parent");
const showMoreBtn = document.querySelector(".btn_load");
const categoriesContainer = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");

const createProductTemplate = (product) => {
    const {id, name, precio, cardImg, category} = product;


    return `
        <div class="card_parent">
            <img src=${cardImg} alt=${name}>
            <div class="fav_filter">
                <i class="fa-regular fa-heart"></i>
                <p>${category}</p>
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
    productsContainer.innerHTML += productsList.map(createProductTemplate)
    .join("");
};

const IsLastIndexOf = () => {
    return appState.currentProductsIndex === appState.productsLimit - 1;
};

const showMoreProducts = () => {
    appState.currentProductsIndex += 1;
    let {product, currentProductsIndex} = appState;
    renderProducts(product[currentProductsIndex]);
    if (IsLastIndexOf()) {
        showMoreBtn.classList.add("hidden");
    }
};

const isInactiveFilterBtn = (element) => {
    return (
        element.classList.contains("category") &&
        !element.classList.contains("active")
    );
};

const changeBtnActiveState = (selectedCategory) => {
    const categories = [...categoriesList];
    categories.forEach((categoryBtn) => {
        if(categoryBtn.dataset.category !== selectedCategory) {
            categoryBtn.classList.remove("active");
            return;
        }
        categoryBtn.classList.add("active");
    });
};

const setShowMoreVisibility = () => {
    if (!appState.activeFilter) {
        showMoreBtn.classList.remove("hidden");
        return;
    }
    showMoreBtn.classList.add("hidden");
}

const chageFilterState = (btn) => {
    appState.activeFilter = btn.dataset.category;
    changeBtnActiveState(appState.activeFilter);
    setShowMoreVisibility();

};

const renderFilteredProducts = () => {
    const filteredProducts = productData.filter((product) => {
        return product.category === appState.activeFilter;
    });
    renderProducts(filteredProducts);
};

const applyFilter = ({target}) => {
    if (!isInactiveFilterBtn(target)) {
        return;
    }
    chageFilterState(target);

    productsContainer.innerHTML = "";
    if(appState.activeFilter) {
        renderFilteredProducts();
        appState.currentProductsIndex = 0;
        return;
    }

    renderProducts(appState.product[0]);

};





const init = () => {
    renderProducts(appState.product[appState.currentProductsIndex]);
    showMoreBtn.addEventListener("click", showMoreProducts);
    categoriesContainer.addEventListener("click", applyFilter);
};

init();