import React from "react"
import Card from 'react-bootstrap/Card'

const Project = ({ project }) => {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={project.image} />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>
          {project.description}
          </Card.Text>
          <Card.Link href={project.deployed}>Deployed App</Card.Link>
          <Card.Link href={project.gitHubLink}>GitHub Repo</Card.Link>
        </Card.Body>
      </Card>
      </div>
    )
}

export default Project
