import React from "react";
import { Task } from "../Types/toDoData";

interface IForm {
  tasks: Task[];
  setTasks: (todo: Task[]) => void;
}

const Form: React.FC<IForm> = (props) => {
  const getRandomId = Math.random().toString(21).slice(-5);
  const [formInputValue, setFormInputValue] = React.useState("");
  const [validation, setValidation] = React.useState(false);

  const newTask = (value: string) => {
    const addTask = [
      ...props.tasks,
      { id: getRandomId, title: formInputValue, complete: false },
    ];
    localStorage.setItem("todos", JSON.stringify(addTask));
    if (formInputValue.length === 0) {
      setValidation(true);
    } else {
      props.setTasks(addTask);
      setValidation(false);
    }
    setFormInputValue("");
  };

  const handleChange = (e: { target: { value: any } }) => {
    setFormInputValue(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    newTask(formInputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="add-todo-input"
          value={formInputValue}
          onChange={handleChange}
          type="text"
          placeholder="Task name..."
        />
        <button>Add task</button>
      </form>
      {validation && formInputValue.length === 0 ? (
        <span style={{ color: "red" }}>this field cannot be empty</span>
      ) : null}
    </div>
  );
};

export default Form;
