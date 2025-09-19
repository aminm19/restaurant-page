import "./styles.css";
import { loadMainPage } from "./mainPage.js";
import { loadMenuPage } from "./menuPage.js";
import { loadContactPage } from "./contactPage.js";

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");

// Load main page by default when the page loads
loadMainPage();

homeBtn.addEventListener("click", () => {
   loadMainPage();
});
menuBtn.addEventListener("click", () => {
   loadMenuPage();
});
aboutBtn.addEventListener("click", () => {
   loadContactPage();
});