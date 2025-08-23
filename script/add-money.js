const addAccountNumber = document.getElementById('add-money-account-number');
const addAmount = document.getElementById('add-money-amount');
const addPin = document.getElementById('add-money-pin');
const addMoneyButton = document.getElementById('addmoney-button');

addMoneyButton.addEventListener('click', function (reloadOff) {
  reloadOff.preventDefault();

  const availableMoney = document.getElementById('available-balance').innerText;
  const moneyHave = parseInt(availableMoney);
  const bank = document.getElementById('add-money-bank').value;
  const accountNumber = parseInt(addAccountNumber.value);
  const amount = parseInt(addAmount.value);
  const pin = parseInt(addPin.value);

  let newBalance = amount + moneyHave;
  document.getElementById('available-balance').innerText = newBalance;

  addAmount.value = "";
})