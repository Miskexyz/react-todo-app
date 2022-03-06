import "./App.css";

import React, { useState, useEffect } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilter(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilter(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilter(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <header>Todays Todo's!</header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filter={filter} />
    </div>
  );
}

export default App;
