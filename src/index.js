//import modules
import createPage from "./create-page";
import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";

//create initial page
createPage();
loadHome();

//create constants
const contactButton = document.querySelector("#contact-button");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");

//change content on button click
contactButton.addEventListener("click", function() {
    loadContact()});

homeButton.addEventListener("click", function() {
    loadHome()});

menuButton.addEventListener("click", function() {
    loadMenu()});