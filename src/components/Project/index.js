import React from "react"

const Project = ({ project }) => {
    return (
        <div>
            <h3>{project.title}</h3>
            <h4>{project.deployed}</h4>
            <h4>{project.image}</h4>
            <h4>{project.description}</h4>
            <h4>{project.gitHubLink}</h4>
        </div>
    )
}

export default Project
