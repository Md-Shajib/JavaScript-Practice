function reverse(str){
    var reverse ="";
    for(i=0; i<str.length; i++){
        reverse = str[i] + reverse;
    }
    return reverse;
}
var statement = "shajibbijahs";
var reverseStatement = reverse(statement);
if(statement.localeCompare(reverseStatement) == 0){
    console.log(reverseStatement, " is palindrome");
}else{
    console.log(statement, " is not a palindrome");
}

