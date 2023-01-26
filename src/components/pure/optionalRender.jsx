import React, { useState } from "react";

//Login / Logout Buttons components

// Styles props
let red = 0;
let green = 200;
let blue = 150;

const loginStyles ={
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
}

const logoutStyles ={
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold'
}


const LoginButton = ({ loginAction, propStyle }) => {
  return <button style={propStyle} onClick={loginAction}>Login</button>;
};

const LogoutButton = ({ logoutAction, propStyle }) => {
  return <button style={propStyle} onClick={logoutAction}>Logout</button>;
};

const OptionalRender = () => {
  const [access, setAccess] = useState(false);
  const [nMessages, setNmessages] = useState(0);

  let optionalButton;

  // function updateAccess () {
  //     setAccess(!access);
  // }

  const loginAction = () => {
    setAccess(true);
  };

  const logoutAction = () => {
    setAccess(false);
  };

  const addMessages = () => {
    setNmessages(nMessages + 1);
  };
  // if (access) {
  //   optionalButton = <button onClick={updateAccess}>Logout</button>
  // }else{
  //     optionalButton = <button onClick={updateAccess}>Login</button>
  // }

  if (access) {
    optionalButton = <LogoutButton propStyle={logoutStyles} logoutAction={logoutAction}></LogoutButton>;
  } else {
    optionalButton = <LoginButton propStyle={loginStyles} loginAction={loginAction}></LoginButton>;
  }

  return (
    <div>
      {optionalButton}

      {/* If there are more than one message */}
      {/* {nMessages > 1 && <p> There are {nMessages} new messages...</p>}
      {nMessages === 1 && <p> There is {nMessages} new message..</p>} */}
      
      {/* If aren't there messages */}
      {/* {nMessages === 0 && <p> There are not new messages... </p>} */}

      {/* Ternary Operator */}
      {access ? (
        <div>
          {nMessages > 0?
          <p> You have {nMessages} new message{nMessages > 1 ? 's': ''}..</p> : 
          <p> There are not new messages... </p> }
          <button onClick={addMessages}>{nMessages === 0 ? 'Add yout first message': 'add new message' }</button>
        </div>
      ): null}
      
    </div>
  );
};

export default OptionalRender;
