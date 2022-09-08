import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
    
    <div className={`modal-container modal-bright ${modalOpen ? 'full-modal-container' : ''}` }>
      <ul className={`modal-content ${modalOpen ? 'full-modal-content' : ''}`}>
        <li className= 'link' onClick={() => setModalOpen(false)}>
          <Link to='/'>Home</Link>
        </li>
        <li className= 'link'
          onClick={() => setModalOpen(false)}>
          <Link to='/creators'>Wassapviews Creators</Link>
        </li>
        <li 
          onClick={() => setModalOpen(false)}>
        <Link to='/downloads'>Downloads</Link>
      </li>
      <li className= 'link'
      onClick={() => setModalOpen(false)}
      >
        <Link to='/help'>Help Center/Guide</Link>
      </li>
      <li className= 'link'
      onClick={() => setModalOpen(false)}
      >
        <Link to='/howto'>How to Install the VCF File</Link>
      </li>
      <li className= 'link'
      onClick={() => setModalOpen(false)}
      >
        <Link to='/TOS'>Terms of Service</Link>
      </li>
      <li className= 'link'
      onClick={() => setModalOpen(false)}
      >
        <Link to='/contactus'>Contact Us</Link>
      </li>
      <li className= 'link'
      onClick={() => setModalOpen(false)}
      >
        <Link to='/login'>Login</Link>
      </li>
      <li className= 'link'
      onClick={() => setModalOpen(false)}
      >
        <Link to='/register'>Register</Link>
      </li>
    </ul>
  {/* </nav>) : ''} */}
  {/* <h1>NAVBAR</h1> */}
    </div> 
    </>
  );
};

export default NavBar;