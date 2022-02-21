import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='header-wrapper'>
        <Link to="/">iEmployee</Link>
    </header>
  )
}

export default Header