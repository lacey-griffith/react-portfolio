import React from 'react';

//nav link images
import home from '../../assets/images/navImages/home.png'
import about from '../../assets/images/navImages/about.png'
import projects from '../../assets/images/navImages/projects.png'
import contact from '../../assets/images/navImages/contact.png'
import resume from '../../assets/images/navImages/resume.png'

const NavBar = (props) => {
    const navLinks = [ 
        {
            navLink: 'Home',
            image: home
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

    return (
        <header>
            <nav className="navbar navbar-nav navbar-expand-md navbar-expand-lg navbar-light text-center">
                <div className="container-fluid text-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                            <path d="M2.994 19.996h-.002c.031.791.267.979.954.999 1.241.013 15.514 0 
                            16.098-.009.679-.022.92-.269.96-.943 0 0-11.384.036-18.01-.047zm3.791-3.992l-3.779-.008c-.585.008-.98.453-1.005.947-.026.523.354 
                            1.033 1.005 1.053h18.008c.645-.034 1.01-.539.985-1.053-.027-.49-.438-.92-.999-.943-1.3-.016-6.41.003-6.554.004-.522.003-.988.277-1.296.459-.89.522-1.587 
                            1.049-2.652 1.038-1.184-.012-1.822-.551-2.57-1.023-.289-.182-.63-.477-1.143-.474zm11.237-2.76c-.678 0-1.293-.307-1.837-.578-1.12-.557-1.213-.558-2.333 
                            0-.543.271-1.159.578-1.838.578-.678 0-1.293-.307-1.837-.578-1.117-.557-1.214-.558-2.332 0-.544.271-1.159.578-1.838.578-.677 
                            0-1.294-.307-1.837-.578-1.002-.499-1.472-.756-2.952.415-.143.113-.304.164-.462.164-.39 0-.756-.311-.756-.75 0-.219.096-.437.282-.584 
                            2.08-1.661 3.239-1.244 4.559-.585.434.216.843.42 1.166.42.324 0 .734-.204 1.166-.42 1.543-.769 2.12-.776 3.676 0 .433.216.843.42 1.165.42.324 0 
                            .734-.204 1.166-.42 1.543-.769 2.119-.776 3.676 0 .435.216.843.42 1.166.42.323 0 .732-.204 1.167-.42 1.301-.649 2.474-1.09 4.536.59.181.148.275.363.275.579 0 
                            .412-.333.748-.751.748-.166 0-.334-.055-.475-.168-1.437-1.167-1.913-.908-2.914-.409-.544.271-1.16.578-1.838.578zm4.978-3.247h-22c.039-5.391 4.829-8.997 
                            11.103-8.997 5.653 0 10.856 3.344 10.897 8.997zm-11.136-7c-3.646.051-7.319 1.58-8.527 4.981l-.007.019h17.34c-1.189-3.488-5.099-5.013-8.806-5zm-2.364 
                            3c.276 0 .5.224.5.5 0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.276.224-.5.5-.5zm5 0c.276 0 .5.224.5.5 0 .275-.224.5-.5.5-.277 0-.5-.225-.5-.5 
                            0-.276.223-.5.5-.5zm4 0c.276 0 .5.224.5.5 0 .275-.224.5-.5.5-.277 0-.5-.225-.5-.5 0-.276.223-.5.5-.5zm-12 0c.276 0 .5.224.5.5 0 
                            .275-.224.5-.5.5s-.5-.225-.5-.5c0-.276.224-.5.5-.5zm5-1c.276 0 .5.224.5.5 0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.276.224-.5.5-.5zm5 0c.276 0 
                            .5.224.5.5 0 .275-.224.5-.5.5-.277 0-.5-.225-.5-.5 0-.276.223-.5.5-.5zm-8-1c.276 0 .5.224.5.5 0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.276.224-.5.5-.5zm5 
                            0c.276 0 .5.224.5.5 0 .275-.224.5-.5.5-.277 0-.5-.225-.5-.5 0-.276.223-.5.5-.5zm-10.577 10c.173-.002 3.778.005 4.077.007 1.443.009 2.422 1.672 3.508 
                            1.666.968-.005 2.284-1.664 3.715-1.666.179-.001 6.189-.016 6.854-.007 1.655.061 2.843 1.35 2.919 2.846.048.931-.338 1.812-1.031 2.418.276 2.333-.924 3.656-2.871 
                            3.725-.6.009-14.933.021-16.188.009-2.168-.068-3.111-1.549-2.88-3.743-.69-.606-1.07-1.485-1.022-2.409.076-1.496 1.264-2.785 2.919-2.846z" />
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse" data-parent="#selector" id="navbarToggler">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {navLinks.map(link => (
                                <li className='nav-item'
                                    key={link.navLink}>
                                    <a
                                        href={'/' + link.navLink.toLowerCase()}
                                        onClick={() => props.setCurrentPage(link.navLink)}
                                        className={props.currentPage === link.navLink ? 'nav-link active' : 'nav-link'}
                                        data-bs-toggle="collapse"
                                        data-bs-target=".navbar-collapse.show"
                                    >
                                        {link.navLink}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*
                    <div>Test</div>
                    <div>Test 2</div>
                    */}
                </div>
            </nav>
        </header>
    )
};

export default NavBar;