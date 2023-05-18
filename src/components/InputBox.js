import React from 'react'
import "./InputBox.css" 
import {GrAttachment} from "react-icons/gr"
import {AiOutlineSend} from "react-icons/ai"

const InputBox = () => {
  return (
    <div className='input-box'>
        <input type="text" name="" id="" placeholder='Reply to @Rohit Yadav'/>
        <div>
            <GrAttachment className='icon'/>
            <AiOutlineSend className='icon'/>
        </div>
    </div>
  )
}

export default InputBox