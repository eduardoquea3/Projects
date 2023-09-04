import { addChar, updateChar, result } from "./logica.js";

let theme1 = document.querySelector(".t1");
let theme2 = document.querySelector(".t2");
let theme3 = document.querySelector(".t3");

theme1.addEventListener("click", () => {
  document.getElementById("toggle").style.left = "4px";
  document.querySelector("body").setAttribute("theme", "theme1");
  localStorage.setItem("theme", "theme1");
});
theme2.addEventListener("click", () => {
  document.getElementById("toggle").style.left = "28px";
  document.querySelector("body").setAttribute("theme", "theme2");
  localStorage.setItem("theme", "theme2");
});
theme3.addEventListener("click", () => {
  document.getElementById("toggle").style.left = "52px";
  document.querySelector("body").setAttribute("theme", "theme3");
  localStorage.setItem("theme", "theme3");
});

let char = document.querySelectorAll(".char");
let input = document.querySelector(".display");
let igual = document.querySelector(".igual");

char.forEach((num) => {
  num.addEventListener("click", () => {
    input.value = addChar(num.textContent, input.value);
  });
});

document.querySelector(".del").addEventListener("click", () => {
  input.value = updateChar(input.value);
});

document.querySelector(".reset").addEventListener("click", () => {
  input.value = "0";
});

igual.addEventListener("click", () => {
  input.value = result(input.value);
});

window.addEventListener("keydown", (e) => {
  let operator = /[+\-/x]/;
  let num = /^[0-9]$/;
  if (operator.test(e.key) || num.test(e.key) || e.key == ".") {
    input.value = addChar(e.key, input.value);
  } else if (e.key == "Backspace" || e.key == " " || e.key == "Escape") {
    input.value =
      e.key == "Backspace"
        ? updateChar("<", input.value)
        : updateChar("RESET", input.value);
  } else if (e.key == "Enter") {
    input.value = result(input.value);
  }
});
