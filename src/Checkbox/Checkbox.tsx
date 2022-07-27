import React from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
  return (
    <div>
      <label className="container">
        <input
          type="checkbox"
          onChange={() => props.completedTask(props.todo.id)}
          checked={props.todo.complete}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Checkbox;
