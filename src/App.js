import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';
import TaskDetails from './components/TaskDetails'; 
import Calendar from 'react-calendar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'
function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      "text": "Buy Groceries",
      "day": {
        "year": 2023,
        "month": 10,
        "day": 30,
        "hour": 14,
        "minute": 15
      },
      "reminder": true,
      "id": 8
    },
    {
      "text": "Pay Rent ",
      "day": {
        "year": 2023,
        "month": 10,
        "day": 13,
        "hour": 12,
        "minute": 30
      },
      "reminder": true,
      "id": 9
    },
    {
      "text": "Go to library",
      "day": {
        "year": 2023,
        "month": 10,
        "day": 21,
        "hour": 14,
        "minute": 30
      },
      "reminder": true,
      "id": 10
    }
  ])

  // useEffect(() => {
    

  //   const getTasks = async () => {
  //     const taskfromServer = await fetchTasks()
  //     setTasks(taskfromServer)
  //     // console.log(taskfromServer);
  //   }
  //   getTasks();
  //   console.log('After getTasks', tasks.todos);
  // }, [])

// Fetch Tasks

const fetchTasks = async() => {
      const res = await fetch('https://dummyjson.com/todo?limit=10')
      const data = await res.json()
      console.log('Data:', data)
      return data
    }


// Fetch Tasks

    const fetchTask = async(id) => {
          const res = await fetch(`https://dummyjson.com/todo?limit=10/${id}`)
          const data = await res.json()
          console.log(data)
    
          return data
        }

// Add Task

const addTask = async (task) => {
  const id = Math.floor(Math.random()*10000 + 1)
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
  // console.log(id, task)

  // const res = await fetch('https://dummyjson.com/todo?limit=10', {
  //   method:'POST',
  //   headers:{
  //     'Content-type': 'application/json'
  //   },
  //   body: JSON.stringify(task)
  // })

  // const data = await res.json()

  // setTasks([...tasks, data])

}

// Delete Task

const deleteTask = async (id) => {

  await fetch(`https://dummyjson.com/todo?limit=10/${id}`, {
    method: 'DELETE',
  })
  setTasks(tasks.filter((task) => task.id !==id))
}

// Enable Reminder
const toggleReminder = async (id) => {

  const taskToToggle = await fetchTask(id)
  const updatedTask = {...taskToToggle,
  reminder: !taskToToggle.reminder
  }

  // const res = await fetch(`https://dummyjson.com/todo?limit=10/${id}`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   body: JSON.stringify(updatedTask)
  // })

  // const data = await res.json()
  // console.log("This is data", data)
  tasks.map((task) => task.id === id ? console.log("ID:", id) : null) 
  setTasks(tasks.map((task) => task.id === id ? 
    {...task, reminder:!task.reminder}:task))
    // {...task, reminder:!data.reminder}:task)) -> uncomment this when using backend
}


  return (

    <Router basename='/Taskify'>
    <div className="App">
      <Header title={`<Taskify/>`} onAdd={()=> setShowAddTask(!showAddTask)}
      
      showAdd={showAddTask}/>
      
      <Routes>
        {console.log("Here")}
      <Route 
      path = '/'  
      element={<>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length>0 ? 
        (<Tasks 
          tasks={tasks}
          onDelete={deleteTask} 
          onToggle={toggleReminder}/>):
          (
          'No Tasks to show'
        )}
      </>}
      />
      <Route path = '/about' element={<About/>}/>
      <Route path = '/task/:id' element={<TaskDetails/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}



// ----------Another Way:---------- //
// const App = () =>{
//   return (
//     <div className="App">
//      <Header/>
//     </div>
//  )
// }

export default App;
