import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/level.enum";
import TaskComponent from "../pure/task";
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

const TaskList = () => {
  const taskDefault1 = new Task(
    "Example 1",
    "description 1",
    false,
    LEVELS.NORMAL
  );

  const taskDefault2 = new Task(
    "Example 2",
    "description 2",
    true,
    LEVELS.URGENTE
  );

  const taskDefault3 = new Task(
    "Example 3",
    "description 3",
    true,
    LEVELS.BLOCKING
  );

  const taskDefault4 = new Task(
    "Example 4",
    "description 4",
    true,
    LEVELS.NORMAL
  );
  // Estado del componente
  const [tasks, setTasks] = useState([
    taskDefault1,
    taskDefault2,
    taskDefault3,
    taskDefault4,
  ]);
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
                {tasks.map((task, index) => {
                  {/* !Important to add the key in iteration to avoid conflict */}
                  return <TaskComponent key={index} task={task}></TaskComponent>;
                })}
              </tbody>
            </table>
          </div>
          <TaskForm></TaskForm>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
