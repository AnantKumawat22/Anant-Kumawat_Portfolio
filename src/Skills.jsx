import React from 'react';
import './CSS/Skills.css';
import img2 from './Images/img2.jpg';

function Skills() {
    return (
        <>
           <div className="skills_div">
          <p className="skills_title">Skills</p>
          <img src={img2} alt="Skills" />
          <div className="skillsset_div">
            <div className="skillsset_div_1">
              <label>Languages : </label>
              <p className="skillsset">
                <span>Java</span>
                <span>C</span>
                <span>C++</span>
                <span>Python</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>C#</span>
              </p>
            </div>
            <div className="skillsset_div_1">
              <label>Tools, Library and Frameworks : </label>
              <p className="skillsset">
                <span>ReactJS</span>
                <span>NodeJS</span>
                <span>Git</span>
                <span>GitHub</span>
              </p>
            </div>
            <div className="skillsset_div_1">
              <label>DataBases : </label>
              <p className="skillsset">
                <span>SQL</span>
                <span>MongoDB</span>
              </p>
            </div>
            <div className="skillsset_div_1">
              <label>Software Development Kit : </label>
              <p className="skillsset">
                <span>Flutter</span>
              </p>
            </div>

          </div>
        </div> 
        </>
    );
}

export default Skills;