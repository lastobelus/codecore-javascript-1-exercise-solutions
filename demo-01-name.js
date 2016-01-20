document.addEventListener("DOMContentLoaded", function(event) {
  var name = "Michael Johnston";
  var a = 3, b = 4, result = a * b;
  var message = "Hello, " + name + "! In case you forgot, " + a + " x " + b + " is " + result + "."
  console.log(message);
  var nameDiv = document.getElementById('name');
  nameDiv.innerHTML = message;
});
