//* LOGIN FORM
const loginNumber = document.getElementById('login-phonenumber-input');
const loginpin = document.getElementById('login-pin-input');
const loginButton = document.getElementById('login-button');
const mobileNumber = 12345678910;
const pin = 1234;
loginButton.addEventListener('click', function (reloadOff) {
  reloadOff.preventDefault();

  let loginNumberCng = parseInt(loginNumber.value)
  let loginPinCng = parseInt(loginpin.value)

  if (loginNumberCng === mobileNumber && loginPinCng === pin) {
    window.location.href="./home.html"
  } else {
    alert("Invalid Credential")
  }
})