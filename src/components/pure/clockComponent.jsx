import React, { useState, useEffect } from "react";

const ClockComponent = () => {
  const edadInicial = {
    fecha: new Date(),
    edad: 0,
    nombre: "Yasmin",
    apellidos: "Orjuela Sanchez",
  };
  const [age, setAge] = useState(edadInicial);

  useEffect(() => {
    let edad = setInterval(() =>incrementarEdad(), 1000);
    return () => {
      clearInterval(edad);
    };
  }, [age]);

  // let edad = prevState.edad +1;
  //      return {
  //         ...prevState,
  //         fecha: new Date(),
  //         edad
  //      }

  function incrementarEdad() {
    setAge({
      fecha: new Date(),
      edad: age.edad + 1,
      nombre: "Yasmin",
      apellidos: "Orjuela Sanchez",
    });
  }

  return (
    <div>
      <h2>
        Hora Actual: {age.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {age.nombre} {age.apellidos}
      </h3>
      <h1>Edad: {age.edad}</h1>
    </div>
  );
};

export default ClockComponent;
