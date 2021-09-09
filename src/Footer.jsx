import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Footer.css';

function Footer() {
    return (
        <>
            <footer className="foot">
                <div className="foot_div">
                    <a target="_blank" href="https://www.linkedin.com/in/anant-kumawat/"><i class="fab fa-linkedin foot_icon"></i></a>
                    <a target="_blank" href="https://github.com/AnantKumawat22"><i class="fab fa-github foot_icon"></i></a>
                    <a target="_blank" href="http://mobile.twitter.com/AnantKumawat22"><i class="fab fa-twitter foot_icon"></i></a>
                </div>
                <p>&copy; 2021 Anant Kumawat.</p>
            </footer>
        </>
    );
}

export default Footer;