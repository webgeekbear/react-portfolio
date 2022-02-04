import React from "react";

function Resume() {
    return (
        <div>
            <div>Profiencies: JavaScript, HTML, AJAX, MySQL, MongoDB, React</div>
            <a href={require("../../assets/resume/myResume.pdf")} download="DavidBarronResume.pdf">Download my resume</a>
        </div>
    );
}

export default Resume;