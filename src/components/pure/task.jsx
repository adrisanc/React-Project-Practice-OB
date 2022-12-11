import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

const TaskComponent = ({ task }) => {
    useEffect(() => {
      console.log('Task Created');    
      return () => {
        console.log(`Task: ${task.name} is going to unMount`);
      }
    }, [task])
    
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
