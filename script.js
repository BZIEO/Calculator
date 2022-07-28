//Basic math operators 
function add(x,y) {
    let res = x + y;
    return res
}

function subtract(x,y) {
    let res = x-y;
    return res
}

function multiply(x,y) {
    let res = x*y;
    return res
}

function divide(x,y) {
    let res = x/y;
    return res
}


function operate(operator, x, y) {
    x = +x;
    y = +y;

    switch (operator) {
        case "add":
            return add(x,y)
            break;

        case "subtract":
            return subtract(x,y)
            break;
        case "multiply":
            return multiply(x,y)
            break;
        case "divide":
            return divide(x,y)
            break;
            
    }
}

