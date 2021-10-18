import React from 'react';



const listaClientes = [
    {
        id: 1,
        nome: 'Pelé',
        clubes: ['Santos','Cosmo']
    },
    {
        id:2,
        nome:'Romário',
        clubes: ['Flamengo','Vasco','Fluminense','Barcelona','PSV']
    },
    {
        id: 3,
        nome: 'Gaucho',
        clubes: ['Grêmio','Barcelona','Milan','Flamengo','Atlético-Mg']
    },
    {
        id: 4,
        nome:'Marcelinho',
        clubes: ['Corinthians','Valencia']
    }
]


const ListKey = () => {

const renderClientes = (cliente, index) => {
    return(
        <div key={`clientes-${cliente.id}`}>
            <li>{cliente.nome}</li>
            {cliente.clubes.map(renderClubes)}
        </div>
    )
}

    const renderClubes = (clube,index) => {
        return(
            <div style = {{paddingLeft: '30px'}} key={`clube-${index}`}>
                <li>{clube}</li>
            </div>
        )
    } 

    return(
        <div>
            Hello!
            <div>
                <ul>
                {listaClientes.map(renderClientes)}
                </ul>
            </div>
        </div>
    )
}

export default ListKey