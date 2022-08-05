import React from "react";
import Checkbox from "./Checkbox/Checkbox";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { GiSaveArrow } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos, removeTask, editTodo } from "../components/store";

interface ITodoItem {
  id: string;
  title: string;
  complete: boolean;
}

const TodoItem: React.FC<ITodoItem> = ({ id, title, complete }) => {
  const todos = useSelector(selectTodos);
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

  const handleSubmit = (id: string) => {
    // const todo = [...todos].map((t) => {
    //   if (t.id === todoId) {
    //     t.title = editTaskValue;
    //   }
    //   return t;
    // });
    // selectTodos(todo);
    dispatch(editTodo(title));
    setEditTaskById("");
  };
  console.log(title);
  console.log(editTaskValue);

  return (
    <>
      <ul key={id}>
        <Checkbox id={id} complete={complete} />
        {editTaskById === id ? (
          <div>
            <input
              onChange={(e) => setEditTaskValue(e.target.value)}
              value={title}
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
