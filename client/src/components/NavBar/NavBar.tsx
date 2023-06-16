import { FC } from "react";
import { useSelector } from "react-redux";
import { selectLanguageJson } from "../../features/optionsSlice";
import style from "./NavBar.module.css";
import gmailIcon from "../../assets/icons/gmail.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import  URLJson from "../../utils/links.json";

interface NavBarPropsType {
    handleProjectClick: ()=> void;
    handleWhoIAmClick: ()=> void;
    handleContactMeClick: ()=> void;
}
interface URLType {
    github: string;
    linkedin: string;
    gmail: string;
}

const NavBar: FC<NavBarPropsType> = ({handleProjectClick, handleContactMeClick, handleWhoIAmClick}) => {

    const language = useSelector(selectLanguageJson);
    const URLs: URLType = URLJson;
    const {projects, contactMe, whoIAm} = language.navBar;

    const handleLogoClick = () => {

        window.scrollTo({
            top:0,
            left:0,
            behavior: "smooth"
        })
        setTimeout(() =>{
            window.location.reload();

        }, 200)
    }
    return (
        <header className={style.Header}>

            <div className={style.Logo} onClick={handleLogoClick}>
                <h2>https:// Juan Gómez</h2>
            </div>

            <ul>
                <li onClick={handleProjectClick}> {projects} </li>
                <li onClick={handleContactMeClick}> {contactMe} </li>
                <li onClick={handleWhoIAmClick}> {whoIAm} </li>
            </ul>

            <div className={style.LogosContainer}>
                <a href={URLs.github} target="blank">
                    <img src={githubIcon} alt=""/>
                </a>
                <a href={URLs.linkedin} target="blank">
                    <img src={linkedinIcon} alt=""/>
                </a>
                <a href={`mailto: ${URLs.gmail}`} target="blank">
                    <img src={gmailIcon} alt=""/>
                </a>
            </div>
        </header>
    )
}

export default NavBar;