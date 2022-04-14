var calculate = document.querySelector("#calculate");
var number1 = document.querySelector("#number1");
var number2 = document.querySelector("#number2");
var result = document.querySelector("#result");

calculate.onclick = function () {
  var hypotenuse = Math.sqrt(
    number1.value * number1.value + number2.value * number2.value
  );
  alert(hypotenuse);
};
