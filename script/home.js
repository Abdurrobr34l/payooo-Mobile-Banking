//* ADD MONEY
const addAccountNumber = document.getElementById('add-money-account-number');
const addAmount = document.getElementById('add-money-amount');
const addPin = document.getElementById('add-money-pin');
const addMoneyButton = document.getElementById('addmoney-button');

addMoneyButton.addEventListener('click', function (reloadOff) {
  reloadOff.preventDefault();

  const availableMoney = document.getElementById('available-balance').innerText;
  const moneyHave = parseInt(availableMoney);
  // const bank = document.getElementById('add-money-bank').value;
  const accountNumber = parseInt(addAccountNumber.value);
  const amount = parseInt(addAmount.value);
  const pin = parseInt(addPin.value);

  if (addAccountNumber.value.length != 11) {
    alert("Please provide valid account number")
    return;
  }

  if (pin != 1234) {
    alert("Pin is invalid");
    return;
  }

  let newBalance = amount + moneyHave;
  document.getElementById('available-balance').innerText = newBalance;

  addAccountNumber.value = "";
  addPin.value = "";
  addAmount.value = "";
})

//* CASH OUT
const cashOutAccountNumber = document.getElementById('cashout-account-number');
const cashOutAmount = document.getElementById('cashout-amount');
const cashOutPin = document.getElementById('cashout-pin');
const cashOutButton = document.getElementById('cashout-button');

cashOutButton.addEventListener('click', function (reloadOff) {
  reloadOff.preventDefault();

  const availableMoney = document.getElementById('available-balance').innerText;
  const moneyHave = parseInt(availableMoney);
  // const bank = document.getElementById('add-money-bank').value;
  const accountNumber = parseInt(cashOutAccountNumber.value);
  const amount = parseInt(cashOutAmount.value);
  const pin = parseInt(cashOutPin.value);

  if (cashOutAccountNumber.value.length != 11) {
    alert("Please provide valid account number")
    return;
  }

  if (pin != 1234) {
    alert("Pin is invalid");
    return;
  }

  let newBalance = moneyHave - amount;
  document.getElementById('available-balance').innerText = newBalance;

  cashOutAccountNumber.value = "";
  cashOutAmount.value = "";
  cashOutPin.value = "";
})