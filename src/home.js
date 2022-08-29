export default function loadHome(){

    const content = document.getElementById("content");

    //Variables for header section.
    let header = document.createElement("section");
    let nav = document.createElement("nav");
    let navbar = document.createElement("navbar");
    let logo = document.createElement("img");

    header.className = "header";
    header.appendChild(nav);
    header.appendChild(logo);

    nav.appendChild(navbar);
    navbar.appendChild(createNavList("Home"));
    navbar.appendChild(createNavList("Menu"));
    navbar.appendChild(createNavList("Contact"));
    logo.src = "./images/logo.png";

    //Variables for about section.
    let about = document.createElement("section");
    about.className = "about";
    about.appendChild(createHeader2("Buon cibo. Buon vino. Buon amici."));
    about.appendChild(createParagraph("Good food. Good wine. Good friends. The atmosphere of Italy dictates the mood at Brocelle. We offer you not only the best italian dishes, but also the ambiance, interior, and music that willtransform an average night to one under the stars of Italy."));

    //Variables for menu section.
    let menu = document.createElement("section");
    let imageContainer = document.createElement("div");
    let textContainer = document.createElement("div");
    let image = document.createElement("img");
    let btnContainer = document.createElement("div");

    imageContainer.className = "image-container";
    imageContainer.appendChild(image);
    image.src="./images/pasta.png";

    textContainer.className = "text-container";
    textContainer.appendChild(createParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque est sed nulla placerat volutpat.Proin non lorem quis arcu rutrum volutpat ut id orci.Mauris sodales hendrerit purus vel iaculis.Proin volutpat ullamcorper sapien, et tempor augue luctus et.Duis condimentum rhoncus elementum. Aliquam sit amet ultricies diam. Nullam in mi neque. Nam quis nibh viverra, malesuada massa non, facilisis augue."))

    btnContainer.className = "btn-container";
    btnContainer.textContent = "FULL MENU &#10230;"

    menu.className = "menu-section";
    menu.appendChild(textContainer);
    menu.appendChild(imageContainer);

    textContainer.appendChild("btn-container");

    //Variables for reservation section.
    let reservation = document.createElement("section");
    let imageContainer2 = document.createElement("div");
    let textContainer2 = document.createElement("div");
    let image2 = document.createElement("img");
    let btnContainer2 = document.createElement("div");

    imageContainer2.className = "image-container";
    imageContainer2.appendChild(image2);
    image2.src="./images/collage.png";

    textContainer2.className = "text-container";
    textContainer2.appendChild(createParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque est sed nulla placerat volutpat.Proin non lorem quis arcu rutrum volutpat ut id orci.Mauris sodales hendrerit purus vel iaculis.Proin volutpat ullamcorper sapien, et tempor augue luctus et.Duis condimentum rhoncus elementum. Aliquam sit amet ultricies diam. Nullam in mi neque. Nam quis nibh viverra, malesuada massa non, facilisis augue."))

    btnContainer2.className = "btn-container";
    btnContainer2.textContent = "LEARN MORE &#10230;"

    reservation.className = "reservation-section";
    reservation.appendChild(imageContainer2);
    reservation.appendChild(textContainer2);

    //Variables for information section.
    let info = document.createElement("section");
    let locationContainer = document.createElement("div");
    let hoursContainer = document.createElement("div");
    let number = document.createElement("p");
    number.textContent = "202-555-0170";
    number.className = "number";

    locationContainer.className = "location-container";
    locationContainer.appendChild(createHeader5("WHERE TO FIND US"));
    locationContainer.appendChild(createParagraph("125 Timber Ridge Road, Alexandria, CA 12345, USA"));

    locationContainer.appendChild(createHeader5("RESERVATIONS"));
    locationContainer.appendChild(number);

    hoursContainer.className = "hours-container";
    hoursContainer.appendChild(createHeader5("HOURS OF OPERATION"));
    hoursContainer.appendChild(createListElements("Monday: 11am - 9pm"));
    hoursContainer.appendChild(createListElements("Tuesday: 11am - 9pm"));
    hoursContainer.appendChild(createListElements("Wednesday: 11am - 9pm"));
    hoursContainer.appendChild(createListElements("Thursday: 11am - 9pm"));
    hoursContainer.appendChild(createListElements("Friday: 11am - 10pm"));
    hoursContainer.appendChild(createListElements("Saturday: 5pm - 11pm"));
    hoursContainer.appendChild(createListElements("Sunday: Closed"));

    info.className = "information";
    info.appendChild(locationContainer);
    info.appendChild(hoursContainer);

    //Append elements to the DOM.
    content.appendChild(header);
    content.appendChild(about);
    content.appendChild(menu);
    content.appendChild(reservation);
    content.appendChild(info);
};

//Function to create DOM text elements.

function createParagraph(text){
    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    return paragraph;
};

function createHeader2(text){
    const H2 = document.createElement("h2");
    H2.textContent = text;

    return H2;
};

function createHeader5(text){
    const H5 = document.createElement("h5");
    H5.textContent = text;

    return H5;
};

function createNavList(text){
    const li = document.createElement("li");
    li.textContent = text;
    li.id = text;

    return li;
};
function createListElements(text){
    const li = document.createElement("li");
    li.textContent = text;

    return li;
};
