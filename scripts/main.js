// External JavaScript for Navbar Toggle
document.addEventListener("DOMContentLoaded", function () {
	const toggleButton = document.getElementById("js-navbar-toggle");
	const menu = document.getElementById("js-menu");

	toggleButton.addEventListener("click", function () {
		menu.classList.toggle("active");
	});
});
