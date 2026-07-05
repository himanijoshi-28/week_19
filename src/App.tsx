import axios from "axios"
import { useEffect, useState } from "react";
function App() {
  const [currentTodo, setCurrentTodo] = useState(1);
  const [currentTodoTitle, setCurrentTodoTitle] = useState("");
  function fetchTodo() {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${currentTodo}`)
      .then(response => {
        setCurrentTodoTitle(response.data.title);
      })
  }
  useEffect(function () {
    fetchTodo();
  }, [currentTodo]);

  return (
    <>
      <div className="">
        <button onClick={function () {
          setCurrentTodo(1)
        }}>1</button>

        <button onClick={function () {
          setCurrentTodo(2)
        }}>2</button>

        <button onClick={function () {
          setCurrentTodo(3)
        }}>3</button>

        <Todo currentTodo={currentTodoTitle}></Todo>

      </div>
    </>
  );


}

function Todo(props: any) {
  return <div className="">
    {props.currentTodo}
  </div>
}








export default App
