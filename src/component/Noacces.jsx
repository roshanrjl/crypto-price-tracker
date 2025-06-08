import React from 'react'
import notfound from '../assets/image.webp'
import { Link } from 'react-router-dom'

function Noacces() {
  return (
    <div>
        <img src={notfound} alt="image" />
        <div>
            <p> you need to login to access this page</p>
            <p>want to login?
                <Link
                to= "/login"
                className=""
                >
                Login
                </Link>
            </p>
        </div>
    </div>
  )
}

export default Noacces