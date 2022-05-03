import React from 'react'
import './Button.css'

export default function Button({ buttonText, handleEvent }) {
  return (
    <>
        <button onClick={handleEvent}>{buttonText}</button>
    </>
  )
}
