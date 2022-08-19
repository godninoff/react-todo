import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { filterTasks } from "../../../store/filtersSelector";

const TodoList: React.FC = () => {
  const todos = useSelector(filterTasks);

  return (
    <div className="todos-container">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export default TodoList;
