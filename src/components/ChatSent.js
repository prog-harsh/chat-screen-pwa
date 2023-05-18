import React from 'react'
import "./Chat.css"

const ChatRecived = ({message, image}) => {
  return (
    <div className='chatsent'>
        <p>{message}</p>
    </div>
  )
}

export default ChatRecived