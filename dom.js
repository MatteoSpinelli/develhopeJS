let btn = document.querySelector("form button")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    getData()
        .then(([comuni, codiciComuni]) => {
            let table = document.createElement("table")
            for(let i = 0; i < comuni.length; i++){
                let row = document.createElement("tr")
                let tdComuni = document.createElement("td")
                let tdCodici = document.createElement("td")
                tdComuni.innerText = comuni[i]
                tdCodici.innerText = codiciComuni[comuni[i]]
                row.append(tdComuni, tdCodici)
                table.append(row)
            }
            document.body.append(table)
        })
        .catch((err) => console.error(err))
})


async function getData(){
    let comuni = await fetch("https://comuni-istat-api.belicedigital.com/api/comuni")
    let codiciComuni = await fetch("https://comuni-istat-api.belicedigital.com/api/comuni/codici")
    comuni = await comuni.json()
    codiciComuni = await codiciComuni.json()
    return [comuni, codiciComuni]
}