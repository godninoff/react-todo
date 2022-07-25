import React from "react";

const Form = (props) => {
  const handleChange = (e) => {
    props.setFormInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.newTask(props.formInputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="add-todo-input"
          value={props.formInputValue}
          onChange={handleChange}
          type="text"
          placeholder="Task name..."
          // required
        />
        <button>Add task</button>
      </form>
      {props.validation && props.formInputValue.length === 0 ? (
        <span style={{ color: "red" }}>this field cannot be empty</span>
      ) : null}
    </div>
  );
};

export default Form;
