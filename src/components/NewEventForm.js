import React, { useState } from 'react'
import Button from './Button'
import './NewEventForm.css'

export default function NewEventForm({ addEvents }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [id, setId] = useState(3);
  const [location, setLocation] = useState("manchester")

  const handleResetForm = () => { 
    setTitle('')
    setDate('')
   }
   
   const handleSubmit = (e) => { 
      e.preventDefault()
      const event = {
        title,
        date,
        location,
        id: Math.floor(Math.random() * 10000)
      }

      console.log(event)
      
      addEvents(event);
      handleResetForm()
    }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
        <label>
            <span>Event Title:</span>
            <input 
              type="text" 
              name="title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required
            />
        </label>
        <label>
            <span>Event Date:</span>
            <input 
              type="date" 
              name="event-date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required
            />
        </label>
        <label>
          <span>Event location:</span>
          <select
            name="event-location" 
            id="event-location" 
            onChange={(e) => setLocation(e.target.value)}>
              <option value="manchester">Manchester</option>
              <option value="london">London</option>
              <option value="copenhagen">Copenhagen</option>
          </select>
        </label>
        <Button buttonText="Submit"/>
    </form>
  )
}
