import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom
import './AboutUs.css';
import { BsEnvelope } from "react-icons/bs";
import profile from '../Assets/Images/profile.jpg';
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { AiOutlineProject, AiOutlineFileText } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { FaHtml5 } from "react-icons/fa";
import { SiCyberdefenders } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";

const AboutUs = () => {
    const { darkTheme } = useContext(ThemeContext);

    return (
        <div className={`about-container ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div className="profile-section">
                <div className="profile-picture-container">
                    <img src={profile} alt="Profile" className="profile-picture" />
                </div>
                <div className="profile-details">
                    <p><BsEnvelope /> Email: hudamiftahul362@gmail.com</p>
                    <p><TiSocialInstagram /> Instagram: <a href="link_to_instagram"><i className="bi bi-instagram"></i>@ M.hud_aa</a></p>
                    <p><FaLinkedin /> LinkedIn: <a href="link_to_linkedin"><i className="bi bi-linkedin"></i>Miftahul Huda</a></p>
                    <p><FaGithubAlt /> Github: <a href="https://github.com/IAMHUDA"><i className="bi bi-github"></i>IAMHUDA</a></p>
                    <div className="button-container">
                        {/* Gunakan Link untuk membuat tombol */}
                        <Link to="/project" className="button-skills">
                            <AiOutlineProject className="button-icon" />
                            Project
                        </Link>
                        <Link to="/certificates" className="button-certificate">
                            <AiOutlineFileText className="button-icon" />
                            Certificate
                        </Link>
                    </div>
                </div>
                {/* Penempatan "Lorem" berdasarkan mode tampilan */}
                <div className="lorem-section-mobile">
                    <h2>About Me</h2>
                    <p>Hello, I'm Miftahul Huda. I have a knack for understanding HTML, CSS structure, React, and JavaScript. On a regular day, you'll find me coding for a minimum of 4 hours, honing my skills and exploring new possibilities in the vast realm of programming. Currently, I'm still pursuing my studies, eager to delve deeper into the fascinating world of technology and software development..</p>
                    <h4>Skills</h4>
                    <p><FaReact /> React</p>
                    <p><FcLinux /> Terminal Linux</p>
                    <p><FaHtml5 /> HTML & CSS</p>
                    <p><SiCyberdefenders /> Cross site scripting(xss)</p>
                    <p><SiFlutter/> Flutter</p>
                    <p><IoLogoPython/> Python Flask</p>
                </div>
            </div>
            <div className="lorem-section-desktop">
                <h2>About Me</h2>
                <p>Hello, I'm Miftahul Huda. I have a knack for understanding HTML, CSS structure, React, and JavaScript. On a regular day, you'll find me coding for a minimum of 4 hours, honing my skills and exploring new possibilities in the vast realm of programming. Currently, I'm still pursuing my studies, eager to delve deeper into the fascinating world of technology and software development..</p>
                <h4>Skills</h4>
                <p><FaReact /> React</p>
                <p><FcLinux /> Terminal Linux</p>
                <p><FaHtml5 /> HTML & CSS</p>
                <p><SiCyberdefenders /> Cross site scripting(xss)</p>
                <p><SiFlutter/> Flutter</p>
                <p><IoLogoPython/> Python Flask</p>
            </div>
        </div>
    );
}

export default AboutUs;
