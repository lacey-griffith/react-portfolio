import React from 'react';

const Projects = (project) => {
    const currentProject = {
        name: 'namaste fit',
        description: 'yoga tracking api'
    }

    return(
        <section>
            <h1>{currentProject.name}</h1>
            <h4>DEPLOYED LINK:</h4>
            <h4>REPO LINK: </h4>
            <p>{currentProject.description}</p>
        </section>
    )
}

export default Projects;