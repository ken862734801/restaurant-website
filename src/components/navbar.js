export function navbar(){
    const content = document.getElementById("content");

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

    content.appendChild(nav);

}
