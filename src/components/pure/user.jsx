import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { User } from "../../models/user.class";

const UserComponent = ({ user, updateUser, deleteUser }) => {
  useEffect(() => {
    console.log("Task Created");
    return () => {
      console.log(`Task: ${user.name} is going to unMount`);
    };
  }, [user]);

  function userStateBadge() {
    if(user.conectado){
      return(
        <span className="badge bg-success">Conectado</span>
      )
    }
    else{
      return(
        <span className="badge bg-danger">Desconectado</span>
      )
    }
  }

  function userStateIcon(){
    if(user.conectado){
      return(
        <i onClick={() => updateUser(user)} className="bi-toggle-on task-action" style={{ color: "green" }}></i>
      )
    }
    else{
      return(
        <i onClick={() => updateUser(user)} className="bi-toggle-off task-action" style={{ color: "green" }}></i>
      )
    }

  }
  return (
    <tr className="fw-normal">
      <td>
        <span className="ms-2">{user.nombre}</span>
      </td>
      <td>
        <span className="align-middle">{user.apellido}</span>
      </td>
      <td>
        {/* Execution of funtion to return badge element */}
        {/* {taskLevelBadge()} */}
        <span className="align-middle">{user.email}</span>
      </td>
      <td>{userStateBadge()}</td>
      <td>
        <span className="align-middle">
          {/* Execution of funtion to return icon element */}
          {userStateIcon()}
          <i  onClick={() => deleteUser(user)} className="bi-trash task-action" style={{ color: "tomato" }}></i>
        </span>
      </td>
    </tr>
  );
};

UserComponent.propTypes = {
  user: PropTypes.instanceOf(User),
};

export default UserComponent;
