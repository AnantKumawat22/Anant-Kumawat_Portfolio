import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Home.css';
import Navbar from './Navbar';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';
import img1 from './Images/img1.jpg';
import Skills from './Skills';
import img3 from './Images/img3.png';

function Home() {
  return (
    <>
      <div className="container">
        <Navbar />

        <div className="aboutme_div">
          <div className="aboutme_desc">
            <h1><span className="greet_span">Hi, I'm</span> <span className="name_span">Anant Kumawat</span></h1>
            <span>3rd year B.Tech, ITM Group of Institutions Gwalior, India.</span>
            <p>I am a 3rd year student and pursuing B.Tech in Computer Science and Engineering. I am highly passionate to work as a <u>Frontend Developer</u>. I like to do <u>problem solving</u> questions and learning new Technologies.</p>
          </div>
          <img src={img3} alt="About me" className="aboutme_img" />
        </div>

        <Education />

        <Experience />

        <Skills/>

        <div className="Courses_certificates_div">
          <p className="Crs_Cert_title">Courses and Certificates</p>
          <div className="Crs_Cert_div_1">
            <img src={img1} alt="Courses and Certificates" />
            <div className="Crs_Cert_div_2">
              <p className="crs_cert_desc">Here are some of my attended courses and their certificates.</p>
              <Link to="/coursesandcertificate">See More</Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;