import React, { Component } from 'react'
import { Link } from "react-router-dom";


export class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item bg-primary"> <Link className="nav-link active" aria-current="page" to="/">Home</Link> </li>
                                <li className="nav-item bg-success"> <Link className="nav-link active" to="/business">Business</Link></li>
                                <li className="nav-item bg-danger"> <Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item bg-warning"> <Link className="nav-link active" to="/health">Health</Link></li>
                                <li className="nav-item" style={{backgroundColor:"#DE3163"}}> <Link className="nav-link active" to="/science">Science</Link></li>
                                <li className="nav-item bg-secondary"> <Link className="nav-link active" to="/sports">Sports</Link></li>
                                <li className="nav-item" style={{backgroundColor:"#FF5733"}}> <Link className="nav-link active" to="/technology">Technology</Link></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
