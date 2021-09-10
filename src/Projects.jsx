import React from "react";
import Navbar from "./Navbar";
import './CSS/Projects.css';
import ProjectsCard from "./ProjectsCard";
import ProjectsArrays from "./ProjectsArrays";

function Projects() {
    return (
        <>
            <Navbar />
            <div className="div_1">
                {ProjectsArrays.map((val) => {
                    return (
                        <ProjectsCard
                            key={val.id}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            sname={val.sname}
                            link={val.link}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Projects;