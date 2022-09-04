//Imported functions.
import {navbar} from "./components/navbar";
import "./style.css";

export function loadMenu(){

    //Variable for content div.
    const content = document.getElementById("content");

    //Function to create navbar.
    navbar();

    //Variables for menu header.
    let main = document.createElement("main");
    let menuContainer = document.createElement("div");
    let menuHeader = document.createElement("header");
    let logoContainer = document.createElement("div");
    let menuImage = document.createElement("img");
    let menuTitle = document.createElement("h3");
    let menuSubtitle = document.createElement("p");

    menuContainer.className="menu-container";
    logoContainer.className = "logo-container";
    menuImage.src = "../dist/images/logo.png";
    menuTitle.textContent = '"Buon cibo. Buon vino. Buon amici."';
    menuSubtitle.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque est sed nulla placerat volutpat. Proin non lorem quis arcu rutrum volutpat ut id orci.";

    //Append to menu container. 
    menuContainer.appendChild(menuHeader);

    menuHeader.appendChild(logoContainer);
    logoContainer.appendChild(menuImage);
    menuHeader.appendChild(menuTitle);
    menuHeader.appendChild(menuSubtitle);

    //Variables for pasta section of menu.
    let pastaSection = document.createElement("article");
    let pastaTitle = document.createElement("div");
    let pastaContainer = document.createElement("div");
    pastaTitle.className = "section-title";
    pastaTitle.textContent = "PASTA";
    pastaContainer.className = "section-container";

    
let pasta = [];

function Item(title, price, description){
    this.title = title;
    this.price = price;
    this.description = description;
};

const pasta1 = new Item(
    "FETTUCCINE",
    "15",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
);
const pasta2 = new Item(
    "BOLOGNESE",
    "13",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
);
const pasta3 = new Item(
    "CACIO E PEPE",
    "13",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
);
const pasta4 = new Item(
    "RAVIOLI",
    "12",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
);
const pasta5 = new Item(
    "LASAGNA",
    "15",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
);

function addPastaToArray(){
    pasta.push(pasta1, pasta2, pasta3, pasta4, pasta5);
    console.log(pasta);
};
addPastaToArray();

function createPasta(){
    let i;
    for(i = 0; i < pasta.length; i++){

        let item = document.createElement("div");
        let itemHeader = document.createElement("div");
        let itemDescription = document.createElement("p");
        let itemTitle = document.createElement("h5");
        let itemPrice = document.createElement("div");
    
        item.className = "item";
        itemHeader.className = "item-header";
        itemDescription.className = "item-description";
        itemTitle.className = "item-title";
        itemPrice.className = "item-price";
    
        itemTitle.textContent = pasta[i].title;
        itemPrice.textContent = pasta[i].price;
        itemDescription.textContent = pasta[i].description;
    
        item.appendChild(itemHeader);
        itemHeader.appendChild(itemTitle);
        itemHeader.appendChild(itemPrice);
        item.appendChild(itemDescription);
    
        pastaContainer.appendChild(item);
    }

};
createPasta();

    pastaSection.appendChild(pastaTitle);
    pastaSection.appendChild(pastaContainer);

    //Variables for pizza section of menu.
    let pizzaSection = document.createElement("article");
    let pizzaTitle = document.createElement("div");
    let pizzaContainer = document.createElement("div");
    pizzaContainer.className = "section-container";
    pizzaTitle.className = "section-title";
    pizzaTitle.textContent = "PIZZA";
    pizzaContainer.className = "section-container";

    let pizza = [];

function Item(title, price, description){
    this.title = title;
    this.price = price;
    this.description = description;
};

const pizza1 = new Item(
    "MARGHERITA",
    "15",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
);
const pizza2 = new Item(
    "PEPPERONI",
    "13",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
);
const pizza3 = new Item(
    "PROSCIUTTO",
    "13",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
);
const pizza4 = new Item(
    "FORMAGGI",
    "12",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
);
const pizza5 = new Item(
    "MARINARA",
    "15",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
);

function addPizzaToArray(){
    pizza.push(pizza1, pizza2, pizza3, pizza4, pizza5);
    console.log(pizza);
};
addPizzaToArray();

 function createPizza(){
    let i;
    for(i = 0; i < pizza.length; i++){

        let item = document.createElement("div");
        let itemHeader = document.createElement("div");
        let itemDescription = document.createElement("p");
        let itemTitle = document.createElement("h5");
        let itemPrice = document.createElement("div");
    
        item.className = "item";
        itemHeader.className = "item-header";
        itemDescription.className = "item-description";
        itemTitle.className = "item-title";
        itemPrice.className = "item-price";
    
        itemTitle.textContent = pizza[i].title;
        itemPrice.textContent = pizza[i].price;
        itemDescription.textContent = pizza[i].description;
    
        item.appendChild(itemHeader);
        itemHeader.appendChild(itemTitle);
        itemHeader.appendChild(itemPrice);
        item.appendChild(itemDescription);
    
        pizzaContainer.appendChild(item);
    }

};
createPizza();



    pizzaSection.appendChild(pizzaTitle);
    pizzaSection.appendChild(pizzaContainer);

    //Variables for dessert section of menu.
    let dessertSection = document.createElement("article");
    let dessertTitle = document.createElement("div");
    let dessertContainer = document.createElement("div");
    dessertTitle.className = "section-title";
    dessertTitle.textContent = "DESSERT";
    dessertContainer.className = "section-container";
    dessertContainer.classList = "section-container dessert"

    let dessert = [];

    function Item(title, price, description){
        this.title = title;
        this.price = price;
        this.description = description;
    };
    
    const dessert1 = new Item(
        "CANNOLI",
        "15",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    );
    const dessert2 = new Item(
        "TIRAMISU",
        "13",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    );
    const dessert3 = new Item(
        "BISCOTTI",
        "13",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    );
    
    function addDessertToArray(){
        dessert.push(dessert1, dessert2, dessert3);
        console.log(dessert);
    };
    addDessertToArray();
    
     function createDessert(){
        let i;
        for(i = 0; i < dessert.length; i++){
    
            let item = document.createElement("div");
            let itemHeader = document.createElement("div");
            let itemDescription = document.createElement("p");
            let itemTitle = document.createElement("h5");
            let itemPrice = document.createElement("div");
        
            item.className = "item";
            itemHeader.className = "item-header";
            itemDescription.className = "item-description";
            itemTitle.className = "item-title";
            itemPrice.className = "item-price";
        
            itemTitle.textContent = dessert[i].title;
            itemPrice.textContent = dessert[i].price;
            itemDescription.textContent = dessert[i].description;
        
            item.appendChild(itemHeader);
            itemHeader.appendChild(itemTitle);
            itemHeader.appendChild(itemPrice);
            item.appendChild(itemDescription);
        
            dessertContainer.appendChild(item);
        }
    
    };
    createDessert();
    

    dessertSection.appendChild(dessertTitle);
    dessertSection.appendChild(dessertContainer);

    //Append elements to the DOM.
    content.appendChild(main);
    main.appendChild(menuContainer);
    menuContainer.appendChild(pastaSection);
    menuContainer.appendChild(pizzaSection);
    menuContainer.appendChild(dessertSection);
};

