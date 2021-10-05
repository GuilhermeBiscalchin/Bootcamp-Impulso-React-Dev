// O array de alunos

const alunos = [
    {
        nome:'João',
        nota: 5,
        turma: '1B',
    },

    {
        nome:"Sofia",
        nota:6,
        turma:'1C'
    },
    {
        nome:'Ronaldo',
        nota:9,
        turma:'1B'
    }
]

// essa á funçao, com os parametros que quero
function alunosAprovados(alunos, media){
    //criei um array, para mostrar os alunos aprovados
    let aprovados = []

    //loop para percorrer o array global
    for(let i=0; i < alunos.length; i++){
        //estou buscando os objetos no array global
        let {nota, nome} = alunos[i]

        //verificação de quem passou, e subir o nome do o nome dos aprovados no array vazio.
        if(nota >= media){
            aprovados.push(nome)
        }
    }

    return aprovados
}
//coloco o parametro do nome do aluno, mais a media que quero.
console.log(alunosAprovados(alunos,9))

// Manipulação de 'this.'

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;

    
}

const pessoa1 = {
    nome:'Guilherme',
    idade:30,
}

const pessoa2 = {
    nome:'Augusto',
    idade:25,
}

const animal1 = {
    nome:'Fiona',
    idade:5,
    raçã:'Pitbull'
}
//passo o parametro que se espera, criado na função
//separado por virgula.
console.log(calculaIdade.call(pessoa2,30))

// para o apply,enviar como se fosse array,[].
console.log(calculaIdade.apply(pessoa1,[30]))
