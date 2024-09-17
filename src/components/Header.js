import React, { useState } from "react";

function Header({ onDarkModeClick }, isDarkMode) {
    return (
        <Header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </Header>
    )
}

export default Header