const tblBody = document.getElementById('tblBody');
const table = document.getElementById('expensesTbl');
const form = document.getElementById('expensesForm');
const deleteBtn = document.getElementsByClassName('delete-btn');
const paymentType = document.getElementById('paymentType');
const expenseName = document.getElementById('expenseName');
const expenseDate = document.getElementById('expenseDate');
const expenseAmount = document.getElementById('expenseAmount');
const addExpenseBtn = document.getElementById('addExpenseBtn');

document.getElementById('addExpenseBtn').addEventListener('click', createNewRow);
document.getElementById('addExpenseBtn').addEventListener('click', clearInputs);

function createNewRow() {
  if (!paymentType.value || 
    !expenseName.value ||
    !expenseDate.value ||
    !expenseAmount.value) return;
  const tblBody = document.getElementById('tblBody');
  const row = tblBody.insertRow(0);
  const paymentTypeCell = row.insertCell(0);
  const expenseNameCell = row.insertCell(1);
  const expenseDateCell = row.insertCell(2);
  const expenseAmountCell = row.insertCell(3);
  const deleteExpBtnCell = row.insertCell(4);

  paymentTypeCell.innerHTML = paymentType.value;
  if (paymentType.value === "Card") {
    paymentTypeCell.innerHTML = '<i class="fa-regular fa-credit-card"></i>';
  } else if  
    (paymentType.value === "Cash") {
    paymentTypeCell.innerHTML = '<i class="fa-regular fa-money-bill-1"></i>';
  } else if 
    (paymentType.value === "Cryptocoin") {
    paymentTypeCell.innerHTML = '<i class="fa-sharp fa-solid fa-bitcoin-sign"></i>';
  } else {
    paymentTypeCell.innerHTML = '<i class="fa-regular fa-question"></i>';
  };

  expenseNameCell.innerHTML = expenseName.value;

  let mydate = new Date(form.expenseDate.value);
  let month = [
    "January",
    "February",
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"][mydate.getMonth()];
  let day = [(mydate.getDate() + 1)];
    const nth = function(day) {
      if (day > 20 || day < 10) {
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
      }
    }
    return "th";
  };
  const formattedDate = month + " " + day + nth() + ", " + mydate.getFullYear();
  expenseDateCell.innerHTML = formattedDate;

  expenseAmountCell.innerHTML = '$'+ expenseAmount.value;
  deleteExpBtnCell.innerHTML = '<button class="delete-btn" onclick="deleteRow(this)"> <i class="fa-regular fa-trash-can"></i>';
};

function deleteRow(e) {
  const i = e.parentNode.parentNode.rowIndex;
  document.getElementById('expensesTbl').deleteRow(i);
};

function clearInputs() {
  if (paymentType.value && 
    expenseName.value &&
    expenseDate.value &&
    expenseAmount.value) {
  paymentType.value = "";
  expenseName.value = "";
  expenseDate.value = "";
  expenseAmount.value = "";
  }
};