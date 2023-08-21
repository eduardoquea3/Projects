const text = document.querySelector("#Correo")
const boton = document.querySelector("#boton")
const span = document.querySelector(".email")
const validate = document.querySelector(".validate")

boton.addEventListener("click", () => {
  let correo = text.value
  let re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  if (re.test(correo)) {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".boletin").style.display = "grid"
    span.innerText = correo
  } else {
    text.classList.add("error")
    validate.style.display = "inline"
  }
})
text.addEventListener('keydown', () => {
  text.classList.remove("error")
  validate.style.display = "none"
})

document.querySelector(".boton-boletin").addEventListener("click", () => {
  window.location.reload()
})
