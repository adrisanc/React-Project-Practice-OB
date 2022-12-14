import React, { useState } from "react";
import Child from "../pure/child";

const Father = () => {
  
  const [name, setName] = useState('Yasmin')
  
  function ShowMessage(text) {
    alert(`Message received: ${text}`);
  }

  function updateName(newName) {
    setName(newName);
  }
  return (
    <div style={{ background: "tomato", padding: "30px" }}>
      <Child name={name} send={ShowMessage} update={updateName}></Child>
    </div>
  );
};

export default Father;
