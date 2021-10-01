//Outra maneira de fazer a mesma comparação

function comparaNumeros(num1 , num2){
    // tipo de validação
    if(!num1 || !num2) return 'Defina dois números!'
    const primeiraFrase = criaPrimeiraFrase(num1,num2)
    const segundaFrase = criaSegundaFrase(num1,num2)

    return `${primeiraFrase} ${segundaFrase}`
    
    //const saoIguais = num1 === num2;
    // comparação de boolean, ou 'true' ou 'false'

   // const soma = num1 + num2;

    //if ternário
    //return saoIguais ? "São iguais" : "não são iguais"

    /*
    if(saoIguais){
        return "São iguais"
    }

    return "Não são iguais"
    */
}

function criaPrimeiraFrase(num1,num2){
    let saoIguais = ''
    
    if(num1 !== num2){
        saoIguais = 'não'
    }

    return ` Os números ${num1} e ${num2} ${saoIguais} são iguais`
}

function criaSegundaFrase(num1,num2){
    const soma = num1 + num2;

    let resultado10 = 'menor'
    let resultado20 = 'menor'
    const compara10 = soma > 10;
    const compara20 = soma > 20

    if(compara10){
        resultado10 = 'maior'
    }

    if(compara20){
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma} , que é ${resultado10} que 10 e ${resultado20} que 20`
}

// chamando a função.

console.log(comparaNumeros(20,20))