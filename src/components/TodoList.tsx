import React from "react";
import { Task } from "../Types/toDoData";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { selectTodos } from "./store";

interface ITodoList {
  filterTodos: Task[];
}

const TodoList: React.FC<ITodoList> = (props) => {
  const { filterTodos } = props;
  const todos = useSelector(selectTodos);

  return (
    <div className="todos-container">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export default TodoList;
