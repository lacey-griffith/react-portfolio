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

            {projects.map(project => (
                <div>
                <h1>{project.name}</h1>
                <h5>{project.image}</h5>
                <h4>{project.deploymentLink}</h4>
                <h4>{project.githubLink}</h4>
                <p>{project.description}</p>
                </div>
            ))}

        </section>
    )
}

export default Projects;