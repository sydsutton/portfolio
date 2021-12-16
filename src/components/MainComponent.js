import React from "react"
import {
    Card
} from "reactstrap"

const MainComponent = () => {
    return (
        <div className="main-container container text-center">
            <div className="row border border-warning">
                <div id="top-card" className="col">
                    <div className="media border border-success text-light">
                        <img alt="Myself" src="https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture-1200x1200.jpg" height="100" width="100" className="rounded-circle thumbnail"/>
                        <div className="media-body border border-primary">
                            <p>hello I'm</p>
                            <h3>Andrew Sutton</h3>
                            <a href="linkedin.com">LinkedIn</a>
                            <a href="GitHub.com">GitHub</a>
                            <a href="gmail.com">Gmail</a>
                            <a href="" className="btn btn-danger">Resume</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row border border-danger text-center">
                <div className="col border border-warning">
                    <h3>Projects</h3>
                    <Card>
                        <h2>Here's one project</h2>
                    </Card>
                    <Card>
                        <h2>Here's a second project</h2>
                    </Card>
                    <Card>
                        <h2>Here's a third project</h2>
                    </Card>
                </div>
            </div>
            <div className="row border border-danger text-center">
                <div className="col border border-warning">
                    <h3>Photo Editing/ Photography</h3>
                    <Card>
                        <h2>Here's a gallery</h2>
                    </Card>
                </div>
            </div>
            <div className="row border border-danger text-center">
                <div className="col border border-warning">
                    <h3>Music</h3>
                    <Card>
                        <h2>Here's some songs</h2>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default MainComponent