document.addEventListener("DOMContentLoaded", function(event) {
  var name = prompt("What...is your name?");
  var message = "Hello " + name + "!";
  alert(message);
  var nameDiv = document.getElementById('name');
  nameDiv.innerHTML = message;
});
