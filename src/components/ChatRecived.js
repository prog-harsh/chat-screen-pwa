import React from 'react'
import "./Chat.css"

const ChatRecived = ({message, image}) => {
  return (
    <div className='chatrecived'>
        <img src={image} alt="image" />
        <p>{message}</p>
    </div>
  )
}

export default ChatRecived