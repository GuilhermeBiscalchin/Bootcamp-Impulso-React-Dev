
function somaNumeros(arr){
  return  arr.reduce(function(prev,current){
      console.log({prev})
      console.log({current})
        return prev + current;
    },0)
}

const arr = [1,2]

console.log(somaNumeros(arr))

const lista = [
    {
    name:'sabao em po',
    preco: 17
},
{
    name:'ceral',
    preco: 12
},
{
    name:'refrigerante',
    preco: 5
},
{
    name:'carne',
    preco:40
}
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel,lista){
    return lista.reduce(function(prev,current,index){
        console.log("rodada",index + 1)
        console.log({prev})
        console.log({current})
        return prev - current.preco
    },saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel,lista))