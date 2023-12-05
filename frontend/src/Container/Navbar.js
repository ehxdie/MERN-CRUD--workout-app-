import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    
  return (
    <header>
        <div className='container'>
             {/* Link to works like an <a href> tag (But is different kind of hahaha) */}
             <Link to={"/"}>
                <h1>Workout Buddy</h1>
             </Link>
        </div>
    </header>
    
  )
}

export default Navbar