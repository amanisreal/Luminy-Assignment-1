import React from 'react'
import "./explore.css"

function Explore() {
  return (
      <div className='sameContainer'>
        <div className='forborder exploreContainer'>
            <h2 className='explore'>Explore</h2>
            <div className='text'>
            
            <span className='noti'>Notifs</span>
            <br/><span className='noti'>/Friends</span>
            </div>
        </div>

        <div className=' forborder gamesContainer'>
            <h2 className=' explore games'>Games</h2>
            <div className=' gamestext'>
                <div className='text blanki'>

                </div>

                <div className='text leaderboard'>
                    Leaderboard
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore