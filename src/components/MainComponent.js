import React, {useState} from "react"
import city from "../images/me.png"
import {
    Card, 
} from "reactstrap"
import { 
    Collapse,
    Paper
 } from '@mui/material'
import {
    LinkedInIcon,
    GitHubIcon
 } from '@mui/icons-material';
import projects from "../projects"

const MainComponent = () => {
    const [aboutOpen, setAboutOpen] = useState(false)
    const [projectOpen, setProjectOpen] = useState(false)

    return (
        <div className="text-center">
            <div className="container pt-5 pl-5">
                <div className="row">
                    <div className="img-col col-md-3 mt-3">
                        <div id="circle-1"></div>
                        <div id="circle-2"></div>
                        <div id="circle-3"></div>
                        <div id="circle-4"></div>
                        <img src={city} alt="Me" id="img" height="300" width="300" className="rounded-circle" />
                    </div>
                    <div className="col-lg-9 text-light text-right mt-3 w-100">
                        <h1 id="name-heading">Andrew <strong>Sutton</strong></h1>
                        <h4 className="text-dark">Front End Web Developer</h4>
                        <div className="btn-group mt-3">
                            <a className="btn text-light" href="/">Resume</a>
                            <a className="btn text-light" href="https://www.linkedin.com/in/andrew-sutton-aa3326205/"><LinkedInIcon /></a>
                            <a className="btn text-light" href="/"><GitHubIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn mt-5" onClick={() => setAboutOpen(!aboutOpen)}>Me</button>
            <Collapse in={aboutOpen}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>An indoor-skydiving-Instructor-turned-developer</p>
                        </div>
                    </div>
                </div>
            </Collapse>

            <button onClick={() => setProjectOpen(!projectOpen)} className="btn">Projects</button>
            <Collapse in={projectOpen} timeout={1000}>
                <div className="container">
                    <div className="row">
                        {projects.map(project => {
                            return (
                            <div className="col-lg-6">
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
                            </div>
                            )
                        })}
                    </div>
                </div>
            </Collapse>
                <div className="container">
                    <div className="row">

                    </div>
                </div>
        </div>
    )
}

export default MainComponent