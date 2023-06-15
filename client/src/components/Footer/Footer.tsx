import { FC } from "react";
import style from "./Footer.module.css";
import gmailIcon from "../../assets/icons/gmail.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import { useSelector } from "react-redux";
import { selectLanguageJson } from "../../features/optionsSlice";

const Footer: FC = () => {

    const language = useSelector(selectLanguageJson);
    const { navigation, projects, contactMe, whoIAm, socialMedia} = language.footer;
    return (
        <footer className={style.Footer}>
            <div className={style.LogosContainer}>

                <img src={githubIcon} alt=""/>
                <img src={linkedinIcon} alt=""/>
                <img src={gmailIcon} alt=""/>

            </div>

            <div className={style.Container}>

                <div className={style.Navigation}>
                    <h3>{navigation}</h3>
                    <ul>
                        <li>{projects}</li>
                        <li>{contactMe}</li>
                        <li>{whoIAm}</li>
                    </ul>
                </div>

                <div className={style.SocialMedia}>
                    <h3>{socialMedia}</h3>
                    <ul>
                        <li>GitHub</li>
                        <li>Linkedin</li>
                        <li>Gmail</li>
                    </ul>

                </div>
                
            </div>
                <h2>Open to work</h2>
                <h2>2023</h2>
        </footer>
    )
}

export default Footer;