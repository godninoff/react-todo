import React from "react";
import Checkbox from "./Checkbox/Checkbox";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { GiSaveArrow } from "react-icons/gi";
import { Task } from "../Types/toDoData";

interface ITodoItem extends Task {
  tasks: Task[];
  setTasks: (todo: Task[]) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, tasks, setTasks } = props;

  const [editTaskById, setEditTaskById] = React.useState("");
  const [editTaskValue, setEditTaskValue] = React.useState("");

  const removeTask = (todoId: string): void => {
    const removeTodo = [...tasks].filter((t) => t.id !== todoId);
    localStorage.setItem("todos", JSON.stringify(removeTodo));
    setTasks(removeTodo);
  };

  const editTasks = (
    id: React.SetStateAction<string>,
    title: React.SetStateAction<string>
  ) => {
    setEditTaskById(id);
    setEditTaskValue(title);
  };

  const handleSubmit = (todoId: string) => {
    const todo = [...tasks].map((t) => {
      if (t.id === todoId) {
        t.title = editTaskValue;
      }
      return t;
    });
    setTasks(todo);
    setEditTaskById("");
  };

  return (
    <>
      <ul key={id}>
        <Checkbox
          tasks={tasks}
          setTasks={setTasks}
          id={id}
          title={title}
          complete={complete}
        />
        {editTaskById === id ? (
          <div>
            <input
              onChange={(e) => setEditTaskValue(e.target.value)}
              value={editTaskValue}
            />
          </div>
        ) : (
          <li className={complete ? "close" : ""}>{title}</li>
        )}

        {editTaskById === id ? (
          <div>
            {" "}
            <GiSaveArrow className="icons" onClick={() => handleSubmit(id)} />
          </div>
        ) : (
          <div>
            <AiTwotoneDelete className="icons" onClick={() => removeTask(id)} />
            <FiEdit2 className="icons" onClick={() => editTasks(id, title)} />
          </div>
        )}
      </ul>
    </>
  );
};

export default TodoItem;
