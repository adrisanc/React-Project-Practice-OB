// Ejemplo de uso del ciclo de vida del metodo componenteDidUpdate
//  de ciclo de vida en componente clase y el hook de ciclo de vida
// en componte funcional

import React, { Component, useEffect } from "react";

export class DidUpdate extends Component {
  componentDidUpdate() {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado"
    );
  }
  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    );
  }
}

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado"
    );

    // Para que se ejecute todas las veces se quita la lista, y así no tendra un limite de ejecución
  });

  return (
    <div>
      <h1>DidUpdate</h1>
    </div>
  );
};
