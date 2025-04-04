import menu from "./menu";
import "../styles/home.css"

export default function home() {
  const content = document.querySelector("#content");

  const hero = document.createElement("div");
  hero.classList.add("hero");
  const title = document.createElement("h1");
  title.textContent = "BOBBY'S BBQ";

  hero.appendChild(title);
  content.appendChild(hero);

  const summary = document.createElement("div");
  summary.classList.add("summary");
  const summaryTitle = document.createElement("h3");
  summaryTitle.textContent = "Best BBQ spot since 2009";
  const summaryText = document.createElement("p");
  summaryText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis interdum leo et auctor. Donec accumsan eleifend lectus. Duis condimentum aliquam mollis. Aliquam pharetra nunc et mi congue congue. Quisque ac velit orci. Aenean viverra lacinia enim et varius. Vestibulum risus felis, porttitor et suscipit eu, tincidunt non purus. Maecenas facilisis mi at porttitor cursus. Duis ultricies nulla in sapien sodales ornare. Mauris condimentum mi sit amet imperdiet tincidunt. Quisque ipsum justo, aliquet mollis velit eget, iaculis vehicula augue. Etiam venenatis bibendum nibh, a euismod felis tincidunt ac. Sed nec volutpat mi. Fusce sagittis consectetur magna sit amet vehicula. Phasellus fringilla dolor enim, vitae viverra tellus tempor suscipit. Nullam vel nisi condimentum, pharetra elit eget, pellentesque lectus.`;

  summary.appendChild(summaryTitle);
  summary.appendChild(summaryText);
  content.appendChild(summary);

  const menuSummary = document.createElement("div");
  menuSummary.classList.add("menu-summary");
  const menuSummaryText = document.createElement("p");
  menuSummaryText.textContent = `We strive to bring the freshest ingredients cooked to perfection to your table`;
  const menuButton = document.createElement("button");
  menuButton.classList.add("menu-btn");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", () => {
    menu();
  });

  menuSummary.appendChild(menuSummaryText);
  menuSummary.appendChild(menuButton);
  content.appendChild(menuSummary);
}
