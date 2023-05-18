import React from 'react'
import ChatSent from './ChatSent'
import ChatRecived from './ChatRecived'
import "./Chat.css";


const Chats = ({chatsData}) => {
  return (
    <div className='container'>
        {
            chatsData.map(chat => {
                if(chat.sender.self){
                    return <ChatSent key={chat.id} message={chat.message} image={chat.sender.image}/>
                }
                else{
                    return <ChatRecived key={chat.id} message={chat.message} image={chat.sender.image}/>
                }
            })
        }
    </div>
  )
}

export default Chats