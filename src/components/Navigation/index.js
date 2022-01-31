import React from "react";

function Navigation() {
    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        About me
                    </a>
                </li>
                <li className="mx-1">
                    <span>Portfolio</span>
                </li>
                <li className="mx-1">
                    <span>Contact</span>
                </li>
                <li className="mx-1">
                    <span>Resume</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;