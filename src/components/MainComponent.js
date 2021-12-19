import React, {useState} from "react"
import city from "../images/me.png"
import {
    Card, 
} from "reactstrap"
import { 
    Collapse,
    Paper,
    Button,
    Dialog,
    FormGroup,
    Input,
    FormLabel
 } from '@mui/material'
import {
    LinkedIn,
    GitHub,
    EmojiPeople, 
    Code, 
    Edit,
    AlternateEmail
 } from '@mui/icons-material';
import projects from "../projects"

const MainComponent = () => {
    const [aboutOpen, setAboutOpen] = useState(false)
    const [projectOpen, setProjectOpen] = useState(false)
    const [photoOpen, setPhotoOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <div className="text-center">
            <div className="container pt-5 pl-5">
                <div className="row">
                    <div className="img-col col-sm-3 mt-3">
                        <div id="circle-1"></div>
                        <div id="circle-2"></div>
                        <div id="circle-3"></div>
                        <div id="circle-4"></div>
                        <img src={city} alt="Me" id="img" height="300" width="300" className="rounded-circle" />
                    </div>
                    <div className="col-sm-9 text-light text-right mt-3 w-100">
                        <h1 id="name-heading">Andrew <strong>Sutton</strong></h1>
                        <h4 className="text-dark">Front End Web Developer</h4>
                        <div className="btn-group mt-3">
                            <a className="btn text-light" href="/">Resume</a>
                            <a className="btn text-light" href="https://www.linkedin.com/in/andrew-sutton-aa3326205/"><LinkedIn /></a>
                            <a className="btn text-light" href="/"><GitHub /></a>
                        </div>
                    </div>
                </div>
            </div>
            <Button 
                variant="contained" 
                className="btn mt-5 btn-wide mb-2" 
                onClick={() => setAboutOpen(!aboutOpen)}
                endIcon={<EmojiPeople />}
            >
                    Background
            </Button>
            <Collapse in={aboutOpen} timeout={1000}>
                <Paper className="container my-3" elevation={1}>
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="mt-3">Me</h4>
                            <p>An Indoor Skydiving Instructor turned Front End Developer. 
                                Whether it's painting, photography, photo editing, or music, I have always 
                                loved to create things from scratch; naturally coding fit me well. Like a lot 
                                of other people in 2021, I was looking for a change in careers. After teaching 
                                myself coding for a couple of months, I decided to enroll in a coding bootcamp 
                                through NuCamp, and the rest is history.</p>
                        </div>
                        <div className="col-md-6">
                            <h4 className="mt-3">Education</h4>
                            <ul className="text-left">
                                <li><h5>NuCamp Front End Web Development</h5></li>
                                <p>Online Web Development Bootcamp
                                August 2021 - December 2021</p>

                                <li><h5>Bachelor of Arts in Psychology/ Minor in Communications</h5></li>
                                <p>Northern Illinois University
                                2014 - Graduated cum laude
                                </p>
                            </ul>
                        </div>
                    </div>
                </Paper>
            </Collapse>

            <Button 
                variant="contained" 
                onClick={() => setProjectOpen(!projectOpen)} 
                className="btn btn-wide mb-2"
                endIcon={<Code />}
            >
                Projects
            </Button>
            <Collapse in={projectOpen} timeout={1000}>
                <Paper className="container my-3" elevation={1}>
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
                    <button className="btn my-3 text-light" onClick={() => setProjectOpen(!projectOpen)}>X</button>
                </Paper>
            </Collapse>
            <Button 
                variant="contained" 
                onClick={() => setPhotoOpen(!photoOpen)} 
                className="btn btn-wide mb-2"
                endIcon={<Edit />}
            >
                Photo Editing
            </Button>
            <Collapse in={photoOpen} timeout={1000}>
                <Paper className="container" elevation={1}>
                    <div className="row">
                        <div className="col">
                            <p>Hello</p>
                        </div>
                    </div>
                </Paper>
            </Collapse>
            <Button 
                variant="contained" 
                className="btn btn-wide" 
                onClick={() => setDialogOpen(!dialogOpen)}
                endIcon={<AlternateEmail />}
            >
                Contact Me
            </Button>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(!dialogOpen)}>
                <FormGroup>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" name="Your name"/>
                </FormGroup>
            </Dialog>
        </div>
    )
}

export default MainComponent