import React, { useContext } from 'react';
import "./themeManager.css";
import { ThemeWrapper } from "./ThemeManager"
function Article() {
    const { CurrTheme } = useContext(ThemeWrapper);
    return (
        <div style={{ border: "1px solid", padding: "1rem", margin: "1rem" }}>
            const { CurrTheme } = useContext(ThemeWrapper);
            <div>Article</div>
            <div>⬇</div>
            <p className={CurrTheme}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, id.</p>
        </div>
    )
}

export default Article