let operation=Number(prompt("Welcome \nSelect the operation you wish to perform :\n \nenter 1 for addition\nenter 2 for subtraction\nenter 3 for multiplcation\nenter 4  for division"))
let firstNumber=Number(prompt("Enter first number \n"))
let secondNumber=Number(prompt("Enter second number \n"))
let answer="";


if(operation === 1){
    answer=firstNumber + secondNumber
}
else if(operation === 2){
    answer=firstNumber - secondNumber
}
else if(operation === 3){
    answer=firstNumber * secondNumber
}
else if(operation === 4){
    answer=firstNumber / secondNumber
   
}else{
    alert("enter a valid option")
}
alert("answer = "+answer)


