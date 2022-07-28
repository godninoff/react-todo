import Form from "./Form";
import React from "react";
import "./App.css";
import { VscColorMode } from "react-icons/vsc";
import { Task } from "../Types/toDoData";
import Filters from "./Filters";
import TodoList from "./TodoList";

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>(
    // localStorage.getItem("todos")
    //   ? JSON.parse(localStorage.getItem("todos"))
    //   :
    []
  );

  const [filterTodos, setFilterTodos] = React.useState(tasks);
  const [theme, setTheme] = React.useState(true);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className="App">
      <header>
        <VscColorMode onClick={() => changeTheme()} className="theme" />
        <h1>Things to do</h1>
      </header>
      <Form tasks={tasks} setTasks={setTasks} />
      <Filters
        filterTodos={filterTodos}
        setFilterTodos={setFilterTodos}
        tasks={tasks}
      />
      <TodoList tasks={tasks} setTasks={setTasks} filterTodos={filterTodos} />
    </div>
  );
};

export default App;
