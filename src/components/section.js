import{loadMenu} from "../menu";
import { loadContact } from "../contact";
import { createHeader3 } from "./DOM";
import { createParagraph } from "./DOM";

export function menuSection(){

    //Variables for menu section.
    const content = document.getElementById("content");
    let menu = document.createElement("section");
    let menuWrapper = document.createElement("div");
    menuWrapper.className="menu-wrapper";
    menu.className = "menu-section";
    menu.id = "menu-section";
    
    let imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    let image = document.createElement("img");
    image.src = "../dist/images/pasta.png";

    imageContainer.appendChild(image);

    let textContainer = document.createElement("div");
    textContainer.className = "text-container";
    textContainer.id = "menu-text-container";
    textContainer.appendChild(createHeader3("MENU"));
    textContainer.appendChild(createParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque est sed nulla placerat volutpat. Proin non lorem quis arcu rutrum volutpat ut id orci. Mauris sodales hendrerit purus vel iaculis. Proin volutpat ullamcorper sapien, et tempor augue luctus et. Duis condimentum rhoncus elementum."));
    textContainer.appendChild(createParagraph("Aliquam sit amet ultricies diam. Nullam in mi neque. Nam quis nibh viverra, malesuada massa non, facilisis augue."));

    let btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";
    btnContainer.id = "menu-arrow";
    btnContainer.innerHTML = "FULL MENU &#10230;"

    textContainer.appendChild(btnContainer);
    
    menuWrapper.appendChild(imageContainer);
    menuWrapper.appendChild(textContainer);

    menu.appendChild(menuWrapper);
    content.appendChild(menu);

    btnContainer.addEventListener("click", function(e){
        if(e.target.id==="menu-arrow"){
            content.textContent="";
            window.scroll(0, 0);
            loadMenu();
        }
    })

};

export function reservationSection(){

     //Variables for reservation section.
     const content = document.getElementById("content");
     let reservation = document.createElement("section");
     reservation.className = "reservation-section";
     reservation.id = "reservation-section";
 
     let imageContainer2 = document.createElement("div");
     imageContainer2.className = "image-container";
 
     let image2 = document.createElement("img");
     image2.src = "../dist/images/collage.png";
 
     imageContainer2.appendChild(image2);
 
     let textContainer2 = document.createElement("div");
     textContainer2.className = "text-container";
     textContainer2.appendChild(createHeader3("MAKE A RESERVATION"));
     textContainer2.appendChild(createParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque est sed nulla placerat volutpat. Proin non lorem quis arcu rutrum volutpat ut id orci. Mauris sodales hendrerit purus vel iaculis. Proin volutpat ullamcorper sapien, et tempor augue luctus et. Duis condimentum rhoncus elementum."));
     textContainer2.appendChild(createParagraph("Aliquam sit amet ultricies diam. Nullam in mi neque. Nam quis nibh viverra, malesuada massa non, facilisis augue."));
 
     let btnContainer2 = document.createElement("div");
     btnContainer2.className = "btn-container";
     btnContainer2.id = "reservation-arrow";
     btnContainer2.innerHTML = "LEARN MORE &#10230;"
 
     textContainer2.appendChild(btnContainer2);
 
 
     reservation.appendChild(textContainer2);
     reservation.appendChild(imageContainer2);
 
     content.appendChild(reservation);

     btnContainer2.addEventListener("click", function(e){
        if(e.target.id==="reservation-arrow"){
            content.textContent="";
            loadContact();
        }
    })
}