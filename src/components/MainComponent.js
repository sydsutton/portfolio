import React from "react"
import city from "../images/me.png"
import {
    Card
} from "reactstrap"
import projects from "../projects"

const MainComponent = () => {
    return (
        <div className="text-center">
            <div className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="img-col col-lg-4">
                            <div id="circle-1"></div>
                            <div id="circle-2"></div>
                            <div id="circle-3"></div>
                            <div id="circle-4"></div>
                            <img src={city} alt="Me" id="img" height="300" width="300" className="rounded-circle" />
                        </div>
                        <div className="col-lg-8 text-light text-right">
                            <h1 id="name-heading">Andrew <strong>Sutton</strong></h1>
                            <h4 className="text-dark">Front End Web Developer</h4>
                            <div className="btn-group mt-3">
                                <a className="btn text-light" href="/">Resume</a>
                                <a className="btn text-light" href="https://www.linkedin.com/in/andrew-sutton-aa3326205/">LinkedIn</a>
                                <a className="btn text-light" href="/">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Projects</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6">
                            {projects.map(project => {
                                return (
                                <Card className="mt-4 p-3">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img src={project.img} alt="A book search application called yourshelf" height="400" />
                                        </div>
                                        <div className="col-sm-8 text-left">
                                            <h4 className="font-weight-bold">{project.title}</h4>
                                            <p>{project.description}</p>
                                            <h5>Technology Used</h5>
                                            <ul>
                                                {project.tech.map(tech => {
                                                    return (
                                                        <li>{tech}</li>
                                                    )
                                                })
                                            }
                                            </ul>
                                            <div className="btn-group">
                                                <a className="btn text-light" href="/">demo</a>
                                                <a className="btn text-light" href={project.repo}>repo</a>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                                )
                            })}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComponent