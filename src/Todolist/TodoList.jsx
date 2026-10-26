import { useState } from "react";
import { TodoItem } from "../TodoItem/TodoItem.jsx";


export const TodoList = () => {
  const [todos, setTodos] = useState(["HW","Study React", "Go Shopping", "Clean the house", "Exercise"]); 
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
  if (newTask.trim() === "") return;
  if (todos.includes(newTask.trim())) return;
  setTodos([...todos, newTask]);
  setNewTask("");
};
  return (
    <> 
      <form onSubmit={(e) => { e.preventDefault(); addTask(); }}>
        <input
          type="text"
          placeholder="הכנס משימה חדשה"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}/>
        <button type="submit">אישור</button>
      </form> 

    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo} todo={todo} />
      ))}
    </ul></>
  );
};