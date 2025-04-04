import "../styles/menu.css"
import brisketImg from "../assets/images/beef-brisket.jpg"
import chickenImg from "../assets/images/chicken.jpg"
import hamburgerImg from "../assets/images/hamburger.jpg"
import pizzaImg from "../assets/images/pizza.jpg"
import slidersImg from "../assets/images/sliders.jpg"
import steakImg from "../assets/images/steak.jpg"

class MenuItem {
  constructor(name, description, image, price) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
  }

  createMenuCard() {
    const menuCard = document.createElement("div");

    const cardTitle = document.createElement("h4");
    cardTitle.textContent = this.name;
    menuCard.appendChild(cardTitle);

    const cardImage = document.createElement("img");
    cardImage.src = this.image;
    cardImage.alt = this.name;
    menuCard.appendChild(cardImage);

    const cardDescription = document.createElement("p");
    cardDescription.textContent = this.description;
    menuCard.appendChild(cardDescription);

    const cardPrice = document.createElement("p");
    cardPrice.textContent = `R${this.price}.00`;
    menuCard.appendChild(cardPrice);

    return menuCard;
  }
}

const menuItems = [
  new MenuItem(
    "Hamburger",
    "200g beef patty served on a bun with lettuce, tomato and our famous bbq sauce, served with chips",
    hamburgerImg,
    80
  ),
  new MenuItem(
    "Chicken Thighs",
    "400g of chicken thighs slow cooked and based with a lemon and herb butter, served with a small salad",
    chickenImg,
    80
  ),
  new MenuItem(
    "Beef Brisket",
    "500g of beef brisket slow cooked for 24 hours, served with your choice of veggies",
    brisketImg,
    120
  ),
  new MenuItem(
    "Meaty Pizza",
    "Pizza served with mozzerella, tomato sauces, steak, bacon and bbq sauce",
    pizzaImg,
    110
  ),
  new MenuItem(
    "Sliders",
    "a platter of beef sliders, perfect for sharing",
    slidersImg,
    150
  ),
  new MenuItem(
    "Steak",
    "600g rump steak cooked to your specifications, served with a side of chips or veggies",
    steakImg,
    160
  ),
];

export default function menu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Menu";
  content.appendChild(title);

  const menu = document.createElement("div");
  menu.classList.add("menu")

  menuItems.forEach((item) => {
    const card = item.createMenuCard();
    card.classList.add("menu-card")
    menu.appendChild(card);
  });

  content.appendChild(menu);
}
