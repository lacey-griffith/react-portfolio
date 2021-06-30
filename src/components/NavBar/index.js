import React from 'react';

//nav link images
import home from '../../assets/images/navImages/home.png'
import about from '../../assets/images/navImages/about.png'
import projects from '../../assets/images/navImages/projects.png'
import contact from '../../assets/images/navImages/contact.png'
import resume from '../../assets/images/navImages/resume.png'

function NavBar(props) {
const navLinks = [
    {
        navLink: 'Home',
        image: home
    }, 
    {
        navLink: 'About',
        image: about
    },
    {
        navLink: 'Projects',
        image: projects
    },
    {
        navLink: 'Contact',
        image: contact
    },
    {
        navLink: 'Resume',
        image: resume
    }]

  return(
      <nav className='navbar navbar-expand-sm navbar-expand-md navbar-expand-lg justify-content-center'>
      <ul className='navbar-nav'>
          {navLinks.map(link => (
              //<Link to={`/${link.navLink.toLowerCase()}'}>{navLink}</Link>
              <li className='nav-item' 
                key={link.navLink}>
                <a 
                href={'#' + link.navLink.toLowerCase()}
                onClick={() => props.setCurrentPage(link)}
                className={ props.currentPage === link ? 'nav-link active nav-image' : 'nav-link nav-image'}
                >
                    <img src={link.image} alt={link.NavLink}/>
                    {/* {link.navLink} */}
                    </a>
              </li>
          ))}
      </ul>
      </nav>
  )
};

export default NavBar;