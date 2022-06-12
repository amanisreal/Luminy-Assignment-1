import React from 'react'
import "./navbar.css"
import { CgProfile } from 'react-icons/cg';

function Navbar() {
  return (
    <div className='nabvarContainer'>
        <div className='leftSide'>
        <div className='imgg'>
          <img src="https://images.unsplash.com/photo-1655031682023-5a8964edbfac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
        </div>
        <h2>Stringar</h2>
        </div>

        <div className='middle'>
            <ul className='middleul'>
                <li className='middleli'>Home</li>
                <li className='middleli'>Games</li>
                <li className='middleli'>Explorer</li>
                <li className='middleli'>User Guide</li>
                <li className='middleli'>Contact Us</li>
            </ul>
        </div>

        <div className='rightSide'>
        <div className='shappe'><div className='point'><span className='points'>P</span></div></div>
          <div className='user'>
            <span className='userName'>Username</span>
            <span> Points</span></div>
            <CgProfile size={40}/>
        </div>
    </div>
  )
}

export default Navbar
