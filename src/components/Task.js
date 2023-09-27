import React from 'react'
import {FaCheck} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar';

// const Task = ({task, onDelete, onToggle}) => {
//   return (
//     <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() =>
//     onToggle(task.id)}>
//         <h3>{task.text} <FaCheck size={35} style={{color: 'green', cursor:'pointer', marginTop:'10px'}}
//         onClick = {() => onDelete(task.id)}/></h3>
//         <h3>{["Due: ", task.day.day,"/", task.day.month,"/", task.day.year, " at ", task.day.hour,":", task.day.minute]}</h3>
//         <p><Link to={`/task/${task.id}`}>View Details</Link></p>
        
//     </div>
//   )
// }

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() =>
    onToggle(task.id)}>
        <h3>{task.text} <FaCheck size={35} style={{color: 'green', cursor:'pointer', marginTop:'10px'}}
        onClick = {() => onDelete(task.id)}/></h3>
        <h3>{["Due: ", task.day.day,"/", task.day.month,"/", task.day.year, " at ", task.day.hour,":", task.day.minute]}</h3>
        {/* <p><Link to={`/task/${task.id}`}>View Details</Link></p> */}
        
    </div>
  )
}

export default Task