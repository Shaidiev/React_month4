import React from "react";
import Card from "../Card/Card";

function List({ data, setData }) {
  console.log(data);
  const handleDelete = (id) => {
    let newData = [];
    for (let el of data) {
      if (el.id !== id) newData.push(el);
    }
    setData(newData);
    console.log(id);
  };

  return (
    <div>
      {data.map((el) => (
        <Card key={el.id} task={el} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default List;
