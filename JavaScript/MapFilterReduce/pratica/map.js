// Multiplicação de Numero.
// Minha resolução.
//sem utilizar o this.
const numeral = 5
const numerosMultiplicar = [1,2,3,4,5,6,7,8,9,10]

function tabuadaSemThis(array){
    return array.map(function(item){
        return item * numeral
    })
}
console.log(tabuadaSemThis(numerosMultiplicar))

//Utilizando o this.

const one = {
    value:1
}

const two = {
    value:2
}

function tabuadaComThis(arr,thisArg){
   return arr.map(function(item){
       return item * this.value
   },thisArg)
}

const numerosParaMultiplicar = [1,2,3,4,5,6,7,8,9,10]

console.log('Tabuado do 1 ->',tabuadaComThis(numerosParaMultiplicar,one))
console.log('Tabuado do 2 ->',tabuadaComThis(numerosParaMultiplicar,two))


// resolução DIO

const apple = {
    value:2,
}

const orange = {
    value:3,
}

function mapComThis(arr,thisArg){
    return arr.map(function(item){
      return  item * this.value;
    },thisArg)
}

const nums = [1,2]

console.log('this -> apple', mapComThis(nums,apple))
console.log('this -> orange', mapComThis(nums,orange))

function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2
    })
}

const num = [2,4,6,8,10]
console.log(mapSemThis(num))