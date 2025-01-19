import React from 'react';

//nav link images
//import home from '../../assets/images/navImages/home.png'
import about from '../../assets/images/navImages/about.png'
import projects from '../../assets/images/navImages/projects.png'
import contact from '../../assets/images/navImages/contact.png'
import resume from '../../assets/images/navImages/resume.png'

function NavBar(props) {

const navLinks = [
    // {
    //     navLink: 'Home',
    //     image: home
    // }, 
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
    }];

    console.log(navLinks);
    console.log(props)

  return(
        <header>
        <nav className="navbar navbar-nav navbar-expand-md navbar-expand-lg navbar-light text-center">
            <div className="container-fluid text-center">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" data-parent="#selector" id="navbarToggler">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navLinks.map(link => (
                    <li className='nav-item' 
                        key={link.navLink}>
                            <a 
                            href={'#' + link.navLink.toLowerCase()}
                            onClick={() => props.setCurrentPage(link.navLink)}
                            className={ props.currentPage === link.navLink ? 'nav-link active' : 'nav-link'}
                            data-bs-toggle="collapse" 
                            data-bs-target=".navbar-collapse.show"
                            >
                                {link.navLink}
                            </a>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
        </nav>
        </header>
  )
};

export default NavBar;