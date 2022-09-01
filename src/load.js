export function heroNavbar(){
    const heroSection = document.getElementById("hero-section");

    function createNavList(text){
        const li = document.createElement("li");
        li.textContent = text;
        li.id = text;
    
        return li;
    };

    let nav = document.createElement("nav");
    let navbar = document.createElement("navbar");

    nav.appendChild(navbar);
    navbar.appendChild(createNavList("Home"));
    navbar.appendChild(createNavList("Menu"));
    navbar.appendChild(createNavList("Contact"));

    heroSection.appendChild(nav);

}
//Functions to create DOM text elements.

export function createParagraph(text){
    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    return paragraph;
};

export function createHeader2(text){
    const H2 = document.createElement("h2");
    H2.textContent = text;

    return H2;
};
export function createHeader3(text){
    const H3 = document.createElement("h3");
    H3.textContent = text;

    return H3;
};
export function createHeader5(text){
    const H5 = document.createElement("h5");
    H5.textContent = text;

    return H5;
};

export function createListElements(text){
    const li = document.createElement("li");
    li.textContent = text;

    return li;
};