import React from 'react';

const Projects = () => {
    const projects = [
        {
            name: 'Namaste Fit',
            image: 'image src',
            description: 'words go here',
            githubLink: 'github link',
            deploymentLink: 'deployment link'
        },
        {
            name: 'National Park Finder',
            image: 'image src',
            description: 'words go here',
            githubLink: 'github link',
            deploymentLink: 'deployment link'
        },
        {
            name: 'Code Quiz',
            image: 'image src',
            description: 'words go here',
            githubLink: 'github link',
            deploymentLink: 'deployment link'
        },
        {
            name: 'Password Generator',
            image: 'image src',
            description: 'words go here',
            githubLink: 'github link',
            deploymentLink: 'deployment link'
        }
    ]

    return(
        <section>
            <div className='container'>
            <div className='row'>
            {projects.map(project => (
                <div className='card-group col col-sm-auto col-md-auto col-lg-auto mt-3 mb-3 mx-auto align-self-center'>
                <div className='card results-card col-sm-4 py-2 h-200' style={{"width": "28rem", "height": "36rem"}}>
                <h5>{project.image}</h5>
                <div className='card-body'>
                <h1 className='card-title'>{project.name}</h1>
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
    )
}

export default Projects;