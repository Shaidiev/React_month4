import React, { useState } from "react";
import classes from "./Modal.module.css";
import Input from "../Input/Input";

const Modal = ({ handleShow, setData, data }) => {
  const [inputValue, setInputValue] = useState("");
  const handleAdd = () => {
    if (inputValue) {
      const newData = data;
      const id = data[data.length - 1].id + 1;
      newData.push({ id: id, task: inputValue });
      setData(newData);
      handleShow();
    }
  };
  return (
    <>
      <div onClick={handleShow} className={classes.modalWrapper}></div>
      <div className={classes.modalContent}>
        <Input
          name={"input"}
          placeholder={"task"}
          inputValue={inputValue}
          onChange={setInputValue}
        />
        <button onClick={handleAdd}>Добавить task</button>
      </div>
    </>
  );
};
export default Modal;
