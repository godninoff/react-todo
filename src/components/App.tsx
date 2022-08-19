import Form from "./Todo/Form";
import React from "react";
import "./App.css";
import Filters from "./Todo/Filters";
import TodoList from "./Todo/TodoSection/TodoList";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>Things to do</h1>
      </header>
      <Form />
      <Filters />
      <TodoList />
    </div>
  );
};

export default App;
