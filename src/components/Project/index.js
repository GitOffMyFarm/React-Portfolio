import React from "react"
import Card from 'react-bootstrap/Card'

const Project = ({ project }) => {
    return (
        <div>
        <Card className="card col-md-5 col-sm-12 d-flex align-items-stretch m-2" >
        <Card.Img variant="top" src={project.image} className="card-img-top" />
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
