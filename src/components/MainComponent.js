import React, {useState} from "react"

import me from "../images/me.png"
import album from "../images/gallery/Album.jpg"
import marble from "../images/gallery/Marble.jpg"
import ellie from "../images/gallery/Ellie.jpg"
import cover from "../images/gallery/FrontCover.jpg"
import swings from "../images/gallery/swings.jpg"
import city from "../images/gallery/City.jpg"

import react from "../images/React.png"
import allthree from "../images/allthree.png"
import bootstrap from "../images/bootstrap.png"
import git from "../images/git.png"
import github from "../images/github.png"
import vscode from "../images/vscode.png"
import api from "../images/api.png"

import { 
    Card,
    Collapse,
    Paper,
    Button,
    Dialog,
    FormGroup,
    Input,
    FormLabel,
    ImageList,
    ImageListItem
 } from '@mui/material'

import {
    LinkedIn,
    GitHub,
    EmojiPeople, 
    Code, 
    Edit,
    AlternateEmail,
    ArrowUpward,
    Article,
    Handyman
 } from '@mui/icons-material';
import projects from "../projects"

const MainComponent = () => {
    const [aboutOpen, setAboutOpen] = useState(false)
    const [projectOpen, setProjectOpen] = useState(false)
    const [photoOpen, setPhotoOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [codeOpen, setCodeOpen] = useState(false)

    return (
        <div className="text-center">
            <div className="container pt-5 pl-5">
                <div className="row">
                    <div className="img-col col-md-3 mt-3">
                        <div id="circle-1"></div>
                        <div id="circle-2"></div>
                        <div id="circle-3"></div>
                        <div id="circle-4"></div>
                        <img src={me} alt="Me" id="img" height="300" width="300" className="rounded-circle" />
                    </div>
                    <div className="col-md-9 text-light text-right mt-3 w-100">
                        <h1 id="name-heading">Andrew <strong>Sutton</strong></h1>
                        <h4 className="text-dark">Front End Web Developer</h4>
                        <div className="mt-3">
                            <Button variant="contained" className="btn mx-2" onClick={() => window.open("https://www.linkedin.com/in/andrew-sutton-aa3326205/")}><Article /></Button>
                            <Button variant="contained" className="btn mx-2" onClick={() => window.open("https://www.linkedin.com/in/andrew-sutton-aa3326205/")}><LinkedIn /></Button>
                            <Button variant="contained" className="btn mx-2" onClick={() => window.open("https://github.com/sydsutton")}><GitHub /></Button>
                        </div>
                        <div className="ml-auto text-dark w-50 mt-4">
                            <h5>You can’t use up creativity. The more you use, the more you have.”</h5><p> – Maya Angelou</p>
                        </div>
                    </div>
                </div>
            </div>
            <Button 
                variant="contained" 
                className="btn mt-5 btn-wide mb-2" 
                onClick={() => setAboutOpen(!aboutOpen)}
                endIcon={<EmojiPeople />}
                sx={{backgroundImage: "linear-gradient(135deg, #8ed9e7, #8353d7)"}}
            >
                    Background
            </Button>
            <Collapse in={aboutOpen} timeout={1000}>
                <Paper className="container my-3 text-dark gradient" elevation={1}>
                    <div className="row justify-content-between">
                        <Card className="col-md-5 m-3">
                            <h4 className="mt-3">Me</h4>
                            <p>An Indoor Skydiving Instructor turned Front End Developer. 
                                Whether it's painting, photography, photo editing, or music, I have always 
                                loved to create things from scratch; naturally coding fit me well. Like a lot 
                                of other people in 2021, I was looking for a change in careers. After teaching 
                                myself coding for a couple of months, I decided to enroll in a coding bootcamp 
                                through NuCamp, and the rest is history.</p>
                        </Card>
                        <Card className="col-md-5 m-3">
                            <h4 className="mt-3">Education</h4>
                            <ul className="text-left">
                                <li><h5>NuCamp Front End Web Development</h5></li>
                                <p>Online Web Development Bootcamp<br/>
                                August 2021 - December 2021</p>

                                <li><h5>Bachelor of Arts in Psychology/ Minor in Communications</h5></li>
                                <p>Northern Illinois University 2014<br/>
                                 Graduated cum laude</p>
                            </ul>
                        </Card>
                    </div>
                    <Button 
                        endIcon={<ArrowUpward />}
                        className="my-3 btn-up" 
                        onClick={() => setAboutOpen(!aboutOpen)}
                        sx={{color: "rgba(0,0,0,.9)"}}
                    >
                        Back up
                    </Button>
                </Paper>
            </Collapse>
            <Button 
                variant="contained" 
                className="btn btn-wide mb-2" 
                onClick={() => setCodeOpen(!codeOpen)}
                endIcon={<Handyman />}
                sx={{backgroundImage: "linear-gradient(135deg, #8ed9e7, #8353d7)"}}
            >
                    Tools
            </Button>
            <Collapse in={codeOpen} timeout={1000}>
                <Paper className="container my-3 py-4 gradient" elevation={1}>
                    <div className="row justify-content-center">
                        <img className="text-right mx-2" src={allthree} height="50"/>
                        <img className="text-right mx-2" src={react} height="50"/>
                        <img className="text-right mx-2" src={bootstrap} height="50"/>
                        <img className="text-right mx-2" src={git} height="50"/>
                        <img className="text-right mx-2" src={github} height="50"/>
                        <img className="text-right mx-2" src={vscode} height="50"/>
                        <img className="text-right mx-2" src={api} height="50"/>
                    </div>
                </Paper>
            </Collapse>

            <Button 
                variant="contained" 
                onClick={() => setProjectOpen(!projectOpen)} 
                className="btn btn-wide mb-2"
                sx={{backgroundImage: "linear-gradient(135deg, #8ed9e7, #8353d7)"}}
                endIcon={<Code />}
            >
                Projects
            </Button>
            <Collapse in={projectOpen} timeout={1000}>
                <Paper className="container my-3 gradient" elevation={1}>
                    <div className="row">
                        {projects.map((project, index) => {
                            return (
                            <div className="col-lg-6">
                                <Card key={index} className="mt-4 p-3">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img src={project.img} alt="A book search application called yourshelf" height="400" />
                                        </div>
                                        <div className="col-sm-8 text-left">
                                            <h4 className="font-weight-bold">{project.title}</h4>
                                            <p>{project.description}</p>
                                            <h5>Technology Used</h5>
                                            <ul>
                                                {project.tech.map((tech, index) => {
                                                    return (
                                                        <li key={index}>{tech}</li>
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
                    <Button 
                        endIcon={<ArrowUpward />}
                        className="my-3 btn-up" 
                        sx={{backgroundImage: "linear-gradient(135deg, #8ed9e7, #8353d7)"}}
                        onClick={() => setProjectOpen(!projectOpen)}
                        sx={{color: "rgba(0,0,0,.9)"}}
                    >
                        Back up
                    </Button>
                </Paper>
            </Collapse>
            <Button 
                variant="contained" 
                onClick={() => setPhotoOpen(!photoOpen)} 
                sx={{backgroundImage: "linear-gradient(135deg, #8ed9e7, #8353d7)"}}
                className="btn btn-wide mb-2"
                endIcon={<Edit />}
            >
                Photo Editing
            </Button>
            <Collapse in={photoOpen} timeout={1000}>
                <Paper className="container gradient p-3 my-3" elevation={1}>
                    <div className="row">
                        <div className="col">
                            <ImageList sx={{ width: "auto", height: "auto"}} cols={3} rowHeight="auto">
                                <ImageListItem>
                                    <img
                                        src={album}
                                        alt="album cover"
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={marble}
                                        alt="marble in hand"
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={ellie}
                                        alt="girl listening to music"
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={city}
                                        alt="man with eye sewn shut"
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={swings}
                                        alt="swings tied together"
                                        loading="lazy"
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={cover}
                                        alt="album cover"
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            </ImageList>
                        </div>
                    </div>
                    <Button 
                        endIcon={<ArrowUpward />}
                        className="my-3 btn-up" 
                        sx={{backgroundImage: "linear-gradient(135deg, #8ed9e7, #8353d7)"}}
                        onClick={() => setPhotoOpen(!photoOpen)}
                        sx={{color: "rgba(0,0,0,.9)"}}
                    >
                        Back up
                    </Button>
                </Paper>
            </Collapse>
            <Button 
                variant="contained" 
                className="btn btn-wide mb-5" 
                sx={{backgroundImage: "linear-gradient(135deg, #8ed9e7, #8353d7)"}}
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