import React from "react"
import city from "../images/City.jpg"
import yourshelf from "../images/YourShelf.png"
import {
    Card
} from "reactstrap"

const MainComponent = () => {
    return (
        <div className="text-center">
            <div className="jumbotron border border-warning">
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
                                <a href="/" className="btn text-light">Resume</a>
                                <a href="/" className="btn text-light">LinkedIn</a>
                                <a href="/" className="btn text-light">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Projects</h3>
                    </div>
                </div>
                <Card>
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={yourshelf} alt="A book search application called yourshelf" height="400" />
                        </div>
                        <div className="col-sm-4 text-left">
                            <h3>YourShelf</h3>
                            <ul>
                                <li>User can search for any book by title or by subject</li>
                                <li>User can save books in their digital bookshelf</li>
                            </ul>
                            <div className="btn-group ">
                                <a className="btn text-light" href="/">demo</a>
                                <a className="btn text-light" href="/">repo</a>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            </div>
        </div>
    )
}

export default MainComponent