function calculate() {
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);
    var operate = document.getElementById('selection').value;
    var result;

    switch (operate) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'cannot divide by zero';
            }
            break;
        default:
            result = 'invalid Operation';
    }
    document.getElementById('result').innerHTML = "Result: " + result;
}
