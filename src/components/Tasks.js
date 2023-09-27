import React from 'react'
import { useState } from 'react'
import Task from './Task'
import Calendar from 'react-calendar';

// const Tasks = ({tasks, onDelete, onToggle}) => {
//   return (
//     <>
//     <p><b>Current Tasks:</b></p>
//     {tasks.map((task)=> (
//     <Task key={task.id} 
//     task={task} 
//     onDelete={onDelete} 
//     onToggle={onToggle}/>))}
//     </>
//   )
// }

const Tasks = ({tasks, onDelete, onToggle}) => {

  return (
    <>
    {tasks.map((task) => 
    (
      <Task key = {task.id} task={task}
      onDelete={onDelete}
      onToggle={onToggle}/>
    ))}

    </>
  )


}

export default Tasks