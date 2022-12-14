//Imported functions.
import {navbar} from "./components/navbar";
import "./style.css";


export function loadContact(){

    //Variable for content div.
    const content = document.getElementById("content");

    //Function to create navbar.
    navbar();

    //Variables for contact form header.
    let contactHeader = document.createElement("h2");
    contactHeader.className = "contact-header";
    contactHeader.textContent = "CONTACT US";

    let contactSubHeader = document.createElement("p");
    contactSubHeader.className = "contact-subheader";
    contactSubHeader.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque est sed nulla placerat volutpat. Proin non lorem quis arcu rutrum volutpat ut id orci. Duis condimentum rhoncus elementum.";

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

    //Attributes for form inputs.
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Full name:"
    name.setAttribute("type", "text");
    name.id = "name";

    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email:"
    email.setAttribute("type", "email");
    email.id = "email";

    subjectLabel.setAttribute("for", "subject");
    subjectLabel.textContent = "Subject:"
    subject.setAttribute("type", "text");
    subject.id = "subject";

    messageLabel.setAttribute("for", "message");
    messageLabel.textContent = "Message:"
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

    //Append form to container.
    contactContainer.appendChild(form);

    //Append contact headers to DOM.
    content.appendChild(contactHeader);
    content.appendChild(contactSubHeader);
    content.appendChild(contactContainer);

};
