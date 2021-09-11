import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i class="fas fa-bars menu_icon"></i>
            </label>
                <Link className="head_name" to="/">Anant Kumawat</Link>
                <ul>
                    <li><Link to="/"><i class="fas fa-home"></i> <span> Home</span></Link></li>
                    <li><Link to="/projects"><i class="fas fa-lightbulb"></i> <span> Projects</span></Link></li>
                    <li><Link to="#"><i class="fas fa-file"></i> <span> Resume</span></Link></li>
                    <li><Link to="#"><i class="fas fa-envelope"></i> <span>Contact Me</span></Link></li>
                </ul>
                
            </nav>
        </>
    );
}

export default Navbar;