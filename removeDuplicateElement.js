var name = [2,3,5,6,7,7,2,3,4,78,9,4,23,32];
var uniqueName = [];

for(i=0; i<name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}

console.log(uniqueName);