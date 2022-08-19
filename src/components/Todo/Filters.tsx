import React from "react";
import { useDispatch } from "react-redux";
import { filterTodos } from "../../store/filtersSlice";

const Filters: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <label>
        Task filter
        <select
          onChange={(e) => dispatch(filterTodos(e.target.value))}
          style={{ marginLeft: "10px" }}
        >
          <option value="all">All</option>
          <option value={"completed"}>Completed</option>
          <option value={"active"}>Active</option>
        </select>
      </label>
    </>
  );
};

export default Filters;
