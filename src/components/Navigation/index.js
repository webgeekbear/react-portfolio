import React, { useEffect } from "react";

function Navigation(props) {
    const {
        menuEntries=[],
        setCurrentMenuEntry,
        currentMenuEntry
    } = props;

    useEffect(() => {
        document.title = currentMenuEntry;
    }, [currentMenuEntry]);

    return (
        <nav>
            <ul className="flex-row">
                {menuEntries.map((menuEntry) =>
                    <li
                        className={`mx-1 ${
                            currentMenuEntry === menuEntry && 'navActive'
                        }`}
                        key={menuEntry}
                    >
                        <span 
                            onClick={() => {
                                setCurrentMenuEntry(menuEntry)
                            }}
                        >
                            {menuEntry}
                        </span>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navigation;