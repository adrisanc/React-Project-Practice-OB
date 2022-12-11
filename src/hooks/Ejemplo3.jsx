// * Ejemplo Hooks:
// -useState()
// -useContext()

import React, { useState, useContext } from 'react'

/**
**@returns Componente 1 
** Dispone de un contexto que va a tener un valor
** que recibe desde el padre
**/

const miContexto = React.createContext(null)

const Componente1 = () => {
    // Inicializamos un estado vacio que va a rellenarse con los
    // datos del contexto del padre

    const state = useContext(miContexto)

  return (
    <div>
        <h1>
            El Token es: {state.token}
        </h1>
        {/* Pintamos el componente */}
        <Componente2></Componente2>
    </div>
  )
}

const Componente2 = () => {
    
    const state = useContext(miContexto)

  return (
    <div>
        <h2>
            La sesión es: {state.sesion}
        </h2>
    </div>
  )
}



export default function MiComponenteConContexto() {

    const valorInicial = {
        token: '1234557',
        sesion: 1
    }
//  Creamos el estado de este componente
    const [sesionData, setSession] = useState(valorInicial);

    function actualizarSession(){
        setSession({
            token: 'JD1S123416',
            sesion: sesionData.sesion + 1
        })
    }
  return (
    <div>
        <miContexto.Provider value={sesionData}>
        {/* Todo lo que esté aquí dentro puede leer los datos de sessionData */}
        {/* Además, si se actualiza, los componentes de aquí, tambien lo actualizan */}
        <h1> *** Ejemplo de useState() y useContext() ****</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSession}>Actualizar Sesion</button>
        </miContexto.Provider>
    </div>
  )
}


