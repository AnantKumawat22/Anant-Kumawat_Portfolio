import React from "react";
import Navbar from './Navbar';
import CrsAndCertCard from "./CrsAndCertCard";
import CrsAndCertArray from "./CrsAndCertArray";

function CoursesAndCertificate() {
    return (
        <>
            <Navbar />
            {CrsAndCertArray.map((val) => {
                return (
                    <CrsAndCertCard
                        key={val.id}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        sname={val.sname}
                        link={val.link}
                    />
                );
            })}
        </>
    );
}

export default CoursesAndCertificate;