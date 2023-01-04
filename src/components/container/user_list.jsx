import React, { useState, useEffect } from "react";
import { User } from "../../models/user.class";
import UserForm from "../pure/forms/userForm";
import UserComponent from "../pure/user";

const UserList = () => {
  const userDefault = new User(
    "Yasmin",
    "Orjuela",
    "yasminorjuela@hotmail.com",
    false
  );
  const userDefault1 = new User(
    "Nicolas",
    "Botache",
    "nicolasbotache@gmail.com",
    false
  );
  const [users, setUsers] = useState([userDefault, userDefault1]);

  const [loading, setLoading] = useState(true);
  const tempUsers = [...users];

  useEffect(() => {
    console.log("User state has been modified");
    setLoading(false);
    return () => {
      console.log("User list is going to unMount");
    };
  }, [users]);

  function addUser(user) {
    const index = users.indexOf(user);
    tempUsers.push(user);
    setUsers(tempUsers);
  }

  function updateUserState(user) {
    const index = users.indexOf(user);
    tempUsers[index].conectado = !tempUsers[index].conectado;    
    setUsers(tempUsers);
  }

  function deleteUser(user) {
    const index = users.indexOf(user);
    tempUsers.splice(index,1);
    setUsers(tempUsers);
  }
  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card Header (title) */}
          <div className="card-header p-3">
            <h5> Your Contacts:</h5>
          </div>
          {/* Card body (context) */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Last name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody className="col-12">
                {users.map((user, index) => {
                  return (
                    <UserComponent 
                    key={index} 
                    user={user}
                    updateUser = {updateUserState}
                    deleteUser = {deleteUser}></UserComponent>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <UserForm add={addUser}></UserForm>
    </div>
  );
};
export default UserList;
