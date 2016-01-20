var safe = 714;
var password = "opensesame";

var passwordAttempt = prompt("What is the password?");

if (passwordAttempt === password) {
  alert("the safe contains " + safe);
} else {
  alert("sorry, wrong password");
}
