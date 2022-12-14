import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/level.enum";
import TaskComponent from "../pure/task";
import '../../styles/task.scss'

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
      <div>
        <h1>Your Tasks:</h1>
      </div>
      {/* TODO: Aplicar un For / Map para renderizar una lista */}
      <TaskComponent task={taskDefault}></TaskComponent>
    </div>
  );
};

export default TaskList;
