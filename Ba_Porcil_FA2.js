function add(){
    var firstNum, secondNum, sum;
    firstNum = parseInt(document.getElementById("number1").value);
    secondNum = parseInt(document.getElementById("number2").value);
    sum = firstNum + secondNum;
    document.getElementById("answer").innerHTML = "The sum of " + firstNum + " and " + secondNum + " is " + " " + sum + ".";
}
function minus(){
    var firstNum, secondNum, difference;
    firstNum = parseInt(document.getElementById("number1").value);
    secondNum = parseInt(document.getElementById("number2").value);
    difference = firstNum - secondNum;
    document.getElementById("answer").innerHTML = "The difference of " + firstNum + " and " + secondNum + " is " + " " + difference + ".";
}
function multiply(){
    var firstNum, secondNum, product;
    firstNum = parseInt(document.getElementById("number1").value);
    secondNum = parseInt(document.getElementById("number2").value);
    product = firstNum * secondNum;
    document.getElementById("answer").innerHTML = "The product of " + firstNum + " and " + secondNum + " is " + " " + product + ".";
}
function divide(){
    var firstNum, secondNum, quotient;
    firstNum = parseInt(document.getElementById("number1").value);
    secondNum = parseInt(document.getElementById("number2").value);
    quotient = firstNum / secondNum;
    document.getElementById("answer").innerHTML = "The quotient of " + firstNum + " and " + secondNum + " is " + " " + quotient + ".";
}
function modulus(){
    var firstNum, secondNum, remainder;
    firstNum = parseInt(document.getElementById("number1").value);
    secondNum = parseInt(document.getElementById("number2").value);
    remainder = firstNum % secondNum;
    document.getElementById("answer").innerHTML = "The remainder when " + firstNum + " is divided by " + secondNum + " is " + " " + remainder + ".";
}
