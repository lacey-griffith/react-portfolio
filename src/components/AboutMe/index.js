import React from 'react';
import profilePicture from "../../assets/images/bioImage.jpg"

const About = () => {
    return(
        <section className='my-5'>
            <h1 id='about'>A little about me..</h1>
            <img src={profilePicture} className='my-2' alt='profile'></img>
            <p>Ea aliqua dolor consequat exercitation excepteur quis veniam officia veniam sint. Pariatur fugiat esse ut culpa velit irure occaecat id eiusmod minim proident ullamco nostrud magna. Deserunt magna nostrud pariatur occaecat incididunt anim. Fugiat dolore qui est labore. Adipisicing magna cillum elit ad occaecat. Elit ex labore sint pariatur ut dolore eu qui ex elit do. Anim deserunt officia ea nisi nulla cupidatat eiusmod ad deserunt.</p>
        </section>
    )
};

export default About;