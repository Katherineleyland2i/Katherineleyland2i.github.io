var checkbox = document.getElementById("checkbox");
var submit_Button = document.querySelector("button");
var elements = document.querySelectorAll(".element");
var colorSelected = document.querySelector("#colorSelected");


checkbox.disabled = true;
submit_Button.disabled = true;

elements = Array.from(elements);
shuffleArray(elements);

elements.forEach((element) => {
  const color = getRandomcolor();
  element.style.backgroundColor = color;
  element.color = color;
});

colorSelected.innerHTML = elements[0].color;
  colorSelected.style.backgroundColor = elements[0].color;

function getRandomcolor() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// if statement
elements.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.color === colorSelected.innerHTML) {
      checkbox.checked = true;
      submit_Button.disabled = false;
      submit_Button.classList.remove("btn-default");
      submit_Button.classList.add("btn-success");
      alert("You are Human");
    } else {
      alert("Please Verify you are human");
      location.reload(true);
    }
  });
});