import React from 'react'

function Button(props){
    
    const { name,onClick } = props
    
    return(
        <button onClick={onClick}>{name}</button>

    )
}

export default Button

// Defini as propriedades de um Botão, sem regra de negocios.
// Alterei o nome na outra página.