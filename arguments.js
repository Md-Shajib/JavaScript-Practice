function addNubers(){//in function we cam put empty or any numbers as a parameter
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element;
    }
    return sum;
}

let result = addNubers(5,8,13,18,6,5);
console.log(result);