function sumUntil(maxValue) {
    let sum = 0
    let i = 1
    while (i <= maxValue){
      sum += i
      i++
    }
    return sum
}

console.log(sumUntil(100));
