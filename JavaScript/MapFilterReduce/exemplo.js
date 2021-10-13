//Usando o map

const arrayMap = [1,2,3,4,5,6]

arrayMap.map((item) => item * 2)

//retorno [2,4,6,8,10,12]
//Aplicar no console do navegador.

// Usando o forEach

const arrayForEach = [1,2,3,4,5]
arrayForEach.forEach((item) => item * 2)

//retorno: undefined

// Utilizando o Filter.

const frutas = ['maçã fuji','maçã verde','laranja','abacaxi']

frutas.filter((fruta) => fruta.includes('maçã'))

//retorno ['maçã fuji' , 'maçã verde']

// Usando o reduce.

const callbackFn = function(accumulator,currentValue,index,array){
    // do something
}

array.reduce(callbackFn,initilValue)