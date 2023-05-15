import "./styles.css";

var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

var operant1 = 0;
var operator = null;
var operant2 = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "+" || value == "-" || value == "*" || value == "/") {
      operator = value;
      operant1 = parseFloat(display.textContent);
      display.innerText = "";
    } else if (value == "AC") {
      operant1 = 0;
      operant2 = null;
      operator = null;
      display.innerText = "";
    } else if (value == "+/-") {
      var convert = parseFloat(display.textContent);

      var result = eval(convert * -1);
      display.innerText = result;
    } else if (value == "%") {
      var convert = parseFloat(display.textContent);
      var result = eval(convert / 100);
      display.innerText = result;
    } else if (value == "=") {
      operant2 = parseFloat(display.textContent);
      display.innerText = "";
      var result = eval(operant1 + " " + operator + " " + operant2);
      display.innerText = result;
    } else {
      display.innerText += value;
    }
  });
}
