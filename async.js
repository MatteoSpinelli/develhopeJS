function printSome(some){
  return new Promise((resolve, reject) => {
    Math.random() > 0.3 ? resolve(some) : reject("Error")
  })
}

async function display(){
  return await printSome("Ciao")
}
display().then((val) => console.log(val)).catch((val) => console.log(val))
console.log("run")