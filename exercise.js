function repeatHello(callback){
    let id = setInterval(callback, 1000)
}

repeatHello(() => console.log("hello"))