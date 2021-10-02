// UPPER CASE SNAKE CASE
// SOME_AEWSOME_VAR -> muito utilizado para constantes

// Variáveis
var a =1;
var b =3;

if(a === 1){
    var a = 11
    let b = 22 // função acaba aqui, pois a let está dentro da funciono, é um escopo de bloco

    console.log(a) // 11
    console.log(b) // 22
}

console.log(a) // 11
console.log(b) // 2

//Escopos diferentes
// Hoisting => atribuir uma variável antes de declarar a mesma.
// Redeclaração => apenas o 'var', igual a alguma coisa ou nada.
// Reatribuição => pode ser feito com o 'let', nome da variavel, 
//sem a palavra reservada na frente


//EXEMPLO

numberOne = 1 //atribuição

console.log(numberOne + 2)

var numberOne; // valor declarado.

//let numberOne // da um erro, pois com o 'let',tem que declarar antes

var firstName = "Joao"
var lastName = 'Souza'

if(firstName === 'Joao'){
    let lastName = 'Rodrigues'
    var firstName = 'Pedro'
     lastName = 'Silva' // Reatribuição.
}

console.log(firstName,lastName)

// Seguração utilizar o 'let'

// Constantes 

//Declarada em SNAKE_UPPER_CASE
//Escopo de bloco
//Não faz hoisting

const DAYS_IN_A_WEEK = 7
const MY_NAME = "Guilherme"

const FIRST_NAME = 'Guilherme'
// não pode reatribuir uma constante, e nem redeclarar uma constante.

const ULTIMO_NAME = 'Augusto'
console.log(ULTIMO_NAME)


