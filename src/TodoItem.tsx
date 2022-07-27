import React from 'react'
import { Task } from "./Types/toDoData";

interface ITodoItem extends Task {}

const TodoItem: React.FC = () => {
  return (
    <div>TodoItem</div>
  )
}

export default TodoItem