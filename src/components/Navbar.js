import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="flex justify-center">
        <div className="navbar">
            <ul className='flex h-24 justify-center items-center gap-3'>
                <li className='list-items'><Link className="" to="/">Home</Link></li>
                <li className='list-items'><Link className="" to="/spinner-first">Spinner First</Link></li>
                <li className='list-items'><Link className="" to="/spinner-second">Spinner Second</Link></li>
                <li className='list-items'><Link className="" to="/spinner-third">Spinner Third</Link></li>
                <li className='list-items'><Link className="" to="/learnmore-button">Learn More Button</Link></li>
                <li className='list-items'><Link className="" to="/button">Search Button</Link></li>
                <li className='list-items'><Link className="" to="/3d-cube">Rotating 3D Cube</Link></li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
