import React from "react";
import { Task } from "../Types/toDoData";
import TodoItem from "./TodoItem";

interface ITodoList {
  tasks: Task[];
  setTasks: (arg0: Task[]) => void;
  filterTodos: Task[];
}

const TodoList: React.FC<ITodoList> = (props) => {
  const { tasks, setTasks, filterTodos } = props;

  return (
    <div className="todos-container">
      {filterTodos.map((todo) => {
        return (
          <TodoItem key={todo.id} {...todo} tasks={tasks} setTasks={setTasks} />
        );
      })}
    </div>
  );
};

export default TodoList;
