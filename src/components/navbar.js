import {loadHome} from "../home";
import {loadContact} from "../contact";
import {loadMenu} from "../menu";

//Function to create Navbar for menu and contact page!
export function navbar(){

    //Variable for the content container.
    const content = document.getElementById("content");

    //Function to create list elements.
    function createNavList(text){
        const li = document.createElement("li");
        li.textContent = text;
        li.id = text;
        li.className = "navigation-tabs";
    
        return li;
    };

    //Nav and navbar variables.
    let nav = document.createElement("nav");
    let navbar = document.createElement("navbar");

    nav.appendChild(navbar);
    navbar.appendChild(createNavList("Home"));
    navbar.appendChild(createNavList("Menu"));
    navbar.appendChild(createNavList("Contact"));

    content.appendChild(nav);

    //Add page navigation to navbar list elements.
    let menuBtn = document.getElementById("Menu");
    let homeBtn = document.getElementById("Home");
    let contactBtn = document.getElementById("Contact")

    menuBtn.addEventListener("click", function(e){
        if(e.target.id==="Menu"){
            content.textContent="";
            loadMenu();
        }
    });
    homeBtn.addEventListener("click", function(e){
        if(e.target.id==="Home"){
            content.textContent="";
            loadHome();
        }
    });
    contactBtn.addEventListener("click", function(e){
        if(e.target.id==="Contact"){
            content.textContent="";
            loadContact();
        }
    });

};