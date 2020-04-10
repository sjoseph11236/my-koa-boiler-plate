import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => { 

  return(
    <div>
      <nav className="level">
        <div className="level-left">
        </div>
        <div className="level-right">
          <p className="level-item">
            <Link to='/'>
              <u>Home</u>
            </Link>
          </p>
          <p className="level-item">
            <Link to='/signin'>
              <u>Sign In</u>
            </Link>
          </p>
          <p className="level-item">
            <Link to='/register'>
              <u>Register</u>
            </Link>
          </p>
        </div>
      </nav>
    </div>
  )
}


export default Nav;