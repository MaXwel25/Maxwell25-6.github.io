let itemInfo = {
	"Чай": 80,
	"Кофе": 100,
	"Молоко": 62,
	"Масло": 180,
	"Хлеб": 50,
	"Гречка": 44
};

function doOrder() {
	let items = document.getElementsByName("items");
	let count = document.getElementsByName("count");
	let result = document.getElementById("orderform-result");

	alert("Посчитать стоимость заказа?");

	if (count[0].value.match(/^\d+$/) !== null) {
		let cost = Math.abs(itemInfo[items[0].value] * count[0].value);

		result.className = "orderform-result-succes";
		result.innerHTML = "<br /><strong>Стоимость: " + cost + " ₽</strong>";
	}
	else {
		result.className = "orderform-result-failure";
		result.innerHTML = "<br /><strong>Поле ввода количества не должно содержать буквы, отрицательные значения или быть пустым!</strong>";
	}

	return false;
}

window.addEventListener("DOMContentLoaded", function(event){
	console.log("DOM loaded!");
	let button = document.getElementById("orderform-button");
	button.addEventListener("click", doOrder);
});