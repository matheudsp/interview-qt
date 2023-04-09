const diario = ["67.836","36.678","29.229","27.165","19.849"];

let min = Math.min(...diario);
let max = Math.max(...diario);
let soma = 0 
let dias = 0


for (let i =0; i < diario.length; i++){
    soma += parseFloat(diario[i])
    
}

let mediaMensal = (soma / diario.length) 

for (let i =0; i < diario.length; i++){
    if(parseFloat(diario[i]) > mediaMensal){
        dias++
    }
}

console.log(mediaMensal)
console.log(dias)
