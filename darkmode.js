function toggleMode() {
	var element = document.body;
	element.classList.toggle("dark-mode");

	var footerElements = document.getElementsByClassName("trademark");
	footerElements[0].classList.toggle("dark-mode");

	var navElements = document.getElementsByClassName("navigation");
	navElements[0].classList.toggle("light-mode");

	var button = document.getElementById("dark-light");

	if (element.classList.contains("dark-mode")) {
		button.innerText = "Light Mode";
		button.style.color = "black";
		button.style.background = "white";
	} else {
		button.innerText = "Dark Mode";
		button.style.color = "white";
		button.style.background = "black";
	}
}
