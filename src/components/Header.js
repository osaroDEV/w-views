import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
      <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/creators'>Wassapviews Creators</Link>
        </li>
        <li>
          <Link to='/downloads'>Downloads</Link>
        </li>
        <li>
          <Link to='/help'>Help Center/Guide</Link>
        </li>
        <li>
          <Link to='/howto'>How to Install the VCF File</Link>
        </li>
        <li>
          <Link to='/TOS'>Terms of Service</Link>
        </li>
        <li>
          <Link to='/contactus'>Contact Us</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
    </nav>
    )
}

export default Header;