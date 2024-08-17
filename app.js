// alert('hello');
// Get the button and the dropdown items
const measureButton1 = document.getElementById('measureButton1');
const dropdownItems1 = document.querySelectorAll('.dropdown-item1');
const measureButton2 = document.getElementById('measureButton2');
const dropdownItems2 = document.querySelectorAll('.dropdown-item2');

// Get the switch button
const switchButton = document.getElementById('switchButton');

// Get the convert buttons
const convertUp = document.getElementById('convertUp');
const convertDown = document.getElementById('convertDown');

// Get the input fields
// input 1
const input1 = document.getElementById('input1');

// input 2
const input2 = document.getElementById('input2');


// Add click event listeners to the dropdown items
dropdownItems1.forEach(item => {
    item.addEventListener('click', (event) => {
        // Change the button's text to the selected item's text
        measureButton1.textContent = item.textContent;
    });
});

// Add click event listeners to the dropdown items
dropdownItems2.forEach(item => {
    item.addEventListener('click', (event) => {
        // Change the button's text to the selected item's text
        measureButton2.textContent = item.textContent;
    });
});

// Add click event listeners to the switch button
switchButton.addEventListener('click', (event) => {
    let textContentTemporary;
    textContentTemporary = measureButton2.textContent;
    measureButton2.textContent = measureButton1.textContent;
    measureButton1.textContent = textContentTemporary;
});

// Add click event listeners to the convert buttons

// convert UP
convertUp.addEventListener('click', (event) => {
    if (measureButton1.textContent == measureButton2.textContent) {
        input2.value = input1.value;
    }
    else if (measureButton1.textContent != measureButton2.textContent) {
        if ((measureButton2.textContent == 'Celsius') && (measureButton1.textContent == 'Kelvin')) {
            input2.value = (Math.round((parseInt(input1.value) + 273.15) * 100) / 100);
        }
        if ((measureButton2.textContent == 'Celsius') && (measureButton1.textContent == 'Farenheit')) {
            input1.value = (Math.round(((parseInt(input2.value) * 9 / 5) + 32) * 100) / 100);
        }
        if ((measureButton2.textContent == 'Kelvin') && (measureButton1.textContent == 'Celsius')) {
            input1.value = (Math.round((parseInt(input2.value) - 273.15) * 100) / 100);
        }
        if ((measureButton2.textContent == 'Kelvin') && (measureButton1.textContent == 'Farenheit')) {
            input1.value = (Math.round((((parseInt(input2.value) - 273.15) * 9 / 5) + 32) * 100) / 100);
        }
        if ((measureButton2.textContent == 'Farenheit') && (measureButton1.textContent == 'Celsius')) {
            input1.value = (Math.round(((parseInt(input2.value) - 32) * 5 / 9) * 100) / 100);
        }
        if ((measureButton2.textContent == 'Farenheit') && (measureButton1.textContent == 'Kelvin')) {
            input1.value = (Math.round(((((parseInt(input2.value)) - 32) * 5 / 9) - 273.15) * 100) / 100);
        }

    }
});
// convert Down
convertDown.addEventListener('click', (event) => {
    if (measureButton1.textContent == measureButton2.textContent) {
        input2.value = input1.value;
    }
    else if (measureButton1.textContent != measureButton2.textContent) {
        if ((measureButton1.textContent == 'Celsius') && (measureButton2.textContent == 'Kelvin')) {
            input2.value = (Math.round((parseFloat(input1.value) + 273.15) * 100) / 100);
        }
        if ((measureButton1.textContent == 'Celsius') && (measureButton2.textContent == 'Farenheit')) {
            input2.value = (Math.round(((parseFloat(input1.value) * 9 / 5) + 32) * 100) / 100);
        }
        if ((measureButton1.textContent == 'Kelvin') && (measureButton2.textContent == 'Celsius')) {
            input2.value = (Math.round((parseFloat(input1.value) - 273.15) * 100) / 100);
        }
        if ((measureButton1.textContent == 'Kelvin') && (measureButton2.textContent == 'Farenheit')) {
            input2.value = (Math.round((((parseFloat(input1.value) - 273.15) * 9 / 5) + 32) * 100) / 100);
        }
        if ((measureButton1.textContent == 'Farenheit') && (measureButton2.textContent == 'Celsius')) {
            input2.value = (Math.round(((parseFloat(input1.value) - 32) * 5 / 9) * 100) / 100);
        }
        if ((measureButton1.textContent == 'Farenheit') && (measureButton2.textContent == 'Kelvin')) {
            input2.value = (Math.round(((((parseFloat(input1.value)) - 32) * 5 / 9) - 273.15) * 100) / 100);
        }

    }
});