import React, { useEffect } from 'react';

function NavBar(props) {
    const {
        navLinks = [],
        setCurrentLink,
        currentLink
    } = props;

    useEffect(() => {
        document.title = currentLink.name
    }, [currentLink]);

    return(
        <header>
            <nav>
                <ul className='flex-row'>
                {navLinks.map((link) => (
            <li className={`mx-1 ${currentLink.name === link.name && 'navActive'}`} key={link.name}>
              <span onClick={() => {setCurrentLink(link)}}>
                {link.name}
              </span>
            </li>
          ))}
                </ul>
            </nav>
        </header>
    )
};

export default NavBar;