import React, { useContext } from 'react';
import { ThemeContext } from '../App/App';

interface ThemeButtonProps {
    onChange: (isDarkTheme: boolean) => void;
}
export const ThemeButton = ({ onChange }: ThemeButtonProps) => {
    const isDarkTheme = useContext(ThemeContext);
    const icon = isDarkTheme ? "fas fa-sun" : "fas fa-moon";

    return <button className="button is-rounded" onClick={() => onChange(!isDarkTheme)}>
        <i key={icon}>
            <span className={icon} />
        </i>
    </button>;
}