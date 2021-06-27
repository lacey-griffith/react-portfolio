import React from 'react';

const NavBar = () => {
    return(
        <header>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about'>
                            about
                        </a>
                    </li>
                    <li>
                        <span>
                            Contact
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}