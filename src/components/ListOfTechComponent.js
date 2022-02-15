import React from "react"

import reactlogo from "../images/reactlogo.png"
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
import firebase from "../images/firebase.png"
import sass from "../images/sass.png"

const ListOfTechComponent = () => {
    return (
        <div className="col">
            <h5 className="mb-4">I use...</h5>
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
                    <img className="text-right mx-2 mb-2" src={reactlogo} alt="react js" height="50"/>
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
                    <img className="text-right mx-2 mb-2" src={sass} alt="bootstrap" height="50"/>
                    <p className="small">SASS</p>
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
                    <img className="text-right mx-2 mb-2" src={firebase} alt="firebase" height="50"/>
                    <p className="small">Firebase</p>
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
    )
}

export default ListOfTechComponent