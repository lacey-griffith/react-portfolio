import React from 'react';

function NavBar(props) {
const navLinks = ['Home', 'About', 'Projects', 'Contact', 'Resume']

  return(
      <ul>
          {navLinks.map(link => (
              <li className='nav-item' 
                key={link}>
                <a 
                href={'#' + link.toLowerCase()}
                onClick={() => props.setCurrentPage(link)}
                className={ props.currentPage === link ? 'nav-link active' : 'nav-link'}
                >
                    {link}
                    </a>
              </li>
          ))}
      </ul>
  )
};

export default NavBar;