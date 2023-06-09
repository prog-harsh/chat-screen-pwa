import React from 'react'
import "./Header.css"
import {MdOutlineKeyboardBackspace} from "react-icons/md"
import {BiEdit} from "react-icons/bi"
import GroupPic from "../group.png"

const Header = ({from, to, name, mode}) => {
  return (
    <div className={mode === "online" ? "header sticky" : "header"}>
        <nav>
         <div style={{display: "flex", alignItems: "center"}}>
            <MdOutlineKeyboardBackspace fontSize={25} style={{marginRight: "12px"}}/>
            <h2>{name}</h2>
         </div>
            <BiEdit  fontSize={25}/>
        </nav>
        <div className='trip_details_container'>
            <img src={GroupPic} alt="group" />
            <div className='trip_details'>
                <p>From <span className='bold'>{from}</span></p>
                <p>To <span className='bold'>{to}</span></p>
            </div>
        </div>
    </div>
  )
}

export default Header