import React from "react";
import "./Checkbox.css";
import { useDispatch } from "react-redux";
import { completedTask } from "../../../../store";

interface ICheckbox {
  id: string;
  complete: boolean;
}

const Checkbox: React.FC<ICheckbox> = ({ id, complete }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <label className="container">
        <input
          type="checkbox"
          onChange={() => dispatch(completedTask(id))}
          checked={complete}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Checkbox;
