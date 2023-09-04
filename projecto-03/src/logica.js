let modal = document.querySelector(".text-modal");

export const addChar = (char, container) => {
  let number = /[1-9]/;
  let limit = /\.[0-9]{0,2}$/;
  let operator = /[+\-/x]/;
  let point = /^[1-9][0-9]+$/;
  let point2 = /[+\-/x](0?|[1-9][0-9]+)$/;
  let zero = /[+\-/x]0$/;

  if (container.length == 12) {
    modal.classList.remove("hidden");
    return container;
  }

  if (number.test(char)) {
    if (!limit.test(container) && /\.[0-9]+$/.test(container)) return container;
    container === "0" ? (container = char) : (container += char);
  } else if (operator.test(char)) {
    if (container == "0") return container;
    operator.test(container.slice(-1)) || container.slice(-1) == "."
      ? (container = container.slice(0, -1) + char)
      : (container += char);
  } else if (char == ".") {
    if (point.test(container) || point2.test(container)) {
      operator.test(container.slice(-1)) ? container : (container += char);
    }
  } else {
    if (limit.test(container)) return container;
    zero.test(container) || container == "0" ? container : (container += char);
  }

  return container;
};

export const updateChar = (container) => {
  if (container.length <= 12) {
    modal.classList.add("hidden");
  }
  container.length == 1
    ? (container = "0")
    : (container = container.slice(0, -1));
  return container;
};

export const result = (container) => {
  let operator = /[+\-/x]/;
  if (operator.test(container.slice(-1)) || container.slice(-1) == ".") {
    container = container.replace("x", "*");
    container = eval(container.slice(0, -1));
    return container;
  }
  return eval(container.replace("x", "*"));
};
