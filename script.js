const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

var typed = new Typed (".multiple-text",{
    strings: [" Frontend Developeri", " Programeri", " Graphic Dizajneri"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})