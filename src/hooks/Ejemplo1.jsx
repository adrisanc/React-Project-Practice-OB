import React, { useState } from "react";

const Ejemplo1 = () => {
    //Valor inicial para un cpntador
  const valorIncial = 0;
    //valor inicial para una persona
  const personaInical = {
    nombre: "yasmin",
    email: "yasmin@hotmail.com",
  };

    //   queremos que el VALORiNICIAL y PERSONAiNICIAL sean 
    //   parte del estado del componte para así poder gestionar su cambio
    //  y que éste se vea reflejado en la vista del componente.

    // const[nombreVariable, funcionParaCambiar] = useState(valirInicial)

  const [contador, setContador] = useState(valorIncial);
  const [persona, setPersona] = useState(personaInical);

    // Función para actualizar el estado de persona  en el componente
  function incremenContador() {
    // ?funcionaParaCambiar(nuevoValor)
    setContador(contador + 1);
  }

  function actualizarPersona() {
    setPersona({
      nombre: "nicolas",
      email: "nicolas@gmail.com",
    });
  }
  return <div>
    <h1>*** Ejemplo de useState() ***</h1>
    <p> CONTADOR : {contador}</p>
    <p>DATOS DE LA PERSONA: </p>
    <p>NOMBRE: {persona.nombre}</p>
    <p>EMAIL:{persona.email}</p>
    {/* Bloque de botones para actualizar el estado del componente */}
    <button onClick={incremenContador}> incrementar Contador</button>
    <button onClick={actualizarPersona}> Actualizar Persona</button>
  </div>;
};

export default Ejemplo1;
