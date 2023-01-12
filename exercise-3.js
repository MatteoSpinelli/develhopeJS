const sum = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  return a / b;
}

const log = (value) => {
  console.log(value);
}

log(divide(subtract(multiply(sum(2,4), sum(5,2)), 2), 5))
// 8

/* 
let sum1 = sum(2, 4)
let sum2 = sum(5, 2)
let mult1 = multiply(sum1, sum2)
let sub1 = subtract(mult1, 2)
let div1 = divide(sub1, 5)
log(div1) 
*/
