const openbtn1 = document.getElementById("js-openbtn");

const menu = document.getElementById("js-menu");
console.log(menu);

openbtn1.addEventListener("click", function () {
	openbtn1.classList.toggle("active");
	menu.classList.toggle("active");
});
