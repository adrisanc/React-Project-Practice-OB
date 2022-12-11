import React from 'react'
import PropTypes from 'prop-types'
import { User } from '../../models/user.class'

const UserComponent = ({ user }) =>{
  return (
    
    <div>
        <h1>Hola: {user.nombre} {user.apellido}</h1>
        <p>Tu Email es: {user.email}</p>
        <p>{ user.conectado ? 'Contacto En Línea' : 'Contacto No Disponible' }</p>
    </div>
  )
}

UserComponent.propTypes = {
    user : PropTypes.instanceOf(User),
}

export default UserComponent
