import React from 'react';
import './CSS/Education.css';
import img4 from './Images/img4.jpg';

function Education() {
    return (
        <>
            <div className="education_div">
                <p className="educ_title">Education</p>
                <div className="education_div_1">
                    <img src={img4} alt="Education" />
                    <div className="education_desc">
                        <h1>ITM Group of Institutions Gwalior</h1>
                        <p className="state_country">Gwalior Madhya Pradesh, India.</p>
                        <p className="expected_grad">Expected Graduation : May 2023.</p>
                        <p className="course_title">Bachelor of Technology in Computer Science and Engineering, GPA : 9.08/10.0 </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;