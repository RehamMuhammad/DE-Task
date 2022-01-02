import * as React from "react";
import { TodoForm } from "./components/todo-form";
import { TodoList } from "./components/todo-list";
import { TodoResults } from "./components/todo-results";
import "./index.scss";

const todosList = [
  {
    id: 0,
    label: "Fix an ability to display all tasks",
    checked: true,
  },
  {
    id: 1,
    label: "Fix a layout, checkboxes should be listed in a column",
    checked: false,
  },
  {
    id: 2,
    label: "Fix an ability to add a new task",
    checked: true,
  },
  {
    id: 3,
    label: "Fix an ability to toggle a task",
    checked: false,
  },
  {
    id: 4,
    label: "Fix an ability to delete a task",
    checked: false,
  },
  {
    id: 5,
    label: "Fix an ability to count completed tasks",
    checked: false,
  },
];

export const App = () => {
  const [todos, setTodos] = React.useState([]);

  return (
    <div className="root">
        <TodoList todos={todos} />
        <TodoResults todos={todos}  />
        <TodoForm todos={todos} setTodos={setTodos} />
    </div>
  );
};
