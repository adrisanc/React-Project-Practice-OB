import React from 'react'
import { User } from '../../models/user.class';
import UserComponent from '../pure/user';

const UserList = () =>{
    const userDefault = new User('Yasmin', 'Orjuela', 'yasminorjuela@hotmail.com', false);
  return (
    <div>
        <div>
            <h1>User List</h1>
        </div>
        <UserComponent user={userDefault}></UserComponent>
    </div>
  )
}
export default UserList;
