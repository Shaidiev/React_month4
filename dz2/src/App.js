// import classes from "./App.module.css";
import Modal from "./components/Modal/Modal";
import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import List from "./components/List/List";

function App() {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
    console.log(isShow, "isShow");
  };
  const [data, setData] = useState([
    {
      id: 1,
      task: "coding",
    },
    {
      id: 2,
      task: "eat",
    },
    {
      id: 3,
      task: "sleep",
    },
  ]);
  useEffect(() => {}, [data]);
  return (
    <>
      <Container>
        <div className="classes.wrapper">
          {isShow && (
            <Modal handleShow={handleShow} setData={setData} data={data} />
          )}
          <button onClick={handleShow}>Добавить</button>
          <List data={data} />
        </div>
      </Container>
    </>
  );
}
export default App;
