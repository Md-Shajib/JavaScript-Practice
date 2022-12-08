function arithmeticOperation(a,b,operation){
    console.log('The two number is ', a, ' ' , b);
    operation(a,b);
}
function add(a,b){
    let c = a+b;
    console.log('THe summetion of the two number is ', c);
}
function subtract(a,b){
    let c = a-b;
    console.log('THe subtraction of the two number is ', c);
}
function multi(a,b){
    let c = a*b;
    console.log('THe multiplication of the two number is ', c);
}
function div(a,b){
    let c = a/b;
    console.log('THe division of the two number is ', c);
}

arithmeticOperation(10,6, add);
arithmeticOperation(10,6, subtract);