// Numeros pares.
// Minha resolução.

const pares = [55,10,6,47,8,66,3,20,17,8,9,10,99,100,64]

function filtrarPares(array){
    return array.filter(function(item){
        return item % 2 === 0
    })
}

console.log(filtraPares(pares))


// resolução DIO

function filtraPares(arr){
    return arr.filter(callback)
}

// função fora.
function callback(item){
    return item % 2 === 0
}

const meuArray = [1,23,55,67,30,2,4]

//console.log(filtraPares(meuArray))