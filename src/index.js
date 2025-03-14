import home from "./home.js";
import about from "./about.js";
import contact from "./contact.js";

const homeBtn = document.querySelector("#home");
const contactBtn = document.querySelector("#contact");
const aboutBtn = document.querySelector("#about");

console.log(homeBtn, contactBtn, aboutBtn);

const content = document.querySelector("#content");

content.innerHTML = home();

homeBtn.addEventListener("click", (e) => {
  content.innerHTML = home();
});

contactBtn.addEventListener("click", (e) => {
  content.innerHTML = contact();
});

aboutBtn.addEventListener("click", (e) => {
  content.innerHTML = about();
});
