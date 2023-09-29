let colorCh = document.querySelector(".colorCh");
let body = document.getElementById("wholeContainer");

function generateRandomColor() {
  body.style.background = colorCh.value;
}

colorCh.addEventListener("input", generateRandomColor);
