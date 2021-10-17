import React from 'react';
import ReactDOM from 'react-dom';


//criação de elementos 

const buttonA = <button>Historico Cliente</button>
const buttonB = <button>Cadastrar Cliente</button>


const historico = true 

const Condicional = () => {

    const renderHistorico = () => (
        <div>
               Existe um historico de cliente!!!  
               <br/>
               {buttonA}
             </div>
    )

    const cadastrarCliente = () => (
        <div>
                Cadastrar Cliente
                <br/>
                {buttonB}
                </div>
    )

    const nomeCliente = () => {
        if(!historico) return null

        return(
            <div>
                <h1>Nome do Cliente: Guilherme</h1>
            </div>
        )
    }

    return(
        <div>
            <p>Digital Innovation One</p>
            <p>Inicio Renderização Condicional!!!</p>
        {historico ? renderHistorico() : cadastrarCliente()}
        <div>
            {nomeCliente()}
        </div>
        </div>
    )
}

export default Condicional