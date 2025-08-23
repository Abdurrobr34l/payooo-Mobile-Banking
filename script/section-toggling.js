const addMoneybtn = document.getElementById('add-money');
const cashOutbutton = document.getElementById('cashout');

const addMoneySection = document.getElementById('add-money-section');
const cashOutSection = document.getElementById('cashout-section');
const dummySection = document.getElementById('dummy-section');

addMoneybtn.addEventListener('click', function() {
  addMoneySection.style.display = "block";
    cashOutSection.style.display = "none";
    dummySection.style.display = "none";
})

cashOutbutton.addEventListener('click', function() {
  cashOutSection.style.display = "block";
  addMoneySection.style.display = "none";
  dummySection.style.display = "none";
})