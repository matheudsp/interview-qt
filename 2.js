let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

function generateFibonacci(number){

    for(let i=2; i< (number+1);i++){
        fibonacci[i] = fibonacci[i-2] + fibonacci[i -1]
    }
    console.log(fibonacci)

    let search = fibonacci.indexOf(number)
    if((search) === -1){
        console.log("nao existe na seq de fibonacci")
    }else{
        console.log("existe e esta na posicao",search,"da arr")
    }
    

}

generateFibonacci(13)