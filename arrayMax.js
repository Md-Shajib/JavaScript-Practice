var marks = [23,53,64,66,76,78,98,34,54,67,79,08,67,99];
var max = marks[0];
for( i=0; i<marks.length; i++){
    if(marks[i] > max){
        max = marks[i];
    }
}
console.log("The Max Number is ", max);