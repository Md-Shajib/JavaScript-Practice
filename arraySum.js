
function getArraySome(arr){
    var sum = 0;
    for(i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
var result = getArraySome([12,32,43,12,33,435,123,53,53,234]);

console.log(result);