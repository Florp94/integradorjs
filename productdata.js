const productData = [
    {
        id: 1,
        name:"Bahia de 150Grs",
        precio: 950.00,
        category: "Hilo",
        cardImg: "/assets/imgproducto/_6708af9a-68dd-4aac-ae1d-1c9be616557f.jpg",

    },
    {
        id: 2,
        name:"Olivia de 150Grs",
        precio: 900.00,
        category: "Lana",
        cardImg: "/assets/imgproducto/lanalila.jpg",
    },
    {
        id: 3,
        name:"Carmen de 150Grs",
        precio: 780.00 ,
        category: "Lana",
        cardImg: "/assets/imgproducto/img/lanaspastel.jpg",
    },
    {
        id: 4,
        name:"Agujas Plastico x Unidad",
        precio: 500.00 ,
        category: "Accesorio",
        cardImg: "/assets/imgproducto/img/agujascolores.jpg",
    },
    {
        id: 5,
        name:"Agujas Metal Varios Números + Ovillo  50Grs",
        precio: 800.00 ,
        category: "Combos",
        cardImg: "/assets/imgproducto/img/agujashilo.jpg",
    },
    {
        id: 6,
        name:"Algodon 150 Grs + Tijera + Lapicera + marcador",
        precio: 1000.00 ,
        category: "Combos",
        cardImg: "/assets/imgproducto/img/combovioletatodo.jpg",
    },
    {
        id: 7,
        name:"Alfiletero Artesanal Premium",
        precio: 1500.00 ,
        category: "Accesorio",
        cardImg: "/assets/imgproducto/img/alfileteros.jpg",
    },
    {
        id: 8,
        name:"Buenos Aires de 150Grs algodon fino 8-3",
        precio: 1000.00 ,
        category: "Hilo",
        cardImg: "/assets/imgproducto/img/hilosvarioscol.jpg",
    },
    {
        id: 9,
        name:"Set Crochet Agujas Silicona x 5",
        precio: 3000.00 ,
        category: "Combo",
        cardImg: "/assets/imgproducto/img/comboagujas.jpg",
    },
    {
        id: 10,
        name:"Algodon 8-3 + aguja a elección + tijera",
        precio: 1000.00 ,
        category: "Combo",
        cardImg: "/assets/imgproducto/img/combotijaguhiloblanco.jpg",
    },
];


const divideProductsInParts = (size) => {
    let productsList = [];
    for (let i = 0; i < productData.length; i += size) {
        productsList.push(productData.slice(i, i + size));
    }
      return productsList; 
    };


    const appState = {
        product: divideProductsInParts(6),
        currentProductsIndex: 0,
        productsinit: divideProductsInParts(6).length,
        activeFilter: null,
    };


