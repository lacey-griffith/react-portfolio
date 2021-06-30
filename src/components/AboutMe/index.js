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
            Nice to meet you! I'm Lacey, currently a student at the University of Texas at Austin following my goals to become a Web Developer. 
            Before this journey, I owned a coffee shop outside of Austin. It was tough, tiring and frustrating. More importantly, it was rewarding. 
            I learned to solve problems, often on the fly. I drank awesome coffee (definitely a perk!) and I met people on all walks of life, 
            which taught me the value in human connection. I experienced the importance of communication, persistence and clarity. 
            I learned that you can start something new and be pretty bad at it but every day you'll get better if you commit the time to it.

            <br/><br/>
            When I'm not working on code or design, I'm typically cooking or outside with my son and dog. 
            I love reading, music, photography and making lists! I am an INFJ actively trying to understand the ways of extroverts. 
            </p>
            </div>
            </div>
            <div><Footer/></div>
        </section>
    )
};

export default About;