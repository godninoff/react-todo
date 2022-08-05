import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos, newTask } from "../components/store";

const Form: React.FC = () => {
  const [formInputValue, setFormInputValue] = React.useState("");
  const [validation, setValidation] = React.useState(false);

  // const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleAction = (value: string) => {
    if (formInputValue.length === 0) {
      setValidation(true);
    } else {
      dispatch(newTask(formInputValue));
      setValidation(false);
    }
    setFormInputValue("");
  };

  const handleChange = (e: { target: { value: any } }) => {
    setFormInputValue(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    handleAction(formInputValue);
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
