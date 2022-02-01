import React from "react";
import coverImage from "../../assets/cover/WebGeekBear.png";

function About() {
    return (
        <section className="my-5">
            <img src={coverImage} className="my-2" style={{ width: "25%" }} alt="WebGeekBear" />
            <p>
                I am a full-stack web developer with 20 years of experience in software development, currently earning a certificate in full-stack web development from
                the UC Berkeley extension and have a BS in Computer Science from California State University in Sacramento.  I have extensive experience specifying,
                planning, writing, and deploying software and business applications. I am a proven, innovative problem solver with technical skills including JavaScript,
                Python, AJAX, Node.js, and Express.js.  I designed and implemented a REST API for a web application that provides a social media experience for
                reporting and commenting on emergencies in a recent project.  I would like to use my skills and knowledge as part of a fast-paced, quality-driven team
                responsible for enhancing the user experience on the web.
            </p>
        </section>
    );
}

export default About;