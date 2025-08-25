//* FORM BUTTON ACTIVE STYLE ON CLICK
let allOptButton = document.getElementsByClassName('form-button');
for (let button of allOptButton) {
  button.addEventListener('click', function () {
    for (let btn of allOptButton) {
      btn.classList.remove('active-button');
    }

    button.classList.add('active-button');
  })
}

//* TRANSACTION
const transaction = [];

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

  const data = {
    name: "Add Money",
    date: new Date().toLocaleTimeString()
  }

  transaction.push(data);

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

  if (amount > moneyHave) {
    alert("Insufficient Balance")
    return;
  }

  if (pin != 1234) {
    alert("Pin is invalid");
    return;
  }

  let newBalance = moneyHave - amount;
  document.getElementById('available-balance').innerText = newBalance;

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString()
  }

  transaction.push(data);

  cashOutAccountNumber.value = "";
  cashOutAmount.value = "";
  cashOutPin.value = "";
})

//* TRANSFER MONEY
const transferMoneyAccountNumber = document.getElementById('transfer-money-account-number');
const transferMoneyAmount = document.getElementById('transfer-money-amount');
const transferMoneyPin = document.getElementById('transfer-money-pin');
const transferMoneyButton = document.getElementById('transfer-money-button');

transferMoneyButton.addEventListener('click', function (reloadOff) {
  reloadOff.preventDefault();

  const availableMoney = document.getElementById('available-balance').innerText;
  const moneyHave = parseInt(availableMoney);


  if (transferMoneyAccountNumber.value.length != 11) {
    alert("Please provide valid account number")
    return;
  }
  const accountNumber = parseInt(transferMoneyAccountNumber.value);
  
  const amount = parseInt(transferMoneyAmount.value);
  if (amount > moneyHave) {
    alert("Insufficient Balance")
    return;
  }

  if (transferMoneyPin.value != 1234) {
    alert("Pin is invalid");
    return;
  }
  const pin = parseInt(transferMoneyPin.value);

  let newBalance = moneyHave - amount;
  document.getElementById('available-balance').innerText = newBalance;

  const data = {
    name: "Transfer Money",
    date: new Date().toLocaleTimeString()
  }

  transaction.push(data);

  transferMoneyAccountNumber.value = "";
  transferMoneyAmount.value = "";
  transferMoneyPin.value = "";
})

//* GET BONUS MONEY
alert("Today's Special Bonus: bonus25")
const getBonusInput = document.getElementById('get-bonus-input');
const getBonusButton = document.getElementById('get-bonus-button');

getBonusButton.addEventListener('click', function (reloadOff) {
  reloadOff.preventDefault();

  let getBonusValue = getBonusInput.value;
  if (getBonusValue === "bonus25") {
    const data = {
      name: "Get Bonus",
      date: new Date().toLocaleTimeString()
    }

    transaction.push(data);
    return getBonusInput.value = "";
  } else {
    alert("Bonus invalid")
  }

})

//* PAY BILL
const payBillAccountNumber = document.getElementById('pay-bill-account-number');
const payBillAmount = document.getElementById('pay-bill-amount');
const payBillPin = document.getElementById('pay-bill-pin');
// const icon = document.getElementById('icon');
const payBillMoneyButton = document.getElementById('pay-bill-button');

payBillMoneyButton.addEventListener('click', function (reloadOff) {
  reloadOff.preventDefault();

  const availableMoney = document.getElementById('available-balance').innerText;
  const moneyHave = parseInt(availableMoney);
  // const bank = document.getElementById('add-money-bank').value;
  const accountNumber = parseInt(payBillAccountNumber.value);
  const amount = parseInt(payBillAmount.value);
  const pin = parseInt(payBillPin.value);

  if (payBillAccountNumber.value.length != 11) {
    alert("Please provide valid account number")
    return;
  }

  if (pin != 1234) {
    alert("Pin is invalid");
    return;
  }

  let newBalance = moneyHave - amount;
  document.getElementById('available-balance').innerText = newBalance;

  const data = {
    name: "Transaction",
    date: new Date().toLocaleTimeString()
  }

  transaction.push(data);

  payBillAccountNumber.value = "";
  payBillAmount.value = "";
  payBillPin.value = "";
})

//* TRANSACTION
const transactionButton = document.getElementById('transaction');

transactionButton.addEventListener('click', function (reloadOff) {
  reloadOff.preventDefault();

  const transactionDetail = document.getElementById('transaction-detail');
  transactionDetail.innerText = ""

  for (let data of transaction) {
    const div = document.createElement('div')
    div.innerHTML = `
     <div class="flex items-center justify-between mt-4 px-4 py-3 bg-white border-2 border-[#0808081A] rounded-xl">
        <!--? Icon, Banking Option Name and Time -->
        <div class="flex items-center gap-2">

          <!--? Icon -->
          <div id="icon" class="p-2 bg-[#0808081A] size-11 rounded-full">
            <img src="./assets/wallet1.png" alt="It is an wallet image">
          </div>
          <!--? Banking Option Name and Time -->
          <div>
            <h2>${data.name}</h2>
            <p>${data.date}</p>
          </div>

        </div>

        <!--? Three Dots Button -->
        <div>
          <button class="join disabled text-3xl font-bold text-[#525252] rotate-90">...</button>
        </div>
      </div>
    `

    transactionDetail.appendChild(div);
  }
})