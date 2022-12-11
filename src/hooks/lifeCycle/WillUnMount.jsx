// Ejemplo de uso del ciclo de vida del metodo componenteWillUnMount
//  de ciclo de vida en componente clase y el hook de ciclo de vida
// en componte funcional
// Cundo el componente va a desaparecer

import React, { Component, useEffect } from "react";

export class WillUnMount extends Component {
  componentWillUnmount() {
    console.log("Comportamiento antes de que el componente desaparezca");
  }
  render() {
    return (
      <div>
        <h1>WillUnMount</h1>
      </div>
    );
  }
}

export function WillUnMountHook() {
  useEffect(() => {
    // Aqui no ponemos nada
    return () => {
      console.log("Comportamiento antes de que el componente desaparezca");
    };
  }, []);

  return (
    <div>
      <h1>WillUnMount</h1>
    </div>
  );
}
