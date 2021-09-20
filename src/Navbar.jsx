import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css';
import resume from './Images/Anant-Kumawat_Resume.pdf';

function Navbar() {
    return (
        <>
            <nav className="navbar">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i class="fas fa-bars menu_icon"></i>
            </label>
                <Link className="head_name" to="/">PortFolio</Link>
                <ul>
                    <li><Link to="/"><i class="fas fa-home"></i> <span> Home</span></Link></li>
                    <li><Link to="/projects"><i class="fas fa-lightbulb"></i> <span> Projects</span></Link></li>
                    <li><a href={resume}><i class="fas fa-file"></i> <span> Resume</span></a></li>
                    <li><Link to="/contactus"><i class="fas fa-envelope"></i> <span>Contact Me</span></Link></li>
                </ul>
                
            </nav>
        </>
    );
}

export default Navbar;