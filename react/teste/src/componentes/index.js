import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Button from './Button'

function soma (a,b)  {
    alert(a+b)
}
function Components()  {


        return(
       <h1>
           Hello!
        <Button onClick ={() => soma(10,20)} name="Guilherme Augusto" />
       </h1>

    )
}

export default Components