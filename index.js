let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let displayOutput = {}

function operate(num1,operator,num2){
    if(operator == "+") {
        return add(num1,num2)
    } if (operator == "-"){
        return subtract(num1,num2);
    } if (operator == "*"){
        return multiply(array)
    } if (operator == "/"){
        return divide(num1,num2);
    }
}

const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b ;
};

const sum = function(array) {
	let sum =  array.reduce((total, amount) => total + amount, 0)
  return sum;
};

const multiply = function(array) {
let multiply = array.reduce((total, amount)=> total * amount)
return multiply;
};
const divide = function(a,b){
    return a / b;
}

 
function displayOutput (){

}