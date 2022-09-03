//Imported functions.
import {homeNavbar} from "../src/components/homeNavbar";
import {createHeader2} from "../src/components/DOM";
import {createParagraph} from "../src/components/DOM";
import {createHeader5} from "../src/components/DOM";
import {createListElements} from "../src/components/DOM";
import {menuSection} from "../src/components/section";
import {reservationSection} from "../src/components/section";

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
    
    homeNavbar();
    hero.appendChild(logo);

    //Variables for about section.
    let about = document.createElement("section");

    about.className = "about-section";
    about.id = "about-section";
    about.appendChild(createHeader2('"Buon cibo. Buon vino. Buon amici."'));
    about.appendChild(createParagraph("Good food. Good wine. Good friends. The atmosphere of Italy dictates the mood at Brocelle. We offer you not only the best italian dishes, but also the ambiance, interior, and music that will transform an average night to one under the stars of Italy."));
    content.appendChild(about);

    //Function for menu section.
    menuSection();

    //Variables for reservation section.
    reservationSection();

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
};






