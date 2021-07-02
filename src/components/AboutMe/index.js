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
            Nice to meet you! I'm Lacey, a Full Stack Developer. I recieved my certification through the University of Texas at Austin. 
            Before this journey, I owned a coffee shop outside of Austin. It was tough, tiring and frustrating. More importantly, it was rewarding. 
            I learned to solve problems, often on the fly. I drank awesome coffee (definitely a perk!) and I met people on all walks of life, 
            which taught me the value in human connection. I experienced the importance of communication, persistence and clarity. Above all, I found 
            so much joy in learning. Transitioning from barista to ownership definitely came with a steep learning curve and I'm a better learner now that I was before. 

            <br/><br/>
            When I'm not working on code or design, I'm spending my time cooking or hanging out with my son and dog swimming, geocaching, getting ice cream and having Harry Potter marathons. 
            I love reading, music, photography, creative expression and making lists! I am an INFJ actively trying to understand the ways of extroverts. 
            </p>
            </div>
            </div>
            <div><Footer/></div>
        </section>
    )
};

export default About;