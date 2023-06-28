import { FC } from "react";
import style from "./Footer.module.css";
import gmailIcon from "../../assets/icons/gmail.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import { useSelector } from "react-redux";
import { selectLanguageJson } from "../../features/optionsSlice";
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

const Footer: FC<NavBarPropsType> = ({handleProjectClick, handleContactMeClick, handleWhoIAmClick}) => {

    const language = useSelector(selectLanguageJson);
    const URLs: URLType = URLJson;
    const { navigation, projects, contactMe, whoIAm, socialMedia} = language.footer;

    return (
        <footer className={style.Footer}>
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

            <div className={style.Container}>

                <div className={style.Navigation}>
                    <h3>{navigation}</h3>
                    <ul>
                        <li onClick={handleWhoIAmClick}>{whoIAm}</li>
                        <li onClick={handleProjectClick}>{projects}</li>
                        <li onClick={handleContactMeClick}>{contactMe}</li>
                    </ul>
                </div>

                <div className={style.SocialMedia}>
                    <h3>{socialMedia}</h3>
                    <ul>
                        <a href={URLs.github} target="_blank" rel="noreferrer">
                            <li>GitHub</li>
                        </a>

                        <a href={URLs.linkedin} target="_blank" rel="noreferrer">
                            <li>Linkedin</li>
                        </a>

                        <a href={`mailto: ${URLs.gmail}`} target="_blank" rel="noreferrer">
                            <li>Gmail</li>
                        </a>
                    </ul>

                </div>
                
                <div className={style.OpenToWork}>
                    <h2>Open to work</h2>
                    <h2>2023</h2>
                </div>
            </div>
                <h2>Open to work</h2>
                <h2>2023</h2>
        </footer>
    )
}

export default Footer;