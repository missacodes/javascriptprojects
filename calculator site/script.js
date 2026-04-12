function add (a, b) {
    return a+b
}

function subtract (a, b) {
    return a-b
}

function multiply (a, b) {
    return a*b
}

function divide (a, b) {
    return a/b
}

function calculate (operation) {
    let result;
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    if (operation === "add") {
        result = add (a, b)
    }
    else if (operation === "subtract") {
        result = subtract (a, b)
    }
    else if (operation === "multiply") {
        result = multiply (a, b)
    }
    else if (operation === "divide") {
        if (b === 0) {
            result = "You cannot divide by 0"

        }
        else {
            result = divide(a, b)
        }

    }

        document.getElementById("result").innerHTML = "The result is: " + (result)
}