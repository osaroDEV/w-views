import React from 'react';
import {Link} from 'react-router-dom'
// import Hamburger from './Hamburger';
// import NavBar from './NavBar';
// import { useGlobalContext } from '../context';

// const Header = () => {
//   const { darkMode } = useGlobalContext();

//   return (
//     <section className='header'>
//       <a href='https://osarodev.com'>
//         {' '}
//         <img
//           className='logo'
//           src={`${darkMode ? darklogo : lightlogo}`}
//           alt='osarodev logo'
//         />
//       </a>
//       <div>
//         <Hamburger />
//         <NavBar />
//       </div>
//     </section>
//   );
// };


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
      </ul>
    </nav>
    )
}

export default Header;