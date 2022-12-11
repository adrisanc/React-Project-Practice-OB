import React from 'react'

const Ejemplo4 = (props) => {
  return (
    <div>
        <h1>*** Ejemplo del CHILDREN PROPS***</h1>
        <p> Nombre: {props.name}</p>
        {/* props.children pintará por defecto aquiello
        que se encuentre entre las etiqutas de apertura y cierra
        de este componente desde el componenete de orden superior */}
        {props.children}
    </div>
  )
}

export default Ejemplo4