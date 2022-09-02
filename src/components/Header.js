import React, {useState} from 'react';
import Hamburger from './Hamburger'
import NavBar from './NavBar'

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

    return (
      <div className='App header' onClick={()=> setModalOpen(!modalOpen)}>
        <Hamburger />
        {modalOpen ? <NavBar /> : ''}      
      </div>
    )
}

export default Header;