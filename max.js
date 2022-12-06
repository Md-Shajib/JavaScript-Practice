var a = 1030;
var b = 350;
var c = 230;

if(a>b){
    if(a>c){
        console.log("a is bigger");
    }else{
        console.log("c is bigger");
    }
}else{
    if(b>c){
        console.log("b is bigger");
    }else{
        console.log("c is bigger");
    }
}

var max = Math.max(a,b,c);
console.log("Shortcut Max Number Is ", max);