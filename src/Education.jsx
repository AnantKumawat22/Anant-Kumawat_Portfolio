import React from 'react';
import './CSS/Education.css';

function Education() {
    return (
        <>
            <div className="education_div">
                <p className="educ_title">Education</p>
                <div className="education_div_1">
                    <img src="https://png.pngtree.com/png-clipart/20200501/ourmid/pngtree-hand-drawn-cartoon-education-learning-space-illustration-png-image_2197270.jpg" alt="" />
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