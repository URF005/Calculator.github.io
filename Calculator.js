console.log("Hi");
let buttons = document.querySelectorAll("button");
let scr = document.getElementById("screen");
let eq = document.getElementById("equal");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (this.innerHTML == "=") {
      scr.innerHTML = eval(scr.innerHTML);
    } else if (this.innerHTML == "c") {
      scr.innerHTML = "";
    } else {
      scr.innerHTML = scr.innerHTML + this.innerHTML;
    }
  });
}
