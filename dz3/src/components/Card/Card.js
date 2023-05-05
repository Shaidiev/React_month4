import React from "react";

function Card({ task, handleDelete }) {
  return (
    <div>
      <h3>{task.task}</h3>
      <button onClick={() => handleDelete(task.id)}>delete</button>
    </div>
  );
}

export default Card;
