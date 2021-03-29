// TODO: set as HW
const items = document.querySelectorAll(".menu li");
const btnCalcTotal = document.querySelector(".btnCalcTotal");
const btnReset = document.querySelector(".btnReset");
const totalPriceSpan = document.getElementById("totalPriceSpan");

let totalPrice = 0;
let currentPrices = [];

// when a LI is clicked => toggle class "choosen"
for( item of items){
	item.addEventListener("click", function (e) {
		let item = e.currentTarget;
		item.classList.toggle("choosen");

		let price = item.dataset.price*1;

		if(item.classList.contains("choosen")){
			currentPrices.push(price);
		}else{
			currentPrices.push(-price);
		}
	});
}

btnCalcTotal.addEventListener("click", function () {
	// get total sum of all choosen items
	for (let i = 0; i < currentPrices.length; i++) {
		const element = currentPrices[i];
		totalPrice += element;
	}
	totalPriceSpan.innerText = totalPrice;
	totalPrice = 0;
});

btnReset.addEventListener("click", function() {
	totalPrice = 0;
	totalPriceSpan.innerText = totalPrice;
	currentPrices = [];

	for (item of items) {
		if(item.classList.contains("choosen")){
			item.classList.toggle("choosen");
		}
	}
});
