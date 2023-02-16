let inputs = document.querySelectorAll("input")

function setColor(){
    let body = document.querySelector("body")
    color = localStorage.getItem("color")
    bgColor = localStorage.getItem("background")
    inputs.forEach(element => {
        element.value = element.name === "color" ? color : bgColor
    });
    body.style.color = color
    body.style.backgroundColor = bgColor
}


inputs.forEach((input) => {
    input.addEventListener("change", (evt) => {
        let color = evt.target.value 
        localStorage.setItem(evt.target.name, color)
        setColor()
    })
})

setColor()