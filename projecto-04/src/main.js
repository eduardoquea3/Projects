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
let enlaze = [
  [day, month, year],
  [mesageDay, mesageMonth, mesageYear],
];

const invalid = "Must be a valid day",
  required = "This field is required";

let regex = /^[0-9]{0,2}$/,
  years = /^[0-3]{1,1}[0-9]{3,3}$/;

day.addEventListener("input", () => {
  if (regex.test(day.value) && day.value.length <= 2) {
    return day.value;
  } else day.value = day.value.slice(0, 2);
});

month.addEventListener("input", () => {
  if (regex.test(month.value) && month.value.length <= 2) {
    return month.value;
  } else month.value = month.value.slice(0, 2);
});
year.addEventListener("input", () => {
  if (years.test(year.value) && year.value.length <= 4) {
    return year.value;
  } else year.value = year.value.slice(0, 4);
});

btn.addEventListener("click", () => {
  let dia, mes, anio;
  (dia = day.value), (mes = month.value), (anio = year.value);
  let resultado =
    vacio(dia, mesageDay) && vacio(mes, mesageMonth) && vacio(anio, mesageYear);
  verificar(dia, mes, anio);
});

const vacio = (ele, men) => {
  if (ele == "") {
    men.innerText = required;
    return false;
  } else {
    men.innerText = "";
    return true;
  }
};

const verificar = (d, m, y) => {
  let verify = true;
  let quanty;
  let date = new Date();
  m--;
  m < 12 && m >= 0 ? verify : (mesageMonth.innerText = invalid);
  y <= new Date().getFullYear() ? verify : (mesageYear.innerText = invalid);
  m++;
  if (verify) {
    d <= obtenerDiasEnMes(m, y)
      ? (quanty = obtenerDiasEnMes(m, y))
      : (mesageDay.innerText = invalid);
  }

  let diasC = date.getDate() - d,
    mesC = date.getMonth() - m + 1,
    anioC = date.getFullYear() - y;
  if (anioC == 0) {
    if (mesC < 0) {
      mesageDay.innerText = invalid;
      if (diasC < 0) {
        mesageMonth.innerText = invalid;
      }
    } else {
      inputDay.innerText = diasC;
      inputMonth.innerText = mesC;
      inputYear.innerText = anioC;
    }
  } else {
    if (mesC < 0) {
      anioC--;
      mesC += 12;
      if (diasC < 0) {
        diasC += 31;
      }
      inputDay.innerText = diasC;
      inputMonth.innerText = mesC;
      inputYear.innerText = anioC;
    } else {
      if (diasC < 0) {
        mesC--;
        diasC += 31;
      } else {
        inputDay.innerText = diasC;
        inputMonth.innerText = mesC;
        inputYear.innerText = anioC;
      }
      inputDay.innerText = diasC;
      inputMonth.innerText = mesC;
      inputYear.innerText = anioC;
    }
  }
};

function obtenerDiasEnMes(mes, año) {
  const siguienteMes = new Date(año, mes, 1);

  siguienteMes.setDate(0);

  return siguienteMes.getDate();
}

//  2023  09  04
//  2004  09  11
//  18    11  23
