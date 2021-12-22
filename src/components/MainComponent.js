import React, {useState} from "react"

import fishbowl from "../songs/Fishbowl.mp3"
import western from "../songs/Western.mp3"
import heroes from "../songs/Heroes.mp3"
import trippy from "../songs/Trippy.mp3"

import resume from "../AndrewSutton-Resume.pdf"

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
import photoshop from "../images/photoshop.png"
import redux from "../images/redux.png"

import { 
    Card,
    Collapse,
    Paper,
    Button,
    Dialog,
    ImageList,
    ImageListItem,
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
    PlayCircleFilled
 } from '@mui/icons-material';
import projects from "../projects"

const MainComponent = () => {
    const [aboutOpen, setAboutOpen] = useState(false)
    const [projectOpen, setProjectOpen] = useState(false)
    const [photoOpen, setPhotoOpen] = useState(false)
    const [imageOpen, setImageOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState("")
    const [musicOpen, setMusicOpen] = useState(false)

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
                        <div className="row">
                            <div className="col-sm-12 col-md-6 justify-content-right text-right ml-auto mt-3">
                                <a 
                                    id="resume"
                                    className="mx-2 py-2 px-3" 
                                    download 
                                    href={resume}
                                >
                                    Resumé <Article /> 
                                </a>
                                <Button 
                                    variant="contained" 
                                    className="btn m-2" 
                                    onClick={() => window.open("https://www.linkedin.com/in/andrew-sutton-aa3326205/")}
                                >
                                    <LinkedIn/>
                                </Button>
                                <Button 
                                    variant="contained" 
                                    className="btn m-2" 
                                    onClick={() => window.open("https://github.com/sydsutton")}
                                >
                                    <GitHub />
                                </Button>
                                <Button 
                                    variant="contained"
                                    className="btn m-2" 
                                    onClick={() => window.open('mailto:andrewsydsutton@gmail.com')}
                                >
                                    <AlternateEmail />
                                </Button>
                            </div>
                        </div>
                        <div className="ml-auto text-dark w-50 mt-4">
                            <h5>“We have to continually be jumping off cliffs and developing our wings on the way down.”</h5><p>― Kurt Vonnegut</p>
                        </div>
                    </div>
                    <div className="col">
                        <h5 className="mb-4">So far, I know...</h5>
                        <div className="row justify-content-between mx-auto">
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
                                <img className="text-right mx-2 mb-2" src={redux} alt="react redux" height="50"/>
                                <p className="small">React Redux</p>
                            </div>
                            <div>
                                <img className="text-right mx-2 mb-2" src={bootstrap} alt="bootstrap" height="50"/>
                                <p className="small">Bootstrap</p>
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
                            <div>
                                <img className="text-right mx-2 mb-2" src={photoshop} alt="photoshop" height="50"/>
                                <p className="small">Photoshop</p>
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
                        <Card className="col-lg-5 m-3">
                            <h4 className="mt-3 border-bottom mb-3">About Me</h4>
                            <p className="text-left">An Indoor Skydiving Instructor turned Front End Developer. I wrote 
                                my first line of code in Early 2021 and never looked back.
                                Whether it's painting, photography, photo editing, or music, I have always 
                                loved to create things from scratch; naturally web development/ design fits me well.<br/> Like a lot 
                                of other people in 2021, I was looking for a change in careers. After teaching 
                                myself how to code for a couple of months, I decided to enroll in a coding bootcamp 
                                through NuCamp.</p>
                            <h4 className="border-bottom mt-5 mb-3">Three random facts:</h4>
                            <ul className="text-left">
                                <li>I've traveled the world as an Indoor Skydiving Trainer/ Instructor</li>
                                <li>I play guitar in a band</li>
                                <li>I just got a dog... that I am very allergic to...</li>
                            </ul>
                        </Card>
                        <Card className="col-lg-5 m-3">
                            <h4 className="mt-3 border-bottom mb-3">Education</h4>
                            <ul className="text-left">
                                <li><h5>NuCamp Front End Web Development</h5></li>
                                <p>Online Web Development Bootcamp<br/>
                                August 2021- December 2021<br/>
                                <ul>
                                    <li>Was in the top 10% of students to graduate with honors</li>
                                    <li>Had final project showcased to all graduating students during graduation</li>
                                </ul>
                                </p>

                                <li><h5>Bachelor of Arts in Psychology/ Minor in Communications</h5></li>
                                <p>Northern Illinois University 2014<br/>
                                    <ul>
                                        <li> Graduated cum laude</li>
                                    </ul>
                                </p>
                            </ul>
                            <h4 className="mt-5 border-bottom mb-3">Work History</h4>
                            <ul className="text-left">
                                <li><h5>iFLY Indoor Skydiving</h5></li>
                                <p>Lead Instructor/ Manager<br/>
                                2014- 2021</p>
                            </ul>
                        </Card>
                    </div>
                    <Button 
                        endIcon={<ArrowUpward />}
                        className="my-3 btn-up text-dark" 
                        onClick={() => setAboutOpen(!aboutOpen)}
                        sx={{color: "rgba(0,0,0,.9)"}}
                    >
                        <p className="text-dark my-auto">Back up</p>
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
                        <div className="col">
                            {projects.map((project, index) => {
                                return (
                                <div>
                                    <Card key={index} className="mt-4 p-3">
                                        <div className="row mx-auto justify-content-center border-bottom mb-3 w-50">
                                            <h4 className="font-weight-bold">{project.title}</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img onClick={() => {
                                                    setSelectedImage(`${project.img}`)
                                                    setImageOpen(!imageOpen)
                                                }} src={project.img} alt={project.alt} className="mb-4" height="400" width="300"style={{objectFit: "cover"}}/>
                                            </div>
                                            <div className="col-md-6 text-left">
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
                                                    {project.demo ? 
                                                        <Button className="btn text-light mr-2" onClick={() => window.open(`${project.demo}`)}>demo</Button> 
                                                        : 
                                                    project.live ? 
                                                        <Button className="btn text-light mr-2" onClick={() => window.open(`${project.live}`)}>live</Button>
                                                    : 
                                                    null
                                                    }
                                                    <Button onClick={() => window.open(`${project.repo}`)} className="btn text-light">repo</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                                )
                            })}
                        </div>
                    </div>

                    <Button 
                        endIcon={<ArrowUpward />}
                        className="my-3 btn-up text-dark" 
                        onClick={() => setProjectOpen(!projectOpen)}
                        sx={{color: "rgba(0,0,0,.9)"}}
                    >
                        <p className="text-dark my-auto">Back up</p>
                    </Button>
                </Paper>
            </Collapse>

            <Dialog open={imageOpen} onClose={() => setImageOpen(!imageOpen)} >
                <img src={selectedImage} alt="" style={{overflow: "hidden"}} />
            </Dialog>

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
                            <ImageList cols={3}>
                                <ImageListItem>
                                    <img
                                        src={album}
                                        alt="album cover"
                                        loading="lazy"
                                        onClick={() => {
                                            setSelectedImage(album)
                                            setImageOpen(!imageOpen)
                                        }}
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={marble}
                                        alt="marble in hand"
                                        loading="lazy"
                                        onClick={() => {
                                            setSelectedImage(marble)
                                            setImageOpen(!imageOpen)
                                        }}
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={ellie}
                                        alt="girl listening to music"
                                        loading="lazy"
                                        onClick={() => {
                                            setSelectedImage(ellie)
                                            setImageOpen(!imageOpen)
                                        }}
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={city}
                                        alt="man with eye sewn shut"
                                        loading="lazy"
                                        onClick={() => {
                                            setSelectedImage(city)
                                            setImageOpen(!imageOpen)
                                        }}
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={swings}
                                        alt="swings tied together"
                                        loading="lazy"
                                        onClick={() => {
                                            setSelectedImage(swings)
                                            setImageOpen(!imageOpen)
                                        }}
                                    />
                                </ImageListItem>
                                <ImageListItem>
                                    <img
                                        src={cover}
                                        alt="album cover"
                                        loading="lazy"
                                        onClick={() => {
                                            setSelectedImage(cover)
                                            setImageOpen(!imageOpen)
                                        }}
                                    />
                                </ImageListItem>
                            </ImageList>
                        </div>
                    </div>
                    <Button 
                        endIcon={<ArrowUpward />}
                        className="my-3 btn-up text-dark" 
                        onClick={() => setPhotoOpen(!photoOpen)}
                        sx={{color: "rgba(0,0,0,.9)"}}
                    >
                        <p className="text-dark my-auto">Back up</p>
                    </Button>
                </Paper>
            </Collapse>

            <Button 
                variant="contained"
                className="btn btn-wide mb-5" 
                onClick={() => setMusicOpen(!musicOpen)}
                endIcon={<PlayCircleFilled />}
            >
                Music
            </Button>

            <Collapse in={musicOpen} timeout={1000} className="mt-n5">
                <Paper className="container gradient p-3 my-3 mb-5" elevation={1}>
                    <h4 className="border-bottom w-50 mx-auto">Soul You Know</h4>
                    <div className="row">
                        <div className="col d-flex flex-column align-items-center">
                            <Button 
                                className="text-dark" 
                                onClick={() => window.open("https://open.spotify.com/artist/2hxK5s6Gvisb2GOx6Pl1cx")}
                            >
                                Fishbowl
                            </Button>
                            <audio 
                                className="mb-3" 
                                src={fishbowl} 
                                controls
                            />
                            <Button 
                                className="text-dark" 
                                onClick={() => window.open("https://open.spotify.com/artist/2hxK5s6Gvisb2GOx6Pl1cx")}
                            >
                                Western
                            </Button>
                            <audio 
                                className="mb-3" 
                                src={western} 
                                controls
                            />
                        </div>
                        <div className="col d-flex flex-column align-items-center">
                            <Button 
                                className="text-dark" 
                                onClick={() => window.open("https://open.spotify.com/artist/2hxK5s6Gvisb2GOx6Pl1cx")}
                            >
                                Heroes
                            </Button>
                            <audio 
                                className="mb-3" 
                                src={heroes} 
                                controls
                            />
                            <Button 
                                className="text-dark" 
                                onClick={() => window.open("https://open.spotify.com/artist/2hxK5s6Gvisb2GOx6Pl1cx")}
                            >
                                Watch Your Back
                            </Button>
                            <audio 
                                className="mb-3" 
                                src={trippy} 
                                controls
                            />
                        </div>
                    </div>
                    <Button 
                        endIcon={<ArrowUpward />}
                        className="my-3 btn-up text-dark" 
                        onClick={() => setMusicOpen(!musicOpen)}
                        sx={{color: "rgba(0,0,0,.9)"}}
                    >
                        <p className="text-dark my-auto">Back up</p>
                    </Button>
                </Paper>
            </Collapse>                           
        </div>
    )
}

export default MainComponent