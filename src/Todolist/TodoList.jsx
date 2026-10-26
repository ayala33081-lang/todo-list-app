import { useState } from 'react'
import { TodoItem } from '../TodoItem/TodoItem.jsx'

export const TodoList = () => {
  const [todos, setTodos] = useState([
    'לכתוב שיעורי בית',
    'לנקות את החדר',
    'לקנות חלב',
  ])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    const task = newTask.trim()
    if (task === '' || todos.includes(task)) return
    setTodos((previousTodos) => [...previousTodos, task])
    setNewTask('')
  }

  return (
    <div className="todo-app">
      <h1>רשימת משימות</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          addTask()
        }}
      >
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="הכנס משימה חדשה"
        />
        <button type="submit">אישור</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo} todo={todo} />
        ))}
      </ul>
    </div>
  )
}
