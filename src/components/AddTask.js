import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar';
import DateTimePicker from 'react-datetime-picker';
import DtPicker from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'

const AddTask = ({onAdd}) => {

  const [text, setText] = useState('')
  // const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
  const [day, setDay] = useState(new Date())
  
const onSubmit = (e) => {
    e.preventDefault()

    if(!text){
        alert('Please add a task')
        return
    }
    console.log({text, day, reminder})
    onAdd({text, day, reminder})

    setText('')
    setDay(new Date())
    setReminder(false)

}

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' 
            value={text}
            onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Date & Time</label>
            <DtPicker onChange={setDay} withTime={true} value={day} placeholder='Select Reminder Date & Time'/>
            {/* <DateTimePicker onChange={setDay} value={day} isClockOpen={true}/> */}
            {/* <Calendar onChange={setDay} value={day} dateFormat="dd/mm/yy"/> */}
            {/* <input type='text' placeholder='Add Date'
            value={day}
            onChange={(e) => setDay(e.target.value)}/> */}
            
        </div>

        
        
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox'
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='submit' value='Save Task'
        className='btn btn-block-blue'
        style={{backgroundColor:'blue'}}/>
    
    
    </form>
  )
}

export default AddTask