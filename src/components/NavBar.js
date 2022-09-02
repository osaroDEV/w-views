import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    
    <section>
   
    {modalOpen ? (<nav className={`modal-container ${modalOpen ? 'full-modal-container' : ''}`} onClick={() => setModalOpen(true)}>
    <ul className={`modal-content ${modalOpen ? 'full-modal-content' : ''}`} onClick={() => setModalOpen(true)}>
      <li 
      onClick={() => setModalOpen(false)}
      >
        <Link to='/'>Home</Link>
      </li>
      <li 
      onClick={() => setModalOpen(false)}
      >
        <Link to='/creators'>Wassapviews Creators</Link>
      </li>
      <li 
      onClick={() => setModalOpen(false)}
      >
        <Link to='/downloads'>Downloads</Link>
      </li>
      <li 
      onClick={() => setModalOpen(false)}
      >
        <Link to='/help'>Help Center/Guide</Link>
      </li>
      <li 
      onClick={() => setModalOpen(false)}
      >
        <Link to='/howto'>How to Install the VCF File</Link>
      </li>
      <li 
      onClick={() => setModalOpen(false)}
      >
        <Link to='/TOS'>Terms of Service</Link>
      </li>
      <li 
      onClick={() => setModalOpen(false)}
      >
        <Link to='/contactus'>Contact Us</Link>
      </li>
      <li 
      onClick={() => setModalOpen(false)}
      >
        <Link to='/login'>Login</Link>
      </li>
      <li 
      onClick={() => setModalOpen(false)}
      >
        <Link to='/register'>Register</Link>
      </li>
    </ul>
  </nav>) : ''}
  {/* <h1>NAVBAR</h1> */}
    </section> 
    </>
  );
};

export default NavBar;