const mensal = [
    {name: 'SP', fat: "67.836,43"},
    {name: 'RJ', fat: "36.678,66"},
    {name: 'MG', fat: "29.229,88"},
    {name: 'ES', fat: "27.165,48"},
    {name: 'Outros', fat: "19.849,53"}
];

let fatTotal = 0
percentual = []


for(var i = 0; i < mensal.length; i++) {
    fatTotal += parseFloat(mensal[i].fat)
}

for(var i = 0; i < mensal.length; i++) {
    
    percentual.push({"name":mensal[i].name, "fat":(parseFloat(mensal[i].fat) / fatTotal)*100})
}


console.log(fatTotal)

percentual.forEach(element => console.log("O Estado", element.name, "realizou", element.fat))