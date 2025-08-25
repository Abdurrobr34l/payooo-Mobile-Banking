let bankingSections = document.getElementsByClassName('banking-option-section');

//* Hide all section initially
for (let section of bankingSections) {
  section.style.display = "none"
}

//* Reuseable Function Start
//? To get indivitual sections
function individualSection(bankingSections) {
  for (let section of bankingSections) {
    section.style.display = "none"
  }
}
//? For getting id and adding display block to it
function idStyle(id) {
  document.getElementById(id).style.display = "block"
}
//* Reuseable Function End

//* When any option button is clicked, hide dummy section
const buttons = document.querySelectorAll('.form-button');
for (let button of buttons) {
  button.addEventListener('click', function (event) {
    document.getElementById('dummy-section').style.display = "none";
    // event.stopPropagation();
  });
}

// //* When any part of the body is clicked, the form for banking option gets hidden and dummy section gets block
const clearButtons = document.querySelectorAll('.clear-button');
for (let button of clearButtons) {
  button.addEventListener('click', function () {

    let sections = document.getElementsByClassName('banking-option-section');
    for (let section of sections) {
      section.style.display = "none"
    }
    document.getElementById('dummy-section').style.display = "block"

  })
}

//? Add-Money
document.getElementById('add-money').addEventListener('click', function () {
  individualSection(bankingSections);
  idStyle('add-money-section');

})

//? Cash-Out
document.getElementById('cash-out').addEventListener('click', function () {
  individualSection(bankingSections);
  idStyle('cashout-section');

})
//? Transfer-Money
document.getElementById('transfer-money').addEventListener('click', function () {
  individualSection(bankingSections);
  idStyle('transfer-money-section');

})
//? GET BONUS
document.getElementById('get-bonus').addEventListener('click', function () {
  individualSection(bankingSections);
  idStyle('get-bonus-section');

})
//? PAY BILL
document.getElementById('pay-bill').addEventListener('click', function () {
  individualSection(bankingSections);
  idStyle('pay-bill-section');

})
//? TRANSACTION
document.getElementById('transaction').addEventListener('click', function () {
  individualSection(bankingSections);
  idStyle('transaction-section');

})