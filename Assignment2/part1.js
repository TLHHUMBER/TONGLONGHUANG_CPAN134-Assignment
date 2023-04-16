const roomRental = document.getElementById("roomRental");
const food = document.getElementById("food");
const entertainment = document.getElementById("entertainment");
const total = document.getElementById("total");
const tax = document.getElementById("tax");

function calculate() {
  const totalValue = +roomRental.value + +food.value + +entertainment.value;
  const taxValue = totalValue * 1.13;

  total.value = totalValue.toFixed(2);
  tax.value = taxValue.toFixed(2);
}

roomRental.addEventListener("input", calculate);
food.addEventListener("input", calculate);
entertainment.addEventListener("input", calculate);
