// grabs the current amount of portions and stores it to a variable
const input = document.getElementById("portions");
// The minus button is used to decrement the input value and the if statement is there to stop the number to go below 0.
function decrement() {
    input.value = parseInt(input.value) - 1;
    if (input.value <= 0) {
        input.value = 1;
    }
}

// same principle as above but the limit is 15.
function increment() {
    input.value = parseInt(input.value) + 1;
    if (input.value >= 15) {
        input.value = 15;
    }
}
// this function here imposes a min and max value if the user decides to add the input directly to the input element.
function imposeMinMax(el) {
    if (el.value != "") {
        if (parseInt(el.value) < parseInt(el.min)) {
            el.value = el.min;
        }
        if (parseInt(el.value) > parseInt(el.max)) {
            el.value = el.max;
        }
    }
}

// the buttons are defined as variables so we can use them later.
const minusButton = document.getElementById("minusButton");
const plusButton = document.getElementById("plusButton");

// then all the ingredients are defined as variables
const soy = document.getElementById("soy");
const garlic = document.getElementById("garlic");
const vinegar = document.getElementById("vinegar");
const bayLeaf = document.getElementById("bayLeaf");
const tomato = document.getElementById("tomato");
const chicken = document.getElementById("chicken");
const onion = document.getElementById("onion");
const sOnion = document.getElementById("sOnion");
// then the input by click and change is listened for and if the buttons are used so the ingredients values can be updated accordingly
input.addEventListener("change", updateValue);
input.addEventListener("click", updateValue);
minusButton.addEventListener("click", updateValue);
plusButton.addEventListener("click", updateValue);

// then lastly this function is called when the input is clicked or changed and the ingredients values are updated the value after the input.value is 1 portion of the dish.
function updateValue() {
    soy.textContent = input.value * 0.125;
    garlic.textContent = input.value * 2;
    // here i used math round because this was the only number that ended with 6 decimals.
    vinegar.textContent = Math.round(input.value * 0.6);
    bayLeaf.textContent = input.value * 0.5;
    tomato.textContent = input.value * 0.25;
    chicken.textContent = input.value * 1;
    onion.textContent = input.value * 0.5;
    sOnion.textContent = input.value * 0.5;
}
