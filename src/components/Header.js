import React from 'react';
import Hamburger from './Hamburger'
import NavBar from './NavBar'

const Header = () => {
    return (
      <div className='App header'>
        <Hamburger />
        <NavBar />
      </div>
    )
}

export default Header;