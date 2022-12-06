var num = 3.500;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);

var dice = Math.random()*10;
var dice = Math.ceil(dice);
if(dice > 6){
    dice = dice%6;
    console.log(dice);
}else{
    console.log(dice);
}