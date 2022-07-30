//Basic math operators 
const add = function (x,y) {
    return x + y
}

const subtract = function (x,y) {
    return x-y
}

const multiply = function(x,y) {
    return x*y
}

const divide = function(x,y) {
    return x/y;
}

//Function that takes an operator and 2 numbers
const operate = function(operator, x, y) {
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

