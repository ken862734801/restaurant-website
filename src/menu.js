export default function loadMenu(){

    //Variable for content div.
    const content = document.getElementById("content");

    //Variables for menu header.
    let menuContainer = document.createElement("div");
    let menuHeader = document.createElement("header");
    let logoContainer = document.createElement("div");
    let menuImage = document.createElement("img");
    let menuTitle = document.createElement("h3");
    let menuSubtitle = document.createElement("p");

    menuContainer.className="menu-container";
    logoContainer.className = "logo-container";
    menuImage.src = "./images/logo.png";
    menuTitle.textContent = "Buon cibo. Buon vino. Buon amici.";
    menuSubtitle.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque est sed nulla placerat volutpat. Proin non lorem quis arcu rutrum volutpat ut id orci.";

    //Append to menu container. 
    menuContainer.appendChild(menuHeader);

    menuHeader.appendChild(logoContainer);
    menuHeader.appendChild(menuImage);
    menuHeader.appendChild(menuTitle);
    menuHeader.appendChild(menuSubtitle);

    //Variables for pasta section of menu.
    let pastaSection = document.createElement("article");
    let pastaTitle = document.createElement("div");
    let pastaContainer = document.createElement("div");
    pastaTitle.className = "section-title";
    pastaTitle.textContent = "PASTA";
    pastaContainer.className = "section-container";

    pastaContainer.appendChild(createItem("FETTUCCINE"));
    pastaContainer.appendChild(createItem("BOLOGNESE"));
    pastaContainer.appendChild(createItem("CACIO E PEPE"));
    pastaContainer.appendChild(createItem("RAVIOLI"));
    pastaContainer.appendChild(createItem("LASAGNA"));

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

    pastaContainer.appendChild(createItem("MARGHERITA"));
    pastaContainer.appendChild(createItem("PEPPERONI"));
    pastaContainer.appendChild(createItem("PROSCIUTTO"));
    pastaContainer.appendChild(createItem("FORMAGGI"));
    pastaContainer.appendChild(createItem("MARINARA"));

    pizzaSection.appendChild(pizzaTitle);
    pizzaSection.appendChild(pizzaContainer);

    //Variables for dessert section of menu.
    let dessertSection = document.createElement("article");
    let dessertTitle = document.createElement("div");
    let dessertContainer = document.createElement("div");
    dessertContainer.className = "section-container";
    dessertTitle.className = "section-title";
    dessertTitle.textContent = "DESSERT";
    dessertContainer.className = "section-container";

    dessertContainer.appendChild(createItem("CANNOLI"));
    dessertContainer.appendChild(createItem("TIRAMISU"));
    dessertContainer.appendChild(createItem("PANNA COTTA"));

    dessertSection.appendChild(dessertTitle);
    dessertSection.appendChild(dessertContainer);

    //Append elements to the DOM.
    content.appendChild(menuContainer);
    menuContainer.appendChild(pastaSection);
    menuContainer.appendChild(pizzaSection);
    menuContainer.appendChild(dessertSection);

};

function createItem(text){
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

    itemTitle.textContent = text;
    itemPrice.textContent = "15";
    itemDescription.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

};
