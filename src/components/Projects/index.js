import React from 'react';
import Footer from '../Footer';
import NamasteFit from '../../assets/images/namaste_fit.png'
import NationalPark from '../../assets/images/national_park_finder.png'
import CodeQuiz from '../../assets/images/code-quiz.png'
import PasswordGen from '../../assets/images/password_generator.png'

const Projects = () => {
    const projects = [
        {
            name: 'Namaste Fit',
            image: NamasteFit,
            description: 'words go here',
            githubLink: 'github link',
            deploymentLink: 'deployment link'
        },
        {
            name: 'National Park Finder',
            image: NationalPark,
            description: 'words go here',
            githubLink: 'github link',
            deploymentLink: 'deployment link'
        },
        {
            name: 'Code Quiz',
            image: CodeQuiz,
            description: 'words go here',
            githubLink: 'github link',
            deploymentLink: 'deployment link'
        },
        {
            name: 'Password Generator',
            image: PasswordGen,
            description: 'words go here',
            githubLink: 'github link',
            deploymentLink: 'deployment link'
        }
    ]

    return(
        <>
        <section>
            <div className='container'>
            <div className='row'>
            {projects.map(project => (
                <div className='card-group col col-sm-auto col-md-auto col-lg-auto mt-3 mb-3 mx-auto align-self-center' key={project.name}>
                <div className='card results-card col-sm-4 py-2 h-200' style={{"width": "26rem", "height": "38rem"}}>
                <img src={project.image} alt='screenshot of application' class='img-thumbnail'/>
                <div className='card-body'>
                <h2 className='card-title'>{project.name}</h2>
                <p className='card-text'>{project.description}</p>
                <a href={project.deploymentLink} className='card-link'>deployed</a>{' '}
                <a href={project.githubLink} className='card-link'>github</a>
                </div>
                </div>
                </div>
            ))}
            </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Projects;