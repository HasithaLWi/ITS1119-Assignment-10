const display = document.getElementById('display');

function appendValue(inputValue) {

    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];

    if (display.value === '' && operators.includes(inputValue)) {
        return;
    }

    if (inputValue === '.' && lastChar === '.') {
        return;
    }

    if (display.value === 'Error' || display.value === '' && operators.includes(inputValue)) {
        return;
    }

    // if (operators.includes(inputValue) && !operators.includes(lastChar)) {
    //     display.value = inputValue;
    //     return;
    // } else if (operators.includes(lastChar) && !operators.includes(inputValue)) {
    //     display.value = inputValue;
    //     return;
    // }

    if (operators.includes(lastChar) && operators.includes(inputValue)) {
        display.value = display.value.slice(0, -1) + inputValue;
        return;
    }

    display.value += inputValue;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        if (display.value === '') return;
        let result = eval(display.value);//

        if (result === Infinity || isNaN(result)) {
            display.value = 'Error';
            setTimeout(clearDisplay, 1500);
        } else {
            display.value = Math.round(result * 100000000) / 100000000; //Rounding
        }
    } catch (e) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}
