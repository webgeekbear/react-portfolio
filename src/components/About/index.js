import React from "react";
import coverImage from "../../assets/cover/WebGeekBear.png";

function About() {
    return (
        <section className="my-5">
            <img src={coverImage} className="my-2" style={{ width: "25%" }} alt="WebGeekBear" />
            <p>
                I am a full-stack developer with 20 years of experience in 
                software development. I recently earned a certificate in 
                full-stack development from the UC Berkeley extension and have 
                a BS in Computer Science from California State University in 
                Sacramento. I have extensive experience specifying, planning, 
                writing, and deploying software and business applications. I 
                am a proven, innovative problem solver with technical skills 
                including JavaScript, Python, AJAX, Node.js, and Express.js. 
                I designed and implemented a REST API for a web application 
                that provides a social media experience for reporting and 
                commenting on emergencies in a recent project. I am excited 
                to use my skills and knowledge to enhance user experiences. 
                I am confident that my extensive experience, technical skills, 
                and leadership capabilities will allow me to make an impactful 
                contribution to any team. 
            </p>
        </section>
    );
}

export default About;