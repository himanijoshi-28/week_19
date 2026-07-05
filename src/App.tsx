import axios from "axios"
import { useState } from "react";
function App() {

  //wont render since the data is not a state variable.
  //You have to specisfically tell react  which are state variables.
  // let data;
  // axios.get("https://jsonplaceholder.typicode.com/todos")
  //   .then(response => {
  //     data = response.data;
  //   })

  // How to declare a State variable to tell react to rerender when changes happens/ state of that variable updates 

  let [data, setData] = useState<any[]>([]); // initialised as empty array.


  axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response => {
      setData(response.data);
    })

  return (
    <>
      <div className="">

        {/* {
          JSON.stringify(data)
        } */}
        <h1>Todos: </h1>
        {data?.map((todo) =>
          //  (
          // <div style={{ backgroundColor: "pink", margin: "5px", padding: "5px", border: "2px solid black", borderRadius: "10px" }}>{todo?.title}</div>
          // )
          <Todo key={todo.id} title={todo.title}></Todo>

        )}


      </div></>
  )
}

function Todo(props: any) {
  return <div style={{ backgroundColor: "pink", margin: "5px", padding: "5px", border: "2px solid black", borderRadius: "10px" }}>{props.title}</div>
}








export default App
