var depth = 27;
var animal = 0;


if(depth <= 10){
    animal = depth * 50;
}else if(depth <= 20 ){
    var firstPart = 500;
    var remaining = depth - 10;
    var secondPart = remaining * 100;
    animal = firstPart + secondPart;
}else{
    var secondPart = 1500;
    remaining = depth - 20;
    var thirdPart = remaining * 300;
    animal = secondPart + thirdPart;
}

console.log(animal);