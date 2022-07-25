/* eslint-disable default-case */
import Form from "./Form";
import React from "react";
import "./App.css";
import Checkbox from "./Checkbox/Checkbox";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { GiSaveArrow } from "react-icons/gi";
import { VscColorMode } from "react-icons/vsc";

const App = () => {
  const getRandomId = Math.random().toString(21).slice(-5);
  const [tasks, setTasks] = React.useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const [formInputValue, setFormInputValue] = React.useState("");
  const [editTaskById, setEditTaskById] = React.useState("");
  const [editTaskValue, setEditTaskValue] = React.useState("");
  const [validation, setValidation] = React.useState(false);
  const [filterTodos, setFilterTodos] = React.useState(tasks);
  // const [filteredTodos, setFilteredTodos] = React.useState(tasks);

  const [theme, setTheme] = React.useState(true);

  const newTask = () => {
    const addTask = [
      ...tasks,
      { id: getRandomId, title: formInputValue, complete: false },
    ];
    localStorage.setItem("todos", JSON.stringify(addTask));
    if (formInputValue.length === 0) {
      setValidation(true);
    } else {
      setTasks(addTask);
      setValidation(false);
    }
    setFormInputValue("");
  };

  const removeTask = (todoId) => {
    const removeTodo = [...tasks].filter((t) => t.id !== todoId);
    localStorage.setItem("todos", JSON.stringify(removeTodo));
    setTasks(removeTodo);
  };

  const editTasks = (id, title) => {
    setEditTaskById(id);
    setEditTaskValue(title);
  };

  const handleSubmit = (todoId) => {
    const todo = [...tasks].map((t) => {
      if (t.id === todoId) {
        t.title = editTaskValue;
      }
      return t;
    });
    setTasks(todo);
    setEditTaskById(false);
  };

  const completedTask = (todoId) => {
    const finishedTodo = [...tasks].map((t) =>
      t.id === todoId ? { ...t, complete: !t.complete } : { ...t }
    );
    setTasks(finishedTodo);
  };

  const taskFilter = (statusTodo) => {
    switch (statusTodo) {
      case "active":
        setFilterTodos(tasks.filter(({ complete }) => !complete));
        break;
      case "completed":
        setFilterTodos(tasks.filter(({ complete }) => complete));
        break;
      case "all":
        setFilterTodos(tasks);
        break;
    }
  };

  React.useEffect(() => {
    setFilterTodos(tasks);
  }, [tasks]);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className="App">
      <header>
        <VscColorMode onClick={() => changeTheme()} className="theme" />
        <h1>Things to do</h1>
      </header>
      <Form
        newTask={newTask}
        formInputValue={formInputValue}
        setFormInputValue={setFormInputValue}
        validation={validation}
      />
      <label>
        Task filter
        <select onChange={(e) => taskFilter(e.target.value)}>
          <option value="all">All</option>
          <option value={"completed"}>Completed</option>
          <option value={"active"}>Active</option>
        </select>
      </label>
      <div className="todos-container">
        {filterTodos.map((todo) => {
          return (
            <ul key={todo.id}>
              <Checkbox completedTask={completedTask} todo={todo} />
              {editTaskById === todo.id ? (
                <div>
                  <input
                    onChange={(e) => setEditTaskValue(e.target.value)}
                    value={editTaskValue}
                  />
                </div>
              ) : (
                <li className={todo.complete ? "close" : null}>{todo.title}</li>
              )}

              {editTaskById === todo.id ? (
                <div>
                  {" "}
                  <GiSaveArrow
                    className="icons"
                    onClick={() => handleSubmit(todo.id)}
                  />
                </div>
              ) : (
                <div>
                  <AiTwotoneDelete
                    className="icons"
                    onClick={() => removeTask(todo.id)}
                  />
                  <FiEdit2
                    className="icons"
                    onClick={() => editTasks(todo.id, todo.title)}
                  />
                </div>
              )}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default App;
