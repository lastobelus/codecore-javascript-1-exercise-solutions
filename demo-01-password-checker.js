document.addEventListener("DOMContentLoaded", function(event) {
  var password = prompt("What is your password?");
  var passwordDiv = document.getElementById('password');

  if(password.length > 12) {
    alert("Too long!");
  } else if(password.length < 8) {
    alert("Too short!");
  } else {
    alert("Just right!");
    passwordDiv.innerHTML = password;
  }

});