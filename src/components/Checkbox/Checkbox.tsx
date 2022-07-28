import React from "react";
import "./Checkbox.css";
import { Task } from "../../Types/toDoData";

interface ICheckbox extends Task {
  setTasks: (todo: Task[]) => void;
  tasks: Task[];
}

const Checkbox: React.FC<ICheckbox> = (props) => {
  const { tasks, setTasks, id, complete } = props;

  const completedTask = (todoId: string) => {
    const finishedTodo = [...tasks].map((t) =>
      t.id === todoId ? { ...t, complete: !t.complete } : { ...t }
    );
    setTasks(finishedTodo);
  };

  return (
    <div>
      <label className="container">
        <input
          type="checkbox"
          onChange={() => completedTask(id)}
          checked={complete}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Checkbox;
