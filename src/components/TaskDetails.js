import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Navigate, useNavigate, useLocation } from 'react-router-dom'
import Button from './Button'
import Calendar from 'react-calendar';


const TaskDetails = () => {
  const [loading, setLoading] = useState(true) 
  const [task, setTask] = useState({})
  const [error, setError] = useState(null)
  const params = useParams()
  const navigate = useNavigate()
//   const {pathname} = useLocation()

  useEffect(() => {
    const fetchTask = async () => {
        const res = await fetch(`https://dummyjson.com/todo?limit=10/${params.id}`)
        const data = await res.json()

        if(res.status===404){
            setError('Task not Found')
        }
        
        setTask(data)
        setLoading(false)
    }

    fetchTask()

  })    

  if(error){
    return <Navigate to='/'/>
  }

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
        {/* <p>{pathname}</p> */}
        <h3>{task.text}</h3>
        <p>{["Due: ", task.day.day,"/", task.day.month,"/", task.day.year, " at ", task.day.hour,":", task.day.minute]}</p>
        <Button
            onClick={() => {
                navigate(-1)
            }}
            text='Go Back'
        />
    </div>
  )
}

export default TaskDetails