let abrir = document.getElementById("cta");
let modalC = document.getElementById("modalC");
let arrow = document.getElementById("arrow");

abrir.addEventListener("click", () => {
  if (modalC.style.visibility == "visible") {
    modalC.style.visibility = "hidden";
    modalC.style.opacity = "0";
    abrir.style.backgroundColor = "hsl(210, 46%, 95%)";
  } else {
    modalC.style.visibility = "visible";
    modalC.style.opacity = "1";
    abrir.style.backgroundColor = "hsl(217, 19%, 35%)";
  }
});
