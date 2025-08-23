//* LOGOUT FORM
const logOutButton = document.getElementById('logout-button');

logOutButton.addEventListener('click', function () {
  const answer = prompt("Do you want to log out? Type 'yes' or 'no'");

  if (answer && answer.toLowerCase() === "yes") {
    window.location.href = "./index.html";
  } else {
    alert("You stayed logged in!");
  }
});