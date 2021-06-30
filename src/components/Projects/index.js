import React from 'react';
import Footer from '../Footer';

import NamasteFit from '../../assets/images/namaste_fit.png'
import NationalPark from '../../assets/images/national_park_finder.png'
import CodeQuiz from '../../assets/images/code-quiz.png'
import PasswordGen from '../../assets/images/password_generator.png'

const Projects = () => {
    const tech = [
        {
            language: 'HTML',
            id: 0
        },
        {
            language: 'CSS',
            id: 1
        },
        {
            language: 'BootStrap',
            id: 2
        },
        {
            language: 'Foundations',
            id: 3
        },
        {
            language: 'JavaScript',
            id: 4
        },
        {
            language: 'jQuery',
            id: 5
        },
        {
            language: 'Handlebars.js',
            id: 6
        },
        {
            language: '',
            id: 7
        },
        {
            language: '',
            id: 8
        },
        {
            language: '',
            id: 9
        },
        {
            language: '',
            id: 10
        }
    ]

    const projects = [
        {
            name: 'Namaste Fit',
            image: NamasteFit,
            description: 'This application allows yoga enthusiasts to learn more about yoga poses. Our motivation for developing Namaste Fit is to improve the experiences surrounding yoga, personal journeys and education.',
            githubLink: 'https://github.com/lacey-griffith/yoga',
            deploymentLink: 'https://yoga-finish.herokuapp.com/',
            techUsed: [tech[0], tech[1], tech[2],tech[3],tech[4],tech[5],tech[6]]
        },
        {
            name: 'National Park Finder',
            image: NationalPark,
            description: 'words go here',
            githubLink: 'github link',
            deploymentLink: 'deployment link',
            techUsed: [tech[0]]
        },
        {
            name: 'Code Quiz',
            image: CodeQuiz,
            description: 'words go here',
            githubLink: 'github link',
            deploymentLink: 'deployment link',
            techUsed: [tech[0]]
        },
        {
            name: 'Password Generator',
            image: PasswordGen,
            description: 'words go here',
            githubLink: 'github link',
            deploymentLink: 'deployment link',
            techUsed: [tech[0]]
        }
    ]

    return(
        <>
        <section>
            <div className='container'>
            <div className='row'>
            {projects.map(project => (
                <div className='card-group col col-sm-auto col-md-auto col-lg-auto mt-3 mb-3 mx-auto align-self-center' key={project.name}>
                <div className='card results-card col-sm-4 py-2 h-200' style={{"width": "26rem", "height": "auto"}}>
                <img src={project.image} alt='screenshot of application' className='img-thumbnail'/>
                <div className='card-body'>
                <h2 className='card-title'>{project.name}</h2>
                <p className='card-text'>{project.description}</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Technologies used:</li>
                    {project.techUsed.map(tech => (
                            <li className="list-group-item" key={tech.id}>{tech.language}</li>
                    ))}
                </ul>
                <a href={project.deploymentLink} className='card-link' target='blank'>deployed</a>{' '}
                <a href={project.githubLink} className='card-link' target='blank'>github</a>
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