const capitalName = document.getElementById("capitalName");
const hideButton = document.getElementById("hideButton");
const showButton = document.getElementById("showButton");
const toggleButton = document.getElementById("toggleButton");
const firstParagraph = document.getElementById("firstParagraph");
const secondParagraph = document.getElementById("secondParagraph");

hideButton.addEventListener("click", function () {
  capitalName.style.display = "none";
});

showButton.addEventListener("click", function () {
  capitalName.style.display = "inline";
});

toggleButton.addEventListener("click", function () {
  if (capitalName.style.display == "none") {
    capitalName.style.display = "inline";
  } else {
    capitalName.style.display = "none";
  }
});

firstParagraph.addEventListener("mouseover", function () {
  firstParagraph.style.backgroundColor = "yellow";
});

secondParagraph.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});
