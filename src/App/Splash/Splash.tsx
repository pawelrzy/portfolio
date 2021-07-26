import React from 'react';
import { Link } from 'react-scroll';
import './Splash.scss';
import ResumePath from '../../assets/resume.pdf';


import withAnimation from '../../HOCs/withAnimation/withAnimation';
import { SocialIcons } from '../../components/SocialIcons';
import { ThemeButton } from '../../components/ThemeButton';
import { ThemeContext } from '../App';

interface SplashProps {
    onThemeChange: (isDarkTheme: boolean) => void;
}

const Splash = ({ onThemeChange }: SplashProps) => {
    // const hasScrolled = React.useContext(ScrolledContext);
    return <section className="container splash">
        <div className="splash-content">
            <SplashText />
            <div className="portrait" />
        </div>
        <Link
            className="arrow-down animated bounce delay-2s infinite slow"
            to="about-me"
            smooth
        >
            <i className="fas fa-chevron-down"></i>
        </Link>
        <div className="theme-button">
            <ThemeButton onChange={onThemeChange} />
        </div>
    </section>
}

const SplashText = () => {
    const isDarkTheme = React.useContext(ThemeContext);
    return <div>
        <h1 className={`is-1 title ${isDarkTheme && 'dark-title'}`}>
            Hey, I'm Michael.{' '}
            <span role="img" aria-label="wave">
                👋🏽
            </span>
        </h1>
        <h2 className={`subtitle ${isDarkTheme && 'dark-subtitle'}`}>
            I like to build beautiful and smart things for wonderful people.
            <br />
            I’m currently looking for new-grad opportunities for the Summer 2022 season.
        </h2>
        <div className="button-row">
            <a
                href={ResumePath}
                target="_blank"
                rel="noopener noreferrer"
                className={`button is-info ${isDarkTheme ? 'is-light' : ''}`}
            >
                Check out my resume here
            </a>
            <div className="vertical-line" />
            <SocialIcons />
        </div>
    </div>
};

export default withAnimation<SplashProps>(Splash);
