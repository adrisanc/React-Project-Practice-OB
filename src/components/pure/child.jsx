import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
  const messageRef = useRef("");

  const nameRef = useRef("");

  function pressButton() {
    const text = messageRef.current.value;
    alert(`Text in Input: ${text}`);
  }
  function pressButtonParams(text) {
    alert(`Text: ${text}`);
  }

  function submitName(e) {
    e.preventDefault();
    update( nameRef.current.value);
  }

  return (
    <div style={{ background: "Cyan", padding: "30px" }}>
      <p
        onMouseOver={() => {
          console.log("On mouse Over");
        }}
      >
        Hello, {name}
      </p>
      <button
        onClick={() => {
          console.log("Botón 1 pulsado");
        }}
      >
        Botón 1
      </button>
      <button onClick={pressButton}>Botón 2</button>
      {/* Si es una funcion que recibe parametros no se debe poner así
        <button onClick={pressButtonParams('hELLO')}> si no dentro de una funcion anonima
        como se muetra en la siguiente linea */}
      <button onClick={() => pressButtonParams("hELLO")}>Botón 3</button>
      <input
        placeholder="Send a text to your father"
        onFocus={() => {
          console.log("Input focused");
        }}
        onChange={(e) => {
          console.log("Input Changed", e.target.value);
        }}
        onCopy={() => {
          console.log("Copied text from Input");
        }}
        ref={messageRef}
      ></input>

      <button onClick={() => send(messageRef.current.value)}>
        Send Message
      </button>

      <div style={{marginTop: '20px'}}>
        <form onSubmit={submitName}>
            <input ref={nameRef} placeholder="New Name">
            </input>
            <button type="submit"> Update Name</button>
        </form>
      </div>
    </div>
  );
};

export default Child;
