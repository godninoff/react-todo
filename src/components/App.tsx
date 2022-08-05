import Form from "./Form";
import React from "react";
import "./App.css";
import { VscColorMode } from "react-icons/vsc";
import Filters from "./Filters";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";
import { selectTodos } from "./store";

const App: React.FC = () => {
  const todos = useSelector(selectTodos);
  const [tasks, setTasks] = React.useState([]);
  const [filterTodos, setFilterTodos] = React.useState(todos);
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
      <Form />
      <Filters
        filterTodos={filterTodos}
        setFilterTodos={setFilterTodos}
        tasks={tasks}
      />
      <TodoList filterTodos={filterTodos} />
    </div>
  );
};

export default App;
