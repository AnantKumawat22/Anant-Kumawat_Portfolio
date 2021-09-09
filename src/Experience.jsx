import React from 'react';
import './CSS/Experience.css';
import ExperienceArray from './ExperienceArray';

function Experience() {
    return (
        <>
            <div className="experience_div">
                <p className="exp_title">Experience</p>
                <div className="exp_div_1">
                    <div className="exp_desc">
                        {ExperienceArray.map((val) => {
                            return (
                                <>
                                    <div className="exp_list">
                                        <h1>{val.expField}</h1>
                                        <p className="exp_date">{val.expDate}</p>
                                        <p className="exp_company">{val.expCompany}</p>
                                        <p className="exp_work">{val.expWork}</p>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    <img src="https://www.kindpng.com/picc/m/13-135031_lead-generation-services-consulting-services-consultancy-services-png.png" alt="Experience" />
                </div>
            </div>
        </>
    );
}

export default Experience;