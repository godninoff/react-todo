import React from "react";
import { Task } from "../Types/toDoData";

interface IFilters {
  tasks: Task[];
  setFilterTodos: (arg0: Task[]) => void;
  filterTodos: Task[];
}

const Filters: React.FC<IFilters> = (props) => {
  const [filteredTodos, setFilteredTodos] = React.useState("all");

  const taskFilter = (filteredTodos: string, filterTodos: Task[]) => {
    let result = [...filterTodos];

    if (filteredTodos === "all") return result;

    if (filteredTodos === "completed") {
      return result.filter(({ complete }) => complete);
    }
    return result.filter(({ complete }) => !complete);
  };

  React.useEffect(() => {
    const filter = taskFilter(filteredTodos, props.tasks);
    props.setFilterTodos(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredTodos, props.tasks]);

  return (
    <>
      <label>
        Task filter
        <select onChange={(e) => setFilteredTodos(e.target.value)}>
          <option value="all">All</option>
          <option value={"completed"}>Completed</option>
          <option value={"active"}>Active</option>
        </select>
      </label>
    </>
  );
};

export default Filters;
