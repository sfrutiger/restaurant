function createContact() {

    const contactInfo = document.createElement("div");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "555 555-5555";

    const email = document.createElement("p");
    email.textContent = "thomas@littlethomaspizza.com"

    contactInfo.appendChild(phoneNumber);
    contactInfo.appendChild(email);


    return contactInfo;
}

function loadContact() {
    const main = document.getElementById('main-content')
    main.textContent = ''
    main.appendChild(createContact())
  }
  
  export default loadContact;