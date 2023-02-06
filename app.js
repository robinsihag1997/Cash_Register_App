let totalBill = document.querySelector("#billAmount");
let amountGiven = document.querySelector("#Cashgiven");
let CheckBtn = document.querySelector("#btnCheck");
let ErrorMsgOutput = document.querySelector("#errorMsg");
let outputValueForNotes = document.querySelectorAll(".no_of_notes");
let totalAmoutReturn = document.querySelector(".TotalAmount");
let minusMoney = document.querySelector(".minusMoney");
let subContainer = document.querySelector(".subcontainer");
console.log(outputValueForNotes);

let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

CheckBtn.addEventListener("click", function validate() {
	if (
		(totalBill.value && amountGiven.value < 1) ||
		(totalBill.value && amountGiven.value === null)
	) {
		ErrorMsgOutput.innerText = "The bill amount should be greater than 0";
		clearInputvlaues(totalBill);
		clearInputvlaues(amountGiven);
	} else {
		let amount_to_be_returend = amountGiven.value - totalBill.value;
		if (Number(amount_to_be_returend) === Number(amount_to_be_returend)) {
			calculateChange(amount_to_be_returend);

			let number = amount_to_be_returend;
			let positive = number * -1;

			if (amount_to_be_returend < 0) {
				minusMoney.innerText = `Still customer have to pay you ${positive} `;
				totalAmoutReturn.innerText = " ";
			} else {
				totalAmoutReturn.innerText = `Pay to customer : ${number}`;
				minusMoney.innerText = " ";
			}

			clearInputvlaues(totalBill);
			clearInputvlaues(amountGiven);

			ErrorMsgOutput.innerText = " ";
		} else {
			ErrorMsgOutput.innerText =
				"invalid input value please enter a numbers not words";
		}
	}
});

function calculateChange(amount_to_be_returend) {
	for (let i = 0; i < notes.length; i++) {
		let numbersOfNotes = Math.trunc(amount_to_be_returend / notes[i]);
		console.log(numbersOfNotes);
		amount_to_be_returend %= notes[i];
		outputValueForNotes[i].innerText = numbersOfNotes;
	}
}

function clearInputvlaues(parameter) {
	parameter.value = " ";
}
