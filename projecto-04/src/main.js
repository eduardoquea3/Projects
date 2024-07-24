let day = document.getElementById("day"),
  month = document.getElementById("month"),
  year = document.getElementById("year");

let inputDay = document.getElementById("num-day"),
  inputMonth = document.getElementById("num-month"),
  inputYear = document.getElementById("num-year");

let btn = document.getElementById("boton");
let mesageDay = document.querySelector(".mesage-day");
let mesageMonth = document.querySelector(".mesage-month");
let mesageYear = document.querySelector(".mesage-year");
let mesage = document.querySelectorAll(".mesage");

const required = "This field is required";
const invalid = {
  dia: "Must be a valid day",
  mes: "Must be a valid month",
  anio: "Must be in the past",
};

const data = {
  yearA: new Date().getFullYear(),
  monthA: new Date().getMonth() + 1,
  dayA: new Date().getDate(),
};

function verifyAll() {
  let state = true;
  if (day.value.trim() === "") {
    mesageDay.innerText = required;
    state = state && false;
  }
  if (month.value.trim() === "") {
    mesageMonth.innerText = required;
    state = state && false;
  }
  if (year.value.trim() === "") {
    mesageYear.innerText = required;
    state = state && false;
  }
  return state;
}

function verifyYear() {
  if (year.value > data.yearA) {
    mesageYear.innerText = invalid.anio;
    return false;
  }
  return true;
}

function verifyMonth() {
  let val_1 = month.value >= 1 && month.value <= 12 && year.value < data.yearA;
  let val_2 =
    month.value >= 1 && month.value <= data.monthA && year.value == data.yearA;
  if (!(val_1 || val_2)) {
    mesageMonth.innerText = invalid.mes;
    return false;
  }
  return true;
}

function verifyDay() {
  let anio = year.value.trim() == "" ? data.yearA : parseInt(year.value);
  let mes = month.value.trim() == "" ? data.monthA : parseInt(month.value);
  if (day.value < 1 || day.value > new Date(anio, mes, 0).getDate()) {
    mesageDay.innerText = invalid.dia;
    return false;
  }
  return true;
}

function calcular() {
  let eYear, eMonth, eDay;
  eYear = data.yearA - parseInt(year.value);

  eMonth = data.monthA - parseInt(month.value);
  if (eMonth < 0) {
    eYear--;
    eMonth += 12;
  }

  eDay = data.dayA - parseInt(day.value);
  if (eDay < 0) {
    if (eMonth == 0) {
      eYear--;
      eMonth = 11;
    } else {
      eMonth--;
    }
    eDay += new Date(data.yearA, data.monthA - 1, 0).getDate();
  }

  inputDay.innerText = eDay;
  inputMonth.innerText = eMonth;
  inputYear.innerText = eYear;
}

function limpiar() {
  inputDay.innerText = "--";
  inputMonth.innerText = "--";
  inputYear.innerText = "--";
}
btn.addEventListener("click", () => {
  mesageDay.innerText = "";
  mesageMonth.innerText = "";
  mesageYear.innerText = "";
  let firstState = verifyAll();
  if (firstState === true) {
    if (verifyYear() && verifyMonth() && verifyDay()) {
      calcular();
    }
  }
});

day.addEventListener("input", () => {
  mesageDay.innerText = "";
  limpiar();
});

month.addEventListener("input", () => {
  mesageMonth.innerText = "";
  limpiar();
});

year.addEventListener("input", () => {
  mesageYear.innerText = "";
  limpiar();
});
