import React, {useState} from "react"

import ListOfTech from "./ListOfTechComponent"

import fishbowl from "../songs/Fishbowl.mp3"
import western from "../songs/Western.mp3"
import heroes from "../songs/Heroes.mp3"
import trippy from "../songs/Trippy.mp3"

import resume from "../AndrewSutton-Resume.pdf"

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
    Article
 } from '@mui/icons-material';

import projects from "../projects"


const MainComponent = () => {
    const [aboutOpen, setAboutOpen] = useState(false)
    const [projectOpen, setProjectOpen] = useState(false)
    const [editedOpen, setEditedOpen] = useState(false)
    const [imageOpen, setImageOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState("")
    // const [musicOpen, setMusicOpen] = useState(false)

    return (
        <div className="text-center">
            <div className="container pt-5 ">
                <div className="row">
                    <div className="img-col col-10 col-lg-3 mx-auto">
                        <div id="circle-1"></div>
                        <div id="circle-2"></div>
                        <div id="circle-3"></div>
                        <div id="circle-4"></div>
                        <img src={me} 
                            alt="Me" 
                            id="img" 
                            height="275" width="275" className="rounded-circle" 
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-9 w-100 mb-4 border-bottom">
                        <h1 id="name-heading">Andrew <strong>Sutton</strong></h1>
                        <h5 className="text-dark">Front End Web Developer</h5>
                        <h6>Oswego, IL</h6>
                        <div className="row mt-3">
                            <div className="col col-md-8 mx-auto">
                                <a 
                                    id="resume"
                                    className="mx-1 py-2 px-3 ml-n3" 
                                    download 
                                    href={resume}
                                >
                                    Resumé <Article /> 
                                </a>
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
            <Collapse in={aboutOpen} timeout={1000}>
                <Paper className="container my-3 text-dark gradient" elevation={1}>
                    <div className="row justify-content-between">
                        <Slide in={aboutOpen} timeout={1000} direction="up">
                            <Card className="col-lg-5 m-3">
                                <h4 className="mt-3 border-bottom mb-3">About Me</h4>
                                <p className="text-left">An Indoor Skydiving Instructor turned Front End Developer. I wrote 
                                    my first line of code in Early 2021 and never looked back.
                                    Whether it's painting, photography, photo editing, or music, I have always 
                                    loved to create things from scratch; naturally web development and design fits me well.<br/> Like a lot 
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
                        </Slide>
                        <Slide in={aboutOpen} timeout={3000} direction="up">
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
                                    <Slide in={projectOpen} timeout={(1000 * (index * 2))} direction="up">
                                        <Card key={index} className="mt-4 p-3">
                                            <div className="row mx-auto justify-content-center border-bottom mb-3 w-75">
                                                <h3 className="font-weight-bold">{project.title}</h3>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img onClick={() => {
                                                        setSelectedImage(`${project.img}`)
                                                        setImageOpen(!imageOpen)
                                                        }} 
                                                        src={project.img} 
                                                        alt={project.alt} 
                                                        className="mb-4" 
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
                                                            repo
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
                            sx={{color: "rgba(0,0,0,.9)"}}
                        >
                            <p className="text-dark my-auto">Back up</p>
                        </Button>
                    </Paper>
            </Collapse>

            <Dialog open={imageOpen} fullWidth={true} maxWidth={"md"} sx={{overFlow: "hidden" }} onClose={() => setImageOpen(!imageOpen)} >
                <img src={selectedImage} alt="" className="modal-img" />
            </Dialog>

            <Button 
                variant="contained" 
                onClick={() => setEditedOpen(!editedOpen)} 
                className="btn btn-wide mb-5"
                endIcon={<Edit />}
            >
                Photo Editing
            </Button>

            <Collapse in={editedOpen} timeout={3000} className="mt-n5">
                <Paper className="container gradient p-3 my-3 mb-5" elevation={1}>
                    <div className="row">
                        <div className="col">
                            <ImageList cols={3} style={{overflow: "hidden"}}>
                                <Slide in={editedOpen} timeout={3500} direction="up">
                                    <ImageListItem>
                                        <img
                                            src={album}
                                            className="img-res"
                                            alt="album cover"
                                            loading="lazy"
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
                                            className="img-res"
                                            alt="marble in hand"
                                            loading="lazy"
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
                                            className="img-res"
                                            alt="girl listening to music"
                                            loading="lazy"
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
                                            className="img-res"
                                            alt="man with eye sewn shut"
                                            loading="lazy"
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
                                            className="img-res"
                                            alt="swings tied together"
                                            loading="lazy"
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
                                            className="img-res"
                                            alt="album cover"
                                            loading="lazy"
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
                        sx={{color: "rgba(0,0,0,.9)"}}
                    >
                        <p className="text-dark my-auto">Back up</p>
                    </Button>
                </Paper>
            </Collapse>

            {/* <Button 
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
            </Collapse>                            */}
        </div>
    )
}

export default MainComponent