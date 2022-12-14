import React, { useState } from "react";

// Definiendo estilos en constants:
// ?Estilo para usuario logueado
const loggedStyle = {
  color: "white",
};

// ?Estilo para usuario no logueado
const unLoggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};

const GreetingStyle = (props) => {
  // Generamo un estadp para el componente
  //  y así controlar si el usuario está o no logueado
  const [logged, setLogged] = useState(false);

  return (
    <div style={logged ? loggedStyle : unLoggedStyle}>
      { logged ? (<p>Hola, {props.name}</p>) : (<p>Please Login</p>)}
      <button onClick={()=>{
        console.log('Botón pulsado');
        // !logged  = pasa de un true a false o viceversa
        setLogged(!logged);
      }}>
      {logged ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default GreetingStyle;
