function createHeader() {

    const header = document.createElement("header");

    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Little Thomas' Pizza";

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
}

function createNav() {

    const nav = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.setAttribute("id", "home-button");

    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.setAttribute("id", "menu-button");

    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.setAttribute("id", "contact-button");
    
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function createMain() {

    const mainContent = document.createElement("div");
    mainContent.setAttribute("id", "main-content");

    return mainContent;
}


/* function createFooter() {
    const footer = document.createElement("footer");

    const credit = document.createElement("h3");
    credit.textContent = "created by Seth Frutiger"

    footer.appendChild(credit);

    return footer;
} */


//append all created sections
function createPage() {
    const content = document.getElementById("content");
    
    content.appendChild(createHeader());
    content.appendChild(createMain());
    /* content.appendChild(createFooter()); */

}

export default createPage;