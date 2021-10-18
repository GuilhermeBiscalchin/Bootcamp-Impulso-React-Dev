import React from 'react';

//Evitar o re-render



//Exemplo onClick

const Evento = () => {
    
    const name = "Digital Innovation"
    
    const handleChange = (e) => {
        const {value} = e.target
        console.log(value)
    }

    const showEvent = (e) => {
        console.log('Evento de onClick!')
        //Tenho a descrição de todos os eventos
        console.log(e)
        alert(name)
    }
    
    const Button = <button onClick ={showEvent}>Mostrar Evento!</button>
    const deleteButton = <button onClick={showEvent}>Deletar</button>
    return(
        <div>
            <h1>Manipulação Eventos em ReactJs</h1>
            <input onChange = {handleChange}/>
            {Button}
            <br/>
            {deleteButton}
        </div>

    )
}

export default Evento