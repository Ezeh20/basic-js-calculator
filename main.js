let firstNumber=Number(prompt("Enter first number \n"))
let secondNumber=Number(prompt("Enter second number \n"))
let operation=Number(prompt("what operation do you want to carry out :\n \nenter 1 for addition\nenter 2 for subtraction\nenter 3 for multiplcation\nenter 4  for division"))


if(operation === 1){
    answer=firstNumber + secondNumber
    alert(answer)
}
else if(operation === 2){
    answer=firstNumber - secondNumber
    alert(answer)
}
else if(operation === 3){
    answer=firstNumber * secondNumber
    alert(answer)
}
else if(operation === 4){
    answer=firstNumber / secondNumber
    alert(answer)
}else{
    alert("enter a valid option")
}


