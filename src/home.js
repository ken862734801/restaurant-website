import {heroNavbar} from "./load";
import {createHeader2 } from "./load";
import { createHeader3 } from "./load";
import {createParagraph} from "./load";
import { createHeader5 } from "./load";
import { createListElements } from "./load";

export function loadHome(){

    //Variable for content div.
    const content = document.getElementById("content");

    //Variables for header section.
    let hero = document.createElement("section");
    

    let logo = document.createElement("img");

    hero.className = "hero-section";
    hero.id = "hero-section";
    logo.src = "../dist/images/logo.png";

    content.appendChild(hero);
    
    heroNavbar();
    hero.appendChild(logo);

    //Variables for about section.
    let about = document.createElement("section");

    about.className = "about-section";
    about.id = "about-section";
    about.appendChild(createHeader2('"Buon cibo. Buon vino. Buon amici."'));
    about.appendChild(createParagraph("Good food. Good wine. Good friends. The atmosphere of Italy dictates the mood at Brocelle. We offer you not only the best italian dishes, but also the ambiance, interior, and music that will transform an average night to one under the stars of Italy."));
    content.appendChild(about);

    //Variables for menu section.
    let menu = document.createElement("section");
    menu.className = "menu-section";
    menu.id = "menu-section";
    
    let imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    let image = document.createElement("img");
    image.src = "../dist/images/pasta.png";

    imageContainer.appendChild(image);

    let textContainer = document.createElement("div");
    textContainer.className = "text-container";
    textContainer.appendChild(createHeader3("MENU"));
    textContainer.appendChild(createParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque est sed nulla placerat volutpat. Proin non lorem quis arcu rutrum volutpat ut id orci. Mauris sodales hendrerit purus vel iaculis. Proin volutpat ullamcorper sapien, et tempor augue luctus et. Duis condimentum rhoncus elementum."));
    textContainer.appendChild(createParagraph("Aliquam sit amet ultricies diam. Nullam in mi neque. Nam quis nibh viverra, malesuada massa non, facilisis augue."));

    let btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";
    btnContainer.appendChild(createParagraph("FULL MENU"));

    textContainer.appendChild(btnContainer);
    
    menu.appendChild(imageContainer);
    menu.appendChild(textContainer);
    content.appendChild(menu);

    //Variables for reservation section.
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
    btnContainer2.appendChild(createParagraph("LEARN MORE"));

    textContainer2.appendChild(btnContainer2);


    reservation.appendChild(textContainer2);
    reservation.appendChild(imageContainer2);

    content.appendChild(reservation);

    //Variables for information section.
    let information = document.createElement("div");
    information.className = "information-section";
    information.id = "information-section";

    let locationContainer = document.createElement("div");
    locationContainer.className = "location-container";

    let number = document.createElement("p");
    number.className="number";
    number.textContent = "202-555-0170";

    let hoursContainer = document.createElement("div");
    hoursContainer.className = "hours-container";


    locationContainer.appendChild(createHeader5("WHERE TO FIND US"));
    locationContainer.appendChild(createParagraph("125 Timber Ridge Road, Alexandria, CA 12345, USA"));

    locationContainer.appendChild(createHeader5("RESERVATIONS"));
    locationContainer.appendChild(number);

    hoursContainer.appendChild(createHeader5("HOURS OF OPERATION"));
    hoursContainer.appendChild(createListElements("Monday: 11am - 9pm"));
    hoursContainer.appendChild(createListElements("Tuesday: 11am - 9pm"));
    hoursContainer.appendChild(createListElements("Wednesday: 11am - 9pm"));
    hoursContainer.appendChild(createListElements("Thursday: 11am - 9pm"));
    hoursContainer.appendChild(createListElements("Friday: 11am - 10pm"));
    hoursContainer.appendChild(createListElements("Saturday: 5pm - 11pm"));
    hoursContainer.appendChild(createListElements("Sunday: Closed"));

    information.appendChild(locationContainer);
    information.appendChild(hoursContainer);

    content.appendChild(information);
}

