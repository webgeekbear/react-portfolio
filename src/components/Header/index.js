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
            </h2>
            <Navigation
                menuEntries={menuEntries}
                setCurrentMenuEntry={setCurrentMenuEntry}
                currentMenuEntry={currentMenuEntry}
            >
            </Navigation>
        </header>
    )
}

export default Header;