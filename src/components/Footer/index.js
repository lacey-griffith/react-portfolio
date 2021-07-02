import React from 'react';
import gitHub from '../../assets/images/GitHub-Mark-64px.png'
import linkedIn from '../../assets/images/LI-In-Bug.png'
import goodReads from '../../assets/images/goodreads-md.png'



const Footer = () => {
    return(
    <section className='footer'>
        <div className='row justify-content-center'>
            <div className='col col-sm-2 col-lg-2'><a href='https://github.com/lacey-griffith' target='blank'><img src={gitHub} className='img-link-social' alt='GitHub logo'/></a></div>
            <div className='col col-sm-2 col-lg-2'><a href='https://www.linkedin.com/in/lacey-griffith/' target='blank'><img src={linkedIn} className='img-link-social' alt='LinkedIn logo'/></a></div>
            <div className='col col-sm-2 col-lg-2'><a href='https://www.goodreads.com/user/show/96106934-lacey' target='blank'><img src={goodReads} className='img-link-social' alt='logo'/></a></div>
            <p className='pt-2'>Lacey Griffith &copy; {new Date().getFullYear()} All Rights Reserved</p>
            </div>
    </section>
    )
};

export default Footer;