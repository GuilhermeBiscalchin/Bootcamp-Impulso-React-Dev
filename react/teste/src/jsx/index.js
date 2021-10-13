import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'

function sum(a,b){
    return a + b
  }
  
  //primeiro JSX -> lança como função na renderização do arquivo.
  function primeiroJSX(){
    return(
      <div className = "teste">
        Guilherme Augusto - Introdução ao ReactJS
        <h1>Soma: {sum(10,20)}</h1>
      </div>
    )
  }


const Jsx = () => {
    return (
      <div>
        {primeiroJSX()}
      </div>
    );
  }

export default Jsx