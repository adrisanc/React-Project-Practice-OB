import React,{useRef} from 'react';
import { User } from '../../../models/user.class';

const UserForm = ({add}) => {
    const nameRef = useRef("");
    const lastNameRef = useRef("");
    const emailRef = useRef("");

    function addUser(e){
        e.preventDefault();
        const newUser = new User (
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
        )
        add(newUser)
    }
  return (
    <form onSubmit={addUser} className="d-flex justify-content-center align-items-center mb-4 flex-wrap">
    {/* <div className='col-6 mb-2 mt-2'>Contact Form</div> */}
    <input ref={nameRef} id="contactName" type="text" required autoFocus placeholder='Contact Name' className="form-control form-control-lg"></input>
    <input ref={lastNameRef} id="contactLastName" type="text" required  placeholder='Contact Last Name' className="form-control form-control-lg"></input>
    <input ref={emailRef} id="contactEmail" type="text" required  placeholder='Contact Email' className="form-control form-control-lg"></input>
    <button type='sumbit' className='btn btn-success mt-4'>Add</button>
    </form>
  )
}

export default UserForm