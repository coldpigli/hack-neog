import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>Basic description of the app goes here
        <div>
        <Link to="/fontjoy">Fontjoy</Link>
        </div>
        <div>
        <Link to="/responsively">Responsively</Link>
        </div>
        <div>
        <Link to="/color-contrast">Color Contrast</Link>
        </div>
    </div>
  )
}

export default Landing