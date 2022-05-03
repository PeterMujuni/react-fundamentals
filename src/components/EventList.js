import React from 'react'
import Button from './Button'
import styles from './EventList.module.css'

export default function EventList({buttonText, handleEvent, events}) {
  return (
    <>
        {events.map((event, index) => (
                <div className={styles.card} key={event.id}>
                <h2>{index} - {event.title}</h2>
                <p>{event.location} - {event.date}</p>
                <Button buttonText={buttonText} handleEvent={() => handleEvent(event.id)}/>         
                </div>
            ))}
    </>
  )
}
