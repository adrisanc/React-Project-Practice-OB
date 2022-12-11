import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/level.enum'
import TaskComponent from '../pure/task'

const TaskList = () => {
    const taskDefault = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    const changeState = (id) =>{
        console.log('TODO: Cambiar estado de un a tarea');
    }

  return (
    <div>
        <div>
            <h1>Your Tasks:</h1>
        </div>
        <TaskComponent task={taskDefault}></TaskComponent>
    </div>
  )
}

export default TaskList
