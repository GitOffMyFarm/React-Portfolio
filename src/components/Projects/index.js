import React from "react"
import Project from "../Project"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Projects = ({ projects }) => {
    return (
        <div>
            <Row xs={1} md={2} className="g-4 justify-content-center">
            {projects.map((project) => (
                <Col>
                <Project project={project} key={project.title} />
                </Col>
            ))}
            </Row>
        </div>
    )
}

export default Projects