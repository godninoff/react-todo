import React from 'react'
import { Task } from "./Types/toDoData";

interface ITodoList {
    tasks: Task[];
}

const TodoList: React.FC<ITodoList> = () => {
  return (
    <div>TodoList</div>
  )
}

export default TodoList