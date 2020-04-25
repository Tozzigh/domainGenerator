function changeText() {
    var elementi =
    {
        who: ["grandma", "alien"],
        thing: ["banana", "flower"],
        where: ["eye", "face"],
    }

    var arrayDom = []
    
    for (let x = 0; x < (elementi.who).length; x++) {
        for (let y = 0; y < (elementi.who).length; y++) {
            for (let z = 0; z < (elementi.who).length; z++) {
                arrayDom.push(elementi.who[x].concat(elementi.thing[y], elementi.where[z], ".com", "<br>"))
            }
        }
    }
    for (let dom in arrayDom){
        document.write("<h1>"+arrayDom[dom]+"</h1>");
    }
}
changeText();