import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import Filter from "./Filter";
import React, { useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import "../App.css";

function TaskList() {
  const [tasks, setTasks] = useLocalStorage("tasks", [
    { id: 1, text: "Learn Mathematics", completed: false },
    { id: 2, text: "Learn English", completed: false },
    { id: 3, text: "Learn Physics", completed: false },
    { id: 4, text: "Learn Biology", completed: false },
  ]);

  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className="task-list">
      <h2>TASK MANAGER APP</h2>
      <TaskForm onAddTask={addTask} />
      <Filter currentFilter={filter} onFilterChange={setFilter} />
      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleCompletion={toggleTaskCompletion}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
