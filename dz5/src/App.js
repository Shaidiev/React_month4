import Modal from "./components/Modal/Modal";
import { useState, useEffect } from "react";
import classes from "./App.module.css";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import TodoCard from "./components/TodoCard/TodoCard";
import Pagination from "./components/Pagination/Pagination";

function App() {

  const BASE_URL = "https://jsonplaceholder.typicode.com/"
  const [isShow, setIsShow] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");
  const [currentEdit, setCurrentEdit] = useState(null);
  const [filter, setFilter] = useState("all");
  const [offset, setOffSet] = useState(1)
  const page = Math.floor(offset / 10) || 1
  const [todos, setTodos] = useState([]);
  const handleShow = () => setIsShow(!isShow);

  const handleAddTask = () => {
    if (newTask.length < 1) return;

    setTodos((prevState) => [
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
    const newList = todos.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTodos([...newList]);
  };

  const handleDelete = (id) => {
    const deletedLedList = todos.filter((task) => task.id !== id);
    setTodos([...deletedLedList]);
  };

  const deleteAll = () => {
    const deleteList = todos.splice(todos.length);
    setTodos([...deleteList]);
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleEdit = (editTask) => {
    setCurrentEdit(null);
    const editList = todos.map((task) => {
      if (task.id === editTask.id) {
        return editTask;
      } else {
        return task;
      }
    });
    setTodos([...editList]);
  };

  const fetchData = async(endPoint) => {
    try {
      const data = await fetch(BASE_URL + endPoint)

      const todos = await data.json()

      setTodos([...todos])
    } catch (error){
      console.error();
    }
  }

  const handleNext = () => {
    setOffSet(prev => prev + 10)
  }

  const handlePrev = () => {
    if(offset === 1 ) return
    setOffSet(prev => prev - 10)
  }

 
  const handleCancel = (oldTask) => {
    setCurrentEdit(null);
    const updatedTaskList = todos.map((task) => {
      if (task.id === oldTask.id) {
        return oldTask;
      } else {
        return task;
      }
    });
    setTodos(updatedTaskList);
  };

  console.log(todos, 'todos');
  const filteredtodos = todos.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const resultFilter =
    filter === "all"
      ? filteredtodos
      : filter === "completed"
      ? filteredtodos.filter((i) => i.completed)
      : filter === "not completed"
      ? filteredtodos.filter((i) => !i.completed)
      : null;

  const setFiltered = (e) => {
    setFilter(e.target.value);
  };




  useEffect(() => {
    fetchData (`todos?_limit=${10}&start=${offset}`)
}, [ offset ])

  // useEffect(() => {
  //   const myLocaltodos = JSON.parse(localStorage.getItem("taskList"));
  //   if (myLocaltodos === 0) {
  //     setTodos(myLocaltodos);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("taskList", JSON.stringify(todos));
  // }, [todos]);

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
            <option value="all">All todos</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not completed</option>
          </select>
          <button className={classes.deleteAll} onClick={deleteAll}>
            Delete todos
          </button>
          {resultFilter.map((task) => (
            <TodoCard
              handleDone={handleDone}
              handleDelete={handleDelete}
              handleSelectEdit={setCurrentEdit}
              handleEdit={handleEdit}
              handleCancel={handleCancel}
              deleteAll={deleteAll}
              isEdit={currentEdit === task.id}
              key={task.id}
              task={task}
            />
          ))}
        </div>
        <Pagination
          handleNext={handleNext}
          page={page}
          handlePrev={handlePrev}/>
      </Container>
    </>
  );
}

export default App;
