import React, {useState} from "react"

import ListOfTech from "./ListOfTechComponent"
import resume from "../AndrewSutton-Resume.pdf"
import honors from "../HonorsCertificate.pdf"
import frontend from "../FrontEnd.pdf"

import me from "../images/me.jpg"
import album from "../images/gallery/Album.jpg"
import marble from "../images/gallery/Marble.jpg"
import ellie from "../images/gallery/Ellie.jpg"
import cover from "../images/gallery/FrontCover.jpg"
import swings from "../images/gallery/swings.jpg"
import city from "../images/gallery/City.jpg"

import { 
    Card,
    Collapse,
    Paper,
    Button,
    Dialog,
    ImageList,
    ImageListItem,
    Slide
 } from '@mui/material'

import {
    LinkedIn,
    GitHub,
    EmojiPeople, 
    Code, 
    Edit,
    AlternateEmail,
    ArrowUpward,
    Article, School
 } from '@mui/icons-material';

import projects from "../projects"


const MainComponent = () => {
    const [aboutOpen, setAboutOpen] = useState(false)
    const [projectOpen, setProjectOpen] = useState(false)
    const [editedOpen, setEditedOpen] = useState(false)
    const [certOpen, setCertOpen] = useState(false)
    const [imageOpen, setImageOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState("")

    return (
        <div className="text-center">
            <div className="container pt-5 ">
                <div className="row">
                    <div className="img-col col-10 col-lg-3 mx-auto">
                        <Slide in={true} timeout={2000} direction="right">
                            <div id="circle-1"></div>
                        </Slide>
                        <Slide in={true} timeout={3000} direction="right">
                            <div id="circle-2"></div>
                        </Slide>
                        <Slide in={true} timeout={4000} direction="right">
                            <div id="circle-3"></div>
                        </Slide>
                        <Slide in={true} timeout={5000} direction="right">
                            <div id="circle-4"></div>
                        </Slide>
                        <Slide in={true} timeout={1000} direction="right">
                            <img src={me} 
                                alt="Me" 
                                id="img" 
                                height="275" width="275" className="rounded-circle" 
                            />
                        </Slide>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-9 w-100 mb-4 border-bottom">
                        <h1 id="name-heading">Andrew <strong>Sutton</strong></h1>
                        <h5 className="text-dark">Front End Web Developer</h5>
                        <h6>Oswego, IL</h6>
                        <div className="row mt-3">
                            <div className="col col-md-8 mx-auto">
                                {/* <a 
                                    id="resume"
                                    className="mx-1 py-2 px-3 ml-n3" 
                                    download="AndrewSutton-Resume"
                                    href={resume}
                                >
                                    Resumé <Article /> 
                                </a> */}
                                <Button 
                                    id="resume"
                                    className="mx-1 py-2 px-3 ml-n3" 
                                    download="AndrewSutton-Resume"
                                    onClick={() => window.open(resume)}
                                >
                                    Resumé <Article /> 
                                </Button>
                                <Button 
                                    variant="contained" 
                                    className="btn m-1" 
                                    sx={{borderRadius: "20px"}}
                                    onClick={() => window.open("https://www.linkedin.com/in/andrew-sutton-aa3326205/")}
                                >
                                    <LinkedIn />
                                </Button>
                                <Button 
                                    variant="contained" 
                                    className="btn m-1" 
                                    sx={{borderRadius: "20px"}}
                                    onClick={() => window.open("https://github.com/sydsutton")}
                                >
                                    <GitHub />
                                </Button>
                                <Button 
                                    variant="contained"
                                    className="btn m-1 mr-n3" 
                                    sx={{borderRadius: "20px"}}
                                    onClick={() => window.open('mailto:andrewsydsutton@gmail.com')}
                                >
                                    <AlternateEmail />
                                </Button>
                            </div>
                        </div>
                        <div className="text-dark mt-4">
                            <h5>“We have to continually be jumping off cliffs and developing our wings on the way down.”</h5><p>― Kurt Vonnegut</p>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <ListOfTech />

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
            <Collapse in={aboutOpen} timeout={{enter: 2000, exit: 1000}}>
                <Paper className="container my-3 text-dark gradient" elevation={1}>
                    <div className="row justify-content-between">
                        <Slide in={aboutOpen} timeout={{enter: 3000, exit: 8000}} direction="up">
                            <Card className="col-lg-5 m-3">
                                <h4 className="mt-3 border-bottom mb-3">About Me</h4>
                                <p className="text-left">I enjoy creating simple, functional, and effective designs.<br/><br/>An Indoor Skydiving Instructor turned Front End Developer. I wrote 
                                    my first line of code in Early 2021 and never looked back. Whether it's painting, 
                                    photography, photo editing, or music, I have always loved to create things from scratch; 
                                    naturally web development and design fits me well.<br/> Like a lot of other people in 2021, 
                                    I was looking for a change in careers. After teaching myself how to code for a couple of 
                                    months, I decided to enroll in a coding bootcamp through NuCamp.</p>
                                <h4 className="border-bottom mt-5 mb-3">Three random facts:</h4>
                                <ul className="text-left">
                                    <li>I've traveled the world as an Indoor Skydiving Trainer/ Instructor</li>
                                    <li>I play guitar in a band</li>
                                    <li>I just got a dog... that I am very allergic to...</li>
                                </ul>
                            </Card>
                        </Slide>
                        <Slide in={aboutOpen} timeout={{enter: 4000, exit: 8000}} direction="up">
                            <Card className="col-lg-5 m-3 text-left">
                                <h4 className="mt-3 border-bottom mb-3 text-center">Education</h4>
                                <div className="text-left">
                                    <h5 className="font-weight-bold">NuCamp Front End Web Development</h5>
                                    <p>Online Web Development Bootcamp<br/>
                                        August 2021- December 2021<br/>
                                    </p>
                                </div>
                                <ul className="text-left">
                                    <li>Was in the top 10% of students to graduate with honors</li>
                                    <li>Had final project showcased to all graduating students during graduation</li>
                                </ul>

                                <h5 className="font-weight-bold">Bachelor of Arts in Psychology/ Minor in Communications</h5>
                                <p>Northern Illinois University<br/>
                                    2011- 2014</p>
                                <ul>
                                    <li> Graduated cum laude</li>
                                </ul>
                                <h4 className="mt-5 border-bottom mb-3 text-center">Work History</h4>
                                <h5 className="font-weight-bold">iFLY Indoor Skydiving</h5>
                                <p>Lead Instructor/ Manager<br/>
                                2014- 2021</p>
                            </Card>
                        </Slide>
                    </div>
                    <Button 
                        endIcon={<ArrowUpward />}
                        className="my-3 btn-up text-dark" 
                        onClick={() => setAboutOpen(!aboutOpen)}
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
            <Collapse in={projectOpen} timeout={{enter: 3000, exit: 1000}}>
                    <Paper className="container my-3 gradient" elevation={1}>
                        <div className="row">
                            <div className="col">
                                {projects.map((project, index) => {
                                    return (
                                    <Slide in={projectOpen} timeout={{enter: (1000 * (index * 2)), exit: 9000}} direction="up">
                                        <Card key={index} className="mt-4 p-3">
                                            <div className="row mx-auto justify-content-center border-bottom mb-3 w-75">
                                                <h3 className="font-weight-bold">{project.title}</h3>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img
                                                        src={project.img} 
                                                        alt={project.alt} 
                                                        className="mb-4" 
                                                        id="no-cursor"
                                                        height="400" 
                                                        width="300"
                                                        style={{objectFit: "cover", imageResolution: "from-image"}}
                                                    />
                                                </div>
                                                <div className="col-md-6 text-center text-md-left">
                                                    <p>{project.description}</p>
                                                    <h4 className="border-bottom mb-3 pb-2">Technologies Used</h4>
                                                    <ul>
                                                        {project.tech.map((tech, index) => {
                                                            return (
                                                                <li key={index} className="text-left">{tech}</li>
                                                            )
                                                        })
                                                    }
                                                    </ul>
                                                    <div className="btn-group">
                                                        {project.demo ? 
                                                            <Button 
                                                                variant="contained" 
                                                                className="btn mr-2" 
                                                                onClick={() => window.open(`${project.demo}`)}
                                                            >
                                                                demo
                                                            </Button> 
                                                            : 
                                                        project.live ? 
                                                            <Button 
                                                                variant="contained" 
                                                                className="btn mr-2" 
                                                                onClick={() => window.open(`${project.live}`)}
                                                            >
                                                                live
                                                            </Button>
                                                        : 
                                                        null
                                                        }
                                                        <Button 
                                                            onClick={() => window.open(`${project.repo}`)} 
                                                            variant="contained" 
                                                            className="btn"
                                                        >
                                                            code
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </Slide>
                                    )
                                })}
                            </div>
                        </div>

                        <Button 
                            endIcon={<ArrowUpward />}
                            className="my-3 btn-up text-dark" 
                            onClick={() => setProjectOpen(!projectOpen)}
                        >
                            <p className="text-dark my-auto">Back up</p>
                        </Button>
                    </Paper>
            </Collapse>

            <Dialog open={imageOpen} fullWidth={true} maxWidth={"sm"} sx={{overFlow: "hidden" }} onClose={() => setImageOpen(!imageOpen)} >
                <img src={selectedImage} alt="" className="modal-img" />
            </Dialog>

            <Button 
                variant="contained" 
                onClick={() => setCertOpen(!certOpen)} 
                className="btn btn-wide mb-2"
                endIcon={<School />}
            >
                Certificates
            </Button>

            <Collapse in={certOpen} timeout={{enter: 3000, exit: 1000}}>
                <Paper className="container gradient p-3 my-3 mb-2" elevation={1}>
                    <div className="row">
                        <div className="col text-left">
                            <ul style={{listStyle: "none"}}>
                                <li>
                                    <Slide in={certOpen} timeout={3500} direction="up">
                                        <Button
                                            onClick={() => window.open(honors)}
                                            className="mb-2 bg-light text-dark"
                                        >
                                            Honors Certificate- NuCamp
                                        </Button>
                                    </Slide>
                                </li>
                                <li>
                                    <Slide in={certOpen} timeout={4000} direction="up">
                                        <Button
                                            onClick={() => window.open(frontend)}
                                            className="bg-light text-dark" 
                                        >
                                            Front End Web/ Mobile Development- NuCamp
                                        </Button>
                                    </Slide>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Button 
                        endIcon={<ArrowUpward />}
                        className="my-3 btn-up text-dark" 
                        onClick={() => setCertOpen(!certOpen)}
                    >
                        <p className="text-dark my-auto">Back up</p>
                    </Button>
                </Paper>
            </Collapse>

            <Button 
                variant="contained" 
                onClick={() => setEditedOpen(!editedOpen)} 
                className="btn btn-wide mb-5"
                endIcon={<Edit />}
            >
                Photo Editing
            </Button>

            <Collapse in={editedOpen} timeout={{enter: 3000, exit: 1000}} className="mt-n5">
                <Paper className="container gradient p-3 my-3 mb-5" elevation={1}>
                    <div className="row">
                        <div className="col">
                            <ImageList cols={3} style={{overflow: "hidden"}}>
                                <Slide in={editedOpen} timeout={3500} direction="up">
                                    <ImageListItem>
                                        <img
                                            src={album}
                                            alt="album cover"
                                            onClick={() => {
                                                setSelectedImage(album)
                                                setImageOpen(!imageOpen)
                                            }}
                                        />
                                    </ImageListItem>
                                </Slide>
                                <Slide in={editedOpen} timeout={4000} direction="up">
                                    <ImageListItem>
                                        <img
                                            src={marble}
                                            alt="marble in hand"
                                            onClick={() => {
                                                setSelectedImage(marble)
                                                setImageOpen(!imageOpen)
                                            }}
                                        />
                                    </ImageListItem>
                                </Slide>
                                <Slide in={editedOpen} timeout={4500} direction="up">
                                    <ImageListItem>
                                        <img
                                            src={ellie}
                                            alt="girl listening to music"
                                            onClick={() => {
                                                setSelectedImage(ellie)
                                                setImageOpen(!imageOpen)
                                            }}
                                        />
                                    </ImageListItem>
                                </Slide>
                                <Slide in={editedOpen} timeout={5000} direction="up">
                                    <ImageListItem>
                                        <img
                                            src={city}
                                            alt="man with eye sewn shut"
                                            onClick={() => {
                                                setSelectedImage(city)
                                                setImageOpen(!imageOpen)
                                            }}
                                        />
                                    </ImageListItem>
                                </Slide>
                                <Slide in={editedOpen} timeout={5500} direction="up">      
                                    <ImageListItem>
                                        <img
                                            src={swings}
                                            alt="swings tied together"
                                            onClick={() => {
                                                setSelectedImage(swings)
                                                setImageOpen(!imageOpen)
                                            }}
                                        />
                                    </ImageListItem>
                                </Slide>
                                <Slide in={editedOpen} timeout={6000} direction="up">
                                    <ImageListItem>
                                        <img
                                            src={cover}
                                            alt="album cover"
                                            onClick={() => {
                                                setSelectedImage(cover)
                                                setImageOpen(!imageOpen)
                                            }}
                                        />
                                    </ImageListItem>
                                </Slide>
                            </ImageList>
                        </div>
                    </div>
                    <Button 
                        endIcon={<ArrowUpward />}
                        className="my-3 btn-up text-dark" 
                        onClick={() => setEditedOpen(!editedOpen)}
                    >
                        <p className="text-dark my-auto">Back up</p>
                    </Button>
                </Paper>
            </Collapse>

        </div>
    )
}

export default MainComponent