import React from "react";
import Navigation from "../Navigation";

function Header(props) {
    const {
        menuEntries=[],
        setCurrentMenuEntry,
        currentMenuEntry
    } = props;

    return (
        <header>
            <h2>
                David Barron
                {currentMenuEntry}
            </h2>
            
        </header>
    );
}

export default Header;