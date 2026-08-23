 const add7 = (number) => {
  return number + 7;
}

const multiply = (num1, num2) => {
  return num1 * num2;
}


const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function lastLetter (string){
  return string.slice(-1)
}


let startingNum = 6;
 
let result = add7(startingNum)

let result1 = add7(result)

let result2 = multiply(result1, 5)

console.log(result2)