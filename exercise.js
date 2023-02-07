function printAyncName(callback, str){
    setTimeout(callback, 1000)
    setTimeout(() => console.log(str), 2000)
}

printAyncName(() => console.log("Hello"), "Matteo")