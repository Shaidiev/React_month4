import React from "react";

function List({ data }) {
  console.log(data);
  return (
    <div>
      {data.map((el) => (
        <h3 key={el.id}>{el.task}</h3>
      ))}
    </div>
  );
}

export default List;
