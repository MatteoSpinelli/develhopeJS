const isLogged = true;
const promise = new Promise((resolve, reject) => {
    isLogged ? 
        resolve(Math.random()) : reject(new Error("Not Logged"))
})

function checkNum(num){
    return new Promise((resolve, reject) => {
        if (num > 0.5){
            resolve({name: "John", age: 24})
        } else{
            reject(new Error("num smaller than 0.5"))
        }
    })
}

promise
    .then(checkNum)
    .then((val) => console.log(val))
    .catch((error) => console.log(error))
    .finally(() => console.log("Finally"))