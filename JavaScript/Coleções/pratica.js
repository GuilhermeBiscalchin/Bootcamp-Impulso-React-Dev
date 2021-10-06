//Map

function getAdmin(map){
    let admins = []
    for([key,value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }

    return admins
}

const usuarios = new Map()

usuarios.set('Luiz','Admin')
usuarios.set('Guilherme','Admin')
usuarios.set('Augusto','User')
usuarios.set('Claudio','Admin')

console.log(getAdmin(usuarios))

//Set

const numeros = [30,30,40,5,223,2049,3034,5]

const mySet = new Set(numeros)

console.log(mySet)

// Maneira correta, com a tecnica do spread '...'

function valoresUnicos(arr){
    const mySet2 = new Set(arr)

    return [...mySet2]
}

console.log(valoresUnicos(numeros))