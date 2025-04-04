import home from "./home";
import menu from "./menu";
import about from "./about";
import "../styles/styles.css"

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");
const content = document.querySelector("#content");

function clearContent() {
  content.innerHTML = "";
}

homeBtn.addEventListener("click", () => {
  clearContent();
  home();
});

menuBtn.addEventListener("click", () => {
  clearContent();
  menu();
});

aboutBtn.addEventListener("click", () => {
  clearContent();
  about();
});

home()
console.log("Hello world");
