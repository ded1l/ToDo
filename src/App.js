import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      task: todo,
    };
    setList([...list, newTodo]);
    setInput("");
  };

  const deleteitem=(id)=>{
    const notnewlist=list.filter((item)=>item.id!==id)
    setList(notnewlist)}
  return (
    <div>
      <h1>Todo List</h1>
      <input
      
        type="text"
        value={input} className="todo-input"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>add task</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.task}
          <button onClick={()=>deleteitem(item.id)}  >&times;</button></li>
        ))}
      </ul>


      
    </div>
  );
}

export default App;
