import React, { useState } from 'react';
import { CgMenuLeft, CgClose } from 'react-icons/cg';

const Hamburger = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div
      className='hamburger-container flex'
    >
      {modalOpen ? (
        <CgClose className='menu-icon' onClick={() => setModalOpen(!modalOpen)} />
      ) : (
        <CgMenuLeft className='menu-icon' onClick={() => setModalOpen(!modalOpen)} />
      )}
    </div>
  );
};

export default Hamburger;