import React from 'react';
import { links } from './links';

const NavBar = () => {

  return (
    <section
      className={`modal-container ${modalOpen ? 'full-modal-container' : ''} ${
        darkMode && modalOpen ? 'modal-dark' : 'modal-bright'
      }`}
    >
      <ul className={`modal-content ${modalOpen ? 'full-modal-content' : ''}`}>
        {links.map((link) => {
          const { id, name, url } = link;
          return (
            <a
              href={url}
              key={id}
              className={`link ${
                darkMode && modalOpen ? 'li-dark-color' : 'li-bright-color'
              }`}
              onClick={() => setModalOpen(false)}
            >
              {name}
            </a>
          );
        })}
      </ul>
    </section>
  );
};

export default NavBar;