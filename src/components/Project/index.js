import React from "react";

function Project(props) {
    const {
        image,
        title,
        appLink,
        repoLink
    } = props;

    return (
        <div>
            <img
                src={image}
                alt={title}
                className="img-thumbnail mx-1"
                width="100%"
            />
            <div>Project Name: {title} </div>
            <div><a href={appLink}>Deployment URL</a></div>
            <div><a href={repoLink}>GitHub Repository</a></div>
        </div>
    )
}

export default Project;