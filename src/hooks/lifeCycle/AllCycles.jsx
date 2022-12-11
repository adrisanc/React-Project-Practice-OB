import React, { useEffect } from "react";

export function AllCycles() {
  // Se debería tener solo un useEfect dentro de cada componente
  useEffect(() => {
    console.log("Componente creado");

    const intervalID = setInterval(()=>{
        document.title = `${new Date()}`
        console.log('actulización del componente');
    }, 1000)

    return () => {
      console.log("Componente va a desaparacer");
      document.title = "Tiempo Detenido"
      clearInterval(intervalID)
    };
  }, []);

  return <div>AllCycles</div>;
}
