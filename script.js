const display = document.getElementById('display');

let firstValue;
let secondValue;
let opar;
let result;

function appendValue(inputValue) {

    if (inputValue === '.' && display.value.includes('.')) {
        return;
    }

    display.value += inputValue;
}

function appendOparator(oparator) {
    firstValue = display.value;
    display.value = '';
    opar = oparator;

}


function clearDisplay() {
    display.value = '';
    firstValue = undefined;
    secondValue = undefined;
    opar = undefined;
    result = undefined;
}
function calculate() {
    try {
        if (firstValue === undefined || opar === undefined || display.value === '' || result !== undefined) return;
        secondValue = display.value;
        display.value = '';

        switch (opar) {
            case '+':
                result = parseFloat(firstValue) + parseFloat(secondValue);
                break;
            case '-':
                result = parseFloat(firstValue) - parseFloat(secondValue);
                break;
            case '*':
                result = parseFloat(firstValue) * parseFloat(secondValue);
                break;
            case '/':
                result = parseFloat(firstValue) / parseFloat(secondValue);
                break;
        }
        console.log(result);

        if (result === Infinity || isNaN(result)) {
            display.value = 'Error';
            setTimeout(clearDisplay, 1500);
        } else {
            display.value = Math.round(result * 100000000) / 100000000; //Rounding
            firstValue = display.value;
            secondValue = undefined;
            opar = undefined;
            result = undefined;
        }
    } catch (e) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}
