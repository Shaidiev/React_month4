import Modal from "./components/Modal/Modal";
import { useState } from "react";
import classes from "./App.module.css";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import TodoCard from "./components/TodoCard/TodoCard";
function App() {
  const [isShow, setIsShow] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");
  const [currentEdit, setCurrentEdit] = useState(null);
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Coding",
      completed: false,
    },
    {
      id: 2,
      title: "Eat",
      completed: false,
    },
    {
      id: 3,
      title: "Sleep",
      completed: false,
    },
    {
      id: 4,
      title: "Coding",
      completed: false,
    },
    {
      id: 5,
      title: "Codinfsdfg",
      completed: false,
    },
  ]);
  const handleShow = () => setIsShow(!isShow);

  const handleAddTask = () => {
    if (newTask.length < 1) return;

    setTasks((prevState) => [
      ...prevState,
      {
        id: Date.now(),
        title: newTask,
        completed: false,
      },
    ]);
    setNewTask("");
    handleShow();
  };

  const handleDone = (id) => {
    const newList = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks([...newList]);
  };

  const handleDelete = (id) => {
    const deletedLedList = tasks.filter((task) => task.id !== id);
    setTasks([...deletedLedList]);
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleEdit = (editTask) => {
    setCurrentEdit(null);
    const editList = tasks.map((task) => {
      if (task.id === editTask.id) {
        return editTask;
      } else {
        return task;
      }
    });
    setTasks([...editList]);
  };

  const handleCancel = (oldTask) => {
    setCurrentEdit(null);
    const updatedTaskList = tasks.map((task) => {
      if (task.id === oldTask.id) {
        return oldTask;
      } else {
        return task;
      }
    });
    setTasks(updatedTaskList);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const resultFilter =
    filter === "all"
      ? filteredTasks
      : filter === "completed"
      ? filteredTasks.filter((i) => i.completed)
      : filter === "notcompleted"
      ? filteredTasks.filter((i) => !i.completed)
      : null;

  const setFiltered = (e) => {
    setFilter(e.target.value);
  };
  return (
    <>
      <Container>
        <div className={classes.wrapper}>
          {isShow && (
            <Modal
              handleAddTask={handleAddTask}
              setNewTask={setNewTask}
              handleShow={handleShow}
            />
          )}
          <Button handleClick={handleShow}>
            <p>Add</p>
          </Button>
          <input
            className={classes.searchStyle}
            name="search"
            placeholder="Search..."
            onChange={handleSearch}
          />
          <select className={classes.selectStyle} onChange={setFiltered}>
            <option value="all">All tasks</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not completed</option>
          </select>
          {resultFilter.map((task) => (
            <TodoCard
              handleDone={handleDone}
              handleDelete={handleDelete}
              handleSelectEdit={setCurrentEdit}
              handleEdit={handleEdit}
              handleCancel={handleCancel}
              isEdit={currentEdit === task.id}
              key={task.id}
              task={task}
            />
          ))}
        </div>
      </Container>
    </>
  );
}

export default App;
