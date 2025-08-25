let bankingSections = document.getElementsByClassName('banking-option-section');

//* Hide all section initially
for (let section of bankingSections) {
  section.style.display = "none"
}

//* Reuseable Function
function individualSection(bankingSections) {
  for (let section of bankingSections) {
    section.style.display = "none"
  }
}

//* When any option button is clicked, hide dummy section
const buttons = document.querySelectorAll('.form-button');
for (let button of buttons) {
  button.addEventListener('click', function (event) {
    document.getElementById('dummy-section').style.display = "none";
    event.stopPropagation();
  });
}

//* When any part of the body is clicked, the form for banking option gets hidden and dummy section gets block
document.body.addEventListener('click', function () {
  let sections = document.getElementsByClassName('banking-option-section');
  for (let section of sections) {
    section.style.display = "none"
  }

  document.getElementById('dummy-section').style.display = "block"
})


//? Add-Money
document.getElementById('add-money').addEventListener('click', function () {
  individualSection(bankingSections)
  document.getElementById('add-money-section').style.display = "block"
  
})
//? Cash-Out
document.getElementById('cash-out').addEventListener('click', function () {
  individualSection(bankingSections)
  document.getElementById('cashout-section').style.display = "block"

})
//? Transfer-Money
document.getElementById('transfer-money').addEventListener('click', function () {
  individualSection(bankingSections)
  document.getElementById('transfer-money-section').style.display = "block"

})






// const addMoneybtn = document.getElementById('add-money');
// const cashOutbutton = document.getElementById('cashout');

// const addMoneySection = document.getElementById('add-money-section');
// const cashOutSection = document.getElementById('cashout-section');
// const dummySection = document.getElementById('dummy-section');

// addMoneybtn.addEventListener('click', function() {
//   addMoneySection.style.display = "block";
//     cashOutSection.style.display = "none";
//     dummySection.style.display = "none";
// })

// cashOutbutton.addEventListener('click', function() {
//   cashOutSection.style.display = "block";
//   addMoneySection.style.display = "none";
//   dummySection.style.display = "none";
// })

// const bankingSections = document.getElementsByClassName('banking-option-section');


