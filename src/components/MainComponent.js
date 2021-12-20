import React, {useState} from "react"

import me from "../images/me.png"
import album from "../images/gallery/Album.jpg"
import marble from "../images/gallery/Marble.jpg"
import ellie from "../images/gallery/Ellie.jpg"
import cover from "../images/gallery/FrontCover.jpg"
import swings from "../images/gallery/swings.jpg"
import city from "../images/gallery/City.jpg"

import react from "../images/react.png"
import native from "../images/native.png"
import css from "../images/css.png"
import html from "../images/html.png"
import javascript from "../images/javascript.png"
import bootstrap from "../images/bootstrap.png"
import git from "../images/git.png"
import github from "../images/github.png"
import vscode from "../images/vscode.png"
import api from "../images/api.png"
import mui from "../images/mui.png"

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
    Article
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
                    <div className="img-col col-md-3 mt-3">
                        <div id="circle-1"></div>
                        <div id="circle-2"></div>
                        <div id="circle-3"></div>
                        <div id="circle-4"></div>
                        <img src={me} alt="Me" id="img" height="300" width="300" className="rounded-circle" />
                    </div>
                    <div className="col-md-9 text-right mt-3 w-100 mb-4 border-bottom">
                        <h1 id="name-heading">Andrew <strong>Sutton</strong></h1>
                        <h5 className="text-dark">Front End Web Developer</h5>
                        <h6>Oswego, IL</h6>
                        <div className="mt-3">
                            <Button variant="contained" endIcon={<Article />} className="btn mx-2" onClick={() => window.open("https://www.linkedin.com/in/andrew-sutton-aa3326205/")}>Resumé</Button>
                            <Button variant="contained" className="btn mx-2" onClick={() => window.open("https://www.linkedin.com/in/andrew-sutton-aa3326205/")}><LinkedIn /></Button>
                            <Button variant="contained" className="btn mx-2" onClick={() => window.open("https://github.com/sydsutton")}><GitHub /></Button>
                        </div>
                        <div className="ml-auto text-dark w-50 mt-4">
                            <h5>You can’t use up creativity. The more you use, the more you have.”</h5><p> – Maya Angelou</p>
                        </div>
                    </div>
                    <div className="col">
                        <h5 className="mb-4">So far, I know...</h5>
                        <div className="row justify-content-between">
                            <div>
                                <img className="text-right mx-2 mb-2" src={html} alt="html 5" height="50"/>
                                <p className="small">HTML 5</p>
                            </div>
                            <div>
                                <img className="text-right mx-2 mb-2" src={css} alt="css 3" height="50"/>
                                <p className="small">CSS 3</p>
                            </div>
                            <div>
                                <img className="text-right mx-2 mb-2" src={javascript} alt="javascript" height="50"/>
                                <p className="small">Javascript</p>
                            </div>
                            <div>
                                <img className="text-right mx-2 mb-2" src={react} alt="react js" height="50"/>
                                <p className="small">React JS</p>
                            </div>
                            <div>
                                <img className="text-right mx-2 mb-2" src={native} alt="react native" height="50"/>
                                <p className="small">React Native</p>
                            </div>
                            <div>
                                <img className="text-right mx-2 mb-2" src={bootstrap} alt="bootstrap" height="50"/>
                                <p className="small">Bootstrap</p>
                            </div>
                            <div>
                                <img className="text-right mx-2 mb-2" src={mui} alt="material ui" height="50"/>
                                <p className="small">Material UI</p>
                            </div>
                            <div>
                                <img className="text-right mx-2 mb-2" src={git} alt="git" height="50"/>
                                <p className="small">Git</p>
                            </div>
                            <div>
                                <img className="text-right mx-2 mb-2" src={github} alt="github" height="50"/>
                                <p className="small">GitHub</p>
                            </div>
                            <div>
                                <img className="text-right mx-2 mb-2" src={vscode} alt="vscode" height="50"/>
                                <p className="small">VS Code</p>
                            </div>
                            <div>
                                <img className="text-right mx-2 mb-2" src={api} alt="api's" height="50"/>
                                <p className="small">API's</p>
                            </div>
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
                <Paper className="container my-3 text-dark gradient" elevation={1}>
                    <div className="row justify-content-between">
                        <Card className="col-md-5 m-3">
                            <h4 className="mt-3 border-bottom">About Me</h4>
                            <p className="text-left">An Indoor Skydiving Instructor turned Front End Developer. 
                                Whether it's painting, photography, photo editing, or music, I have always 
                                loved to create things from scratch; naturally coding fit me well.<br/> Like a lot 
                                of other people in 2021, I was looking for a change in careers. After teaching 
                                myself how to code for a couple of months, I decided to enroll in a coding bootcamp 
                                through NuCamp, and haven't looked back.</p>
                                <h4 className="border-bottom">Three facts about me:</h4>
                                <ul className="text-left">
                                    <li>I've traveled the world as an Indoor Skydiving trainer</li>
                                    <li>I play guitar in a band</li>
                                    <li>I just got a dog...<br/> I also just found out that I'm allergic to dogs</li>
                                </ul>
                        </Card>
                        <Card className="col-md-5 m-3">
                            <h4 className="mt-3 border-bottom">Education</h4>
                            <ul className="text-left">
                                <li><h5>NuCamp Front End Web Development</h5></li>
                                <p>Online Web Development Bootcamp<br/>
                                August 2021 - December 2021</p>

                                <li><h5>Bachelor of Arts in Psychology/ Minor in Communications</h5></li>
                                <p>Northern Illinois University 2014<br/>
                                 Graduated cum laude</p>
                            </ul>
                            <h4 className="mt-5 border-bottom">Work History</h4>
                            <ul className="text-left">
                                <li><h5>iFLY Indoor Skydiving</h5></li>
                                <p>Lead Instructor/ Shift Supervisor<br/>
                                2014-2021</p>
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
                onClick={() => setProjectOpen(!projectOpen)} 
                className="btn btn-wide mb-2"
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