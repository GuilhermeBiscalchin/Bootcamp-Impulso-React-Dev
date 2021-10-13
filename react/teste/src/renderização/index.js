import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'

// para utilizar os dois elementos na renderização, utilizando o metodo JSX
const element = 'Digital Innovation'
const element2 = <h1>Hello World</h1>

// isso é um componente
function App() {
    return(

    <div>
        {element}
        {element2}
    </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />,rootElement)