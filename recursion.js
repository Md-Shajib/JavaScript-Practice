function factorial(num){
    var result = 1;
    for(i=2; i<=num; i++){
        result = result * i;
    }
    return result;
}
function factorialRecursion(num){
    if(num == 2){
        return 2;
    }
    return num * factorialRecursion(num-1);
}

var fact = factorialRecursion(5);
console.log(fact);