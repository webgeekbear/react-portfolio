import React from "react";
import coverImage from "../../assets/cover/WebGeekBear.png";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{width: "25%"}} alt="WebGeekBear" />
        </section>
    );
}

export default About;