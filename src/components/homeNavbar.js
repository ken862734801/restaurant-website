import {loadHome} from "../home";
import {loadContact} from "../contact";
import {loadMenu} from "../menu";

//Function to create navbar for the home page.
export function homeNavbar(){
    const content = document.getElementById("content");
    const heroSection = document.getElementById("hero-section");

    function createNavList(text){
        const li = document.createElement("li");
        li.textContent = text;
        li.id = text;
        li.className = "navigation-tabs";
    
        return li;
    };

    let nav = document.createElement("nav");
    let navbar = document.createElement("navbar");

    nav.appendChild(navbar);
    navbar.appendChild(createNavList("Home"));
    navbar.appendChild(createNavList("Menu"));
    navbar.appendChild(createNavList("Contact"));

    //Append nav to hero section. Same area with the logo.
    heroSection.appendChild(nav);

    //Navigation variables and functions.
    let menuBtn = document.getElementById("Menu");
    let homeBtn = document.getElementById("Home");
    let contactBtn = document.getElementById("Contact");

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
}