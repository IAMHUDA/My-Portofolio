import React from 'react';
import '../Components/ProjectPage.css'; // file css untuk styling
import kmti from '../Assets/Images/kmti-project.png'
import flutter from '../Assets/Images/flutter-project.png'
import Reactt from '../Assets/Images/desktop-react.png'

const Project = () => {
    return (
        <div className="container">
            <h1>Projects</h1>
            <div className="row">
                {/* Card 1 */}
                <div className="col-md-4">
                    <a href="https://kmti.tech/">
                        <div className="card mb-3">
                            <img src={kmti} className="card-img-top" alt="Project 1" />
                            <div className="card-body">
                                <h5 className="card-title">Project 1</h5>
                                <p className="card-text">membuat website untuk organisasi kmti.</p>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card mb-3">
                        <img src={flutter} className="card-img-top" alt="Project 2" />
                        <div className="card-body">
                            <h5 className="card-title">Project 2</h5>
                            <p className="card-text">meniru project flutter mytsel dari figma.</p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                    <div className="card mb-3">
                        <img src={Reactt} className="card-img-top" alt="Project 3" />
                        <div className="card-body">
                            <h5 className="card-title">Project 3</h5>
                            <p className="card-text">Portofolio dengan react.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
