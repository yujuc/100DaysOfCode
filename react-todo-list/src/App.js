import React, { useState, useEffect } from 'react';
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Typography from  "@material-ui/core/Typography"

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  // const [state, setState] = useState([]);
  const [todos, setTodos] = useState([]);

  // useEffect( () => {
  //   // effect
  //   return () => {
  //     // clean up
  //   }
  // }, [dependencyArray]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, [])

  useEffect (() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    console.log(todo);
    setTodos([todo, ...todos]);
  }

  function toogleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed}
        }
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter( todo => todo.id !== id));
  }

  return (
    <div className="App">
      <Typography style={{padding:16}} variant="h1">
        <p>React Todo</p>
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        toggleComplete={toogleComplete} 
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
