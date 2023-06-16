import { FC } from "react";
import { useSelector } from "react-redux";
import { selectLanguageJson } from "../../features/optionsSlice";
import style from "./NavBar.module.css";
import gmailIcon from "../../assets/icons/gmail.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";

interface NavBarPropsType {
    handleProjectClick: ()=> void;
    handleWhoIAmClick: ()=> void;
    handleContactMeClick: ()=> void;
}

const NavBar: FC<NavBarPropsType> = ({handleProjectClick, handleContactMeClick, handleWhoIAmClick}) => {

    const language = useSelector(selectLanguageJson);
    const {projects, contactMe, whoIAm} = language.navBar;
    return (
        <header className={style.Header}>

            <div className={style.Logo}>
                <h2>https:// Juan Gómez</h2>
            </div>

            <ul>
                <li onClick={handleProjectClick}> {projects} </li>
                <li onClick={handleContactMeClick}> {contactMe} </li>
                <li onClick={handleWhoIAmClick}> {whoIAm} </li>
            </ul>

            <div className={style.LogosContainer}>
                <img src={githubIcon} alt=""/>
                <img src={linkedinIcon} alt=""/>
                <img src={gmailIcon} alt=""/>
            </div>
        </header>
    )
}

export default NavBar;