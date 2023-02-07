const isLogged = true;
const promise = new Promise((resolve, reject) => {
    isLogged ? 
        resolve(Math.random()) : reject("Not logged")
})

function checkNum(num){
    return new Promise((resolve, reject) => {
        if (num > 0.5){
            resolve({name: "John", age: 24})
        } else{
            reject("error")
        }
    })
}

promise
    .then(checkNum)
    .then((val) => console.log(val))
    .catch((error) => console.log(error))