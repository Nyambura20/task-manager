import React from "react";

function TaskCard({ task, onToggleCompletion, onDelete }) {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <div className="task-header">
        <h3>{task.text}</h3>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
      <div className="task-footer">
        <label>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleCompletion(task.id)}
          />
          Completed
        </label>
      </div>
    </div>
  );
}

export default TaskCard;
