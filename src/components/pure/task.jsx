import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

const TaskComponent = ({ task }) => {
  return (
    <div>
        <h2>
            Nombre: { task.name }
        </h2>
        <p>
            Descripción: { task.description }
        </p>
        <p>
            Nivel: { task.level }
        </p>
        <p>
            This task is: { task.completed ? 'COMPLETED' : 'PENDING' }
        </p>
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent;
