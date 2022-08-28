//Global function.
const content = document.getElementById("content");

//Function to create DOM text elements.

function createNavList(text){
    const li = document.createElement("li");
    li.textContent = text;
    li.id = text;

    return li;
};

//Function to create contact page.

function createContact(){
    //Variables for header.
    let header = document.createElement("section");
    let nav = document.createElement("nav");
    let navbar = document.createElement("navbar");

    header.className = "header";
    header.appendChild(nav);

    nav.appendChild(navbar);
    navbar.appendChild(createNavList("Home"));
    navbar.appendChild(createNavList("Menu"));
    navbar.appendChild(createNavList("Contact"));

    //Variables for contact header.
    let contactHeader = document.createElement("h2");
    contactHeader.className = "contact-header";
    contactHeader.textContent = "CONTACT US";
    

    let contactSubHeader = document.createElement("p");
    contactSubHeader.className = "contact-subheader";
    contactSubHeader.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque est sed nulla placerat volutpat.Proin non lorem quis arcu rutrum volutpat ut id orci. Duis condimentum rhoncus elementum.";

    
    //Variables for contact form.
    let contactContainer = document.createElement("div");
    contactContainer.className = "contact-container";

    let form = document.createElement("form");

    let nameLabel = document.createElement("label");
    let name = document.createElement("input");

    let emailLabel = document.createElement("label");
    let email = document.createElement("input");

    let subjectLabel = document.createElement("label");
    let subject = document.createElement("input");

    let messageLabel = document.createElement("label");
    let message = document.createElement("textarea")

    let buttonContainer = document.createElement("div");
    let submit = document.createElement("input");
  
    nameLabel.setAttribute("for", "name");
    name.setAttribute("type", "text");
    name.id = "name";

    emailLabel.setAttribute("for", "email");
    email.setAttribute("type", "email");
    email.id = "email";

    subjectLabel.setAttribute("for", "subject");
    subject.setAttribute("type", "text");
    subject.id = "subject";

    messageLabel.setAttribute("for", "message");
    message.id = "message";

    submit.setAttribute("type", "submit");
    submit.id = "submit";

    buttonContainer.className = "button-container";
    buttonContainer.appendChild(submit);

    //Append elements to form.
    form.appendChild(nameLabel);
    form.appendChild(name);
    form.appendChild(emailLabel);
    form.appendChild(email);
    form.appendChild(subjectLabel);
    form.appendChild(subject);
    form.appendChild(messageLabel);
    form.appendChild(message);
    form.appendChild(buttonContainer);

};
createContact();

