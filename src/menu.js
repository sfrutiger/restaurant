function createMenu() {

    const menu = document.createElement("div");

    menu.appendChild(
        createMenuItem (
            "Margherita",
            "Tomata sauce, fresh mozzarella, basil",
            "9"
        )
    );

    menu.appendChild(
        createMenuItem (
            "Sausage",
            "Tomato sauce, fresh mozzarella, hot italian sausage, roasted red pepper",
            "12"
        )
    );

    menu.appendChild(
        createMenuItem (
            "Mushroom and onion",
            "Olive oil, fresh mozzarella, sliced portabella mushrooms, carmelized onions",
            "11"
        )
    );

    menu.appendChild(
        createMenuItem (
            "Little Thomas' favorite",
            "Tomata sauce, fresh mozzarella, hot italian sausage, pepperoni, banana peppers, tomato slices",
            "13"
        )
    );

    return menu;
}

function createMenuItem (name, description, price) {

    const menuItem = document.createElement("div");

    const itemName = document.createElement("h3");
    itemName.textContent = name;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;

    const itemPrice = document.createElement("p");
    itemPrice.textContent = "$" + price;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPrice);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById('main-content')
    main.textContent = ''
    main.appendChild(createMenu())
  }
  
  export default loadMenu;