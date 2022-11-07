import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react"

function App() {
  const [ tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "May 5th at 2:30pm",
      "reminder": false
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "May 6th at 2:30pm",
      "reminder": false
    },
    {
      "id": 3,
      "text": "Breaking up with the thot",
      "day": "Tomorrow",
      "reminder": true
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1
    const newTask = {id, ...task}
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header/>
      <AddTask onAdd={addTask}/>
      {tasks.length> 0? <Tasks tasks={tasks}
      onDelete={deleteTask}
      onToggle={toggleReminder}/> : ('No Tasks to show')}
    </div>
  );
}

export default App;
