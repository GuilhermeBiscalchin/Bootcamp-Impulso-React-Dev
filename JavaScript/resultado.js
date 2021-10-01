function sum (number1 , number2){
    var number1 = parseInt(Math.random() * 21);
    var number2 = parseInt(Math.random() * 11);
    console.log(number1, number2)
    
    var valor1 = document.getElementById("number1")
    var valor2 = document.getElementById("number2")
    var somatoria = document.getElementById("soma")
    var condicao1 = document.getElementById("igual")
    var condicao2 = document.getElementById("maior")
    valor1.innerHTML = number1
    valor2.innerHTML = number2



    if(number1 == number2){
        console.log("Numero 1 e Numero 2 são iguais")
        condicao1.innerHTML = "Numero 1 e Numero 2 são iguais"
        
    }else{
        console.log("Numero 1 e Numero 2 não são iguais")
        condicao1.innerHTML = "Numero 1 e Numero 2 não são iguais"
    }

    var soma = number1 + number2

    console.log("O resultado da soma é = " + soma)
    somatoria.innerHTML = "O resultado da soma é = " + soma

    if(soma > 10 && soma < 20){
        console.log("Soma maior que 10 e menor que 20")
        condicao2.innerHTML = "Soma maior que 10 e menor que 20"
    }else{
        console.log("Soma não é maior que 10 e menor que 20")
        condicao2.innerHTML = "Soma não é maior que 10 e menor que 20"
    }

}

