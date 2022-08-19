import React from "react";
import Checkbox from "./Checkbox/Checkbox";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { GiSaveArrow } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { removeTask, editTodo } from "../../../store";

interface ITodoItem {
  id: string;
  title: string;
  complete: boolean;
}

const TodoItem: React.FC<ITodoItem> = ({ id, title, complete }) => {
  const dispatch = useDispatch();

  const [editTaskById, setEditTaskById] = React.useState("");
  const [editTaskValue, setEditTaskValue] = React.useState(title);

  const editTasks = (
    id: React.SetStateAction<string>,
    title: React.SetStateAction<string>
  ) => {
    setEditTaskById(id);
    setEditTaskValue(title);
  };

  const handleSubmit = (title: string) => {
    dispatch(editTodo({ id, title }));
    setEditTaskById("");
  };

  return (
    <>
      <ul key={id}>
        <div className="item-container">
          <Checkbox id={id} complete={complete} />
          {editTaskById === id ? (
            <input
              className="open"
              onChange={(e) => setEditTaskValue(e.target.value)}
              value={editTaskValue}
            />
          ) : (
            <li className={complete ? "close" : "open"}>{title}</li>
          )}
        </div>

        {editTaskById === id ? (
          <div className="item-button">
            <GiSaveArrow
              className="icons"
              onClick={() => {
                handleSubmit(editTaskValue);
              }}
            />
          </div>
        ) : (
          <div className="item-button">
            <AiTwotoneDelete
              className="icons"
              onClick={() => dispatch(removeTask(id))}
            />
            <FiEdit2 className="icons" onClick={() => editTasks(id, title)} />
          </div>
        )}
      </ul>
    </>
  );
};

export default TodoItem;
