function createHome() {

    const home = document.createElement("div");

    const tagline = document.createElement("h2");
    tagline.textContent = "The best wood fired pizza on earth";

    home.appendChild(tagline);

    return home;
}

function loadHome() {
    const main = document.getElementById('main-content')
    main.textContent = ''
    main.appendChild(createHome())
  }
  
  export default loadHome;