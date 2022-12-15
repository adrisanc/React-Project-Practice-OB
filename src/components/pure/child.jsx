import React from 'react'

const Child = () => {

    function pressButton(){
        alert(`DefaultText`)
    
    }
    function pressButtonParams(text){
        alert(`Text: ${text}`)

    }


  return (
    <div>
        <p onMouseOver={()=>{ console.log('On mouse Over')}}>Child Component</p>
        <button onClick={() =>{console.log('Botón 1 pulsado')}}>
            Botón 1
        </button>
        <button onClick={pressButton}>
            Botón 2
        </button>
        {/* Si es una funcion que recibe parametros no se debe poner así
        <button onClick={pressButtonParams('hELLO')}> si no dentro de una funcion anonima
        como se muetra en la siguiente linea */}
        <button onClick={() =>pressButtonParams('hELLO')}>
            Botón 3
        </button>
    </div>
  )
}

export default Child