import React from "react"
import Project from "../Project"

const Projects = ({ projects }) => {
    return (
        <div>
            {projects.map((project) => (
                <Project project={project} key={project.title} />
            ))}
        </div>
    )
}

export default Projects