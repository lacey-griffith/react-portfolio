import React from 'react';
import Footer from '../Footer';
import profilePicture from "../../assets/images/bioImage.jpg"

const About = () => {
    return(
        <section className='my-5'>
            <div className='container d-flex flex-column text-center'>

                <div className='p-2'>
            <img src={profilePicture} className='my-2 profile-image' alt='profile'></img>
            </div>

            <div className='p-2'>
            <p className='about-me'>
                Hi! I'm Lacey. 
            </p>
            </div>
            </div>
            <div><Footer/></div>
        </section>
    )
};

export default About;