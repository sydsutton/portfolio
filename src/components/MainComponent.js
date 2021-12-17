import React from "react"
import city from "../images/City.jpg"
import {
} from "reactstrap"

const MainComponent = () => {
    return (
        <div className="text-center">
            <div className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div id="circle-1"></div>
                            <div id="circle-2"></div>
                            <div id="circle-3"></div>
                            <div id="circle-4"></div>
                            <img src={city} alt="Me" id="img" height="300" width="300" className="rounded-circle" />
                        </div>
                        <div className="col-md-8 text-light">
                            <h1 id="name-heading">Andrew Sutton</h1>
                            <h3>Front End Web Developer</h3>
                            <div className="button-group mt-5">
                                <a href="/" className="btn btn-info">Resume</a>
                                <a href="/" className="btn btn-info">LinkedIn</a>
                                <a href="/" className="btn btn-info">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComponent