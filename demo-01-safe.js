var safe = 714;
var password = "opensesame";
var entranceMessage = "Welcome to super-safe! Are you sure you want to enter?";

if (confirm(entranceMessage)) {
  var passwordAttempt = prompt("What is the password?");

  if (passwordAttempt === password) {
    alert("the safe contains " + safe);
  } else {
    alert("sorry, wrong password");
  }
} else {
  alert("OK. Goodbye, then.");
}

