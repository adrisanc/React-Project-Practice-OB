import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// Importamos la hoja de estilos de task.scss
import "../../styles/task.scss";
import { LEVELS } from "../../models/level.enum";

const TaskComponent = ({ task, complete, remove }) => {
  useEffect(() => {
    console.log("Task Created");
    return () => {
      console.log(`Task: ${task.name} is going to unMount`);
    };
  }, [task]);

  // Function that returns a Badge
  // depending on the level of the task
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return(
          <h6 className="mb-0">
            <span className="badge bg-primary">
              {task.level}
            </span>
          </h6>
        );
        case LEVELS.URGENTE:
          return(
            <h6 className="mb-0">
              <span className="badge bg-warning">
                {task.level}
              </span>
            </h6>
          );
          case LEVELS.BLOCKING:
          return(
            <h6 className="mb-0">
              <span className="badge bg-danger">
                {task.level}
              </span>
            </h6>
          );
      default:
        break;
    }
  }

  // Function that return icon depending of task completed
  function taskCompletedIcon(){
    if(task.completed){
      return(
        <i onClick={() => complete(task)} className="bi-toggle-on task-action" style={{ color: "green" }}></i>
      )
    }else{
      return(
        <i onClick={() => complete(task)} className="bi-toggle-off task-action" style={{ color: "red" }}></i>
      )
    }
  }

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td>
        <span className="align-middle">{task.description}</span>
      </td>
      <td>
        {/* Execution of funtion to return badge element */}
        {taskLevelBadge()}
      </td>
      <td>
        <span className="align-middle">
        {/* Execution of funtion to return icon element */}
          {taskCompletedIcon()}
          <i  onClick={() => remove(task)} className="bi-trash task-action" style={{ color: "tomato" }}></i>
        </span>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

export default TaskComponent;
