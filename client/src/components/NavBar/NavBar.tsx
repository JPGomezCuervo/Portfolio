import style from "./NavBar.module.css";
import gmailIcon from "../../assets/icons/gmail.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import  URLJson from "../../utils/links.json";
import menuIcon from "../../assets/icons/icons8-menu.svg";
import { FC, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLanguageJson, selectLanguage } from "../../features/optionsSlice";
import { setLanguage } from "../../features/optionsSlice";

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
    const languageName = useSelector(selectLanguage);

    const inputRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();

    const handleLogoClick = () => {

        window.scrollTo({
            top:0,
            left:0,
            behavior: "smooth"
        })
        setTimeout(() =>{
            window.location.href = "/";

        }, 200)
    }

    const name = languageName === "english" ? "EN/ES" : "ES/EN";
    return (
        <header className={style.Header}>

            <div className={style.Logo} onClick={handleLogoClick}>
                <h2>https:// Juan Gómez</h2>
            </div>

            <ul className={style.NavBarOptions}>
                <li onClick={handleWhoIAmClick}> {whoIAm} </li>
                <li onClick={handleProjectClick}> {projects} </li>
                <li onClick={handleContactMeClick}> {contactMe} </li>
            </ul>
            <button onClick={() => dispatch(setLanguage())}>{name}</button>
            <div className={style.LogosContainer}>
                <a href={URLs.github} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt=""/>
                </a>
                <a href={URLs.linkedin} target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt=""/>
                </a>
                <a href={`mailto: ${URLs.gmail}`} target="_blank" rel="noreferrer">
                    <img src={gmailIcon} alt=""/>
                </a>
            </div>

            <label htmlFor="checkbox" className={style.Label}>
                <img src={menuIcon} alt="" />
            </label>

            <input ref={inputRef} type="checkbox" className={style.Checkbox} name="checkbox" id= "checkbox">
            </input>

            <div className={style.DropMenuMobile}>
                <ul>
                    <li onClick={handleWhoIAmClick}> {whoIAm} </li>
                    <li onClick={handleProjectClick}> {projects} </li>
                    <li onClick={handleContactMeClick}> {contactMe} </li>
                </ul>
            </div>
        </header>
    )
}

export default NavBar;