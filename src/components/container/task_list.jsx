import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/level.enum";
import TaskComponent from "../pure/task";
import "../../styles/task.scss";

const TaskList = () => {
  const taskDefault = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );
  // Estado del componente
  const [tasks, setTasks] = useState(taskDefault);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida de componente
  useEffect(() => {
    console.log("Task state has been modified");
    setLoading(false);
    return () => {
      console.log("Task list is going to unMount");
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log("TODO: Cambiar estado de un a tarea");
  };

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card Header (title) */}
          <div className="card-header p-3">
            <h5> Your Tasks:</h5>
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
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: iterar sobre una lista de tareas */}
                <TaskComponent task={taskDefault}></TaskComponent>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* TODO: Aplicar un For / Map para renderizar una lista */}
    </div>
  );
};

export default TaskList;
