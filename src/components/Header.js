import React from 'react'
import "./Header.css"

const Header = ({from, to, name}) => {
  return (
    <div className='header'>
        <nav>
            <h2>{name}</h2>
            <h3>Edit</h3>
        </nav>
        <div className='trip_details_container'>
            <img src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?cs=srgb&dl=pexels-fauxels-3184398.jpg&fm=jpg" alt="group" />
            <div className='trip_details'>
                <p>From <span className='bold'>{from}</span></p>
                <p>To <span className='bold'>{to}</span></p>
            </div>
        </div>
    </div>
  )
}

export default Header