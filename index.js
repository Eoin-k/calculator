let firstNumber = "";
let operator = undefined;
let secondNumber = "";
let displayOutput = document.getElementById('readout')
let body = document.getElementsByTagName("body");
const decimal = document.getElementById("decimal-button") 
const buttons = document.getElementsByClassName("number-button");
const operators = document.getElementsByClassName("operator")
const clearButton = document.getElementById("clear");
const num1Display = document.getElementById("firstNumberDiv")
const num2Display = document.getElementById("secondNumberDiv")
const operatorDisplay = document.getElementById("operatorDiv")
const sumButton = document.getElementById("equals-button")
const deleteButton = document.getElementById("delete");

for (let button of buttons) {
    button.addEventListener("click", (e) =>{
        if (operator === undefined) {
            firstNumber += button.value;
            num1Display.textContent = firstNumber + " ";
            decimal.addEventListener("click", () =>{
                decimal.disabled = true;
          })            
    }
            if(operator !== undefined && button.value !== "=") {
                secondNumber += button.value;
                num2Display.textContent = secondNumber + " ";
                decimal.addEventListener("click", () =>{
                    decimal.disabled = true;
                })
                console.log(secondNumber  + " Second");
            }
        })       
}

    for (let button of operators){
    button.addEventListener("click" , (e) => {
        if (operator == undefined){
        operator = button.value ; 
         decimal.disabled = false;
        console.log(operator)
        operatorDisplay.textContent = operator 
        }
    })
}
 

const giveResult = () => {
    firstNumber = operate(parseFloat(firstNumber),parseFloat(secondNumber),operator);
    operator = undefined;
    secondNumber = "";
    num2Display.textContent = "";
    operatorDisplay.textContent = ""
    num1Display.textContent = `${firstNumber}`;

}

function clearDisplay () {
    num1Display.textContent = '0';
    num2Display.textContent = "";
    operatorDisplay.textContent = ""
    firstNumber = '';
    secondNumber = '';
    operator = undefined;
    decimal.disabled = false;
}

deleteButton.addEventListener("click", () =>{
    if (operator === undefined && firstNumber !== ""){
        firstNumber = firstNumber.slice(0,-1)
        num1Display.textContent = firstNumber
        if (firstNumber == "" ){
            num1Display.textContent = "0"
            firstNumber = ""
        }
    } 
    if(operator !== undefined && firstNumber !== ""){
        secondNumber = secondNumber.slice(0,-1)
        num2Display.textContent = secondNumber
    }

    if(secondNumber == "" && firstNumber !== ""){
        operator = undefined 
        operatorDisplay.textContent = "";
    }

})

function operate(num1,num2,operator){
    
    if(operator == "+") {
        return add(num1,num2)
    } if (operator == "-"){
        return subtract(num1,num2);
    } if (operator == "*"){
        return multiply(num1,num2)
    } if (operator == "/"){
        if (num1 == 0 || num2 == 0){
            clearDisplay();
            alert("Nuh Uh cant do that sorry!")
            firstNumber = ""
            return
        } else{
        return divide(num1,num2);
        }
    }
    if (mum1 !== "" || operator !== undefined || num2 !== ""){
        return
    }
}


const add = (a,b) => {
	return a + b;
};

const subtract = (a,b) => {
	return a - b ;
};

const multiply = (a,b) => {
return a * b;
};
const divide = (a,b) => {
    return a / b;
}

clearButton.addEventListener("click", clearDisplay);
sumButton.addEventListener("click", giveResult);