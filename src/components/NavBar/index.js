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
                    <li class='mx-2'>
                        <span>
                            portfolio
                        </span>
                    </li>
                    <li class='mx-2'>
                        <span>
                            contact
                        </span>
                    </li>
                    <li class='mx-2'>
                        <span>
                            resume
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default NavBar;