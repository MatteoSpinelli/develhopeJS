const number = 15;
const prom = new Promise((resolve, reject) => {
    number > 10 ? resolve("Greater!") : reject("Smaller!")
})

prom
    .then(val => console.log(val))
    .catch(err => console.error(err))
