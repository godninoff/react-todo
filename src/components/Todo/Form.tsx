import React from "react";
import { useDispatch } from "react-redux";
import { newTask } from "../../store";

const Form: React.FC = () => {
  const [formInputValue, setFormInputValue] = React.useState("");
  const [validation, setValidation] = React.useState(false);

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

  const handleChange = (e: { target: { value: string } }) => {
    setFormInputValue(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    handleAction(formInputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
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
