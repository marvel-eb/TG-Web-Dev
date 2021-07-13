import React, { useState, useEffect } from "react";

// function Task({ task, index, completeTask, removeTask }) {
const Task = ({ task, index, removeTask }) => {
  return (
    <div
      className="ToDo"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}

      <button className="btn btn--task" onClick={() => removeTask(index)}>
        Task Complete!
      </button>
      {/* <button onClick={() => completeTask(index)}>Complete</button> */}
    </div>
  );
};

const CreateTask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("-");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task to do"
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit" className="btn btn--submit">
        Submit To Do
      </button>
    </form>
  );
};
// To Do List
//==============
function ToDoList() {
  // const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([
    // {
    //   title: "Grab some Pizza",
    //   completed: true,
    // },
    // {
    //   title: "Do your workout",
    //   completed: true,
    // },
    // {
    //   title: "Hangout with friends",
    //   completed: false,
    // },
  ]);

  // useEffect(() => {
  //   setTasksRemaining(tasks.filter((task) => !task.completed).length);
  // });

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h2> 04// Side Effects en Lifecycle Methods </h2>
      <hr />
      <h4>- To-Do Opdracht</h4>

      {/* <div className="header">
        <h4> Pending tasks ({tasksRemaining}) </h4>
      </div> */}

      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
      </div>

      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}

export default ToDoList;
