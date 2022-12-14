import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// Importamos la hoja de estilos de task.scss
import "../../styles/task.scss";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("Task Created");
    return () => {
      console.log(`Task: ${task.name} is going to unMount`);
    };
  }, [task]);

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td>
        <span className="align-middle">{task.description}</span>
      </td>
      <td>
        {/* TODO: Sustituir por un badge */}
        <span className="align-middle">{task.level}</span>
      </td>
      <td>
        {/* TODO: Sustituir por iconos */}
        <span className="align-middle">
          {task.completed ? (
            <i className="bi-toggle-on" style={{color: 'green'}}></i>
          ) : (
            <i className="bi-toggle-off" style={{color: 'red'}}></i>
          )}
        </span>
      </td>
    </tr>
    // <div>
    //     <h2 className='task-name'>
    //         Nombre: { task.name }
    //     </h2>
    //     <p>
    //         Descripción: { task.description }
    //     </p>
    //     <p>
    //         Nivel: { task.level }
    //     </p>
    //     <p>
    //         This task is: { task.completed ? 'COMPLETED' : 'PENDING' }
    //     </p>
    // </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
