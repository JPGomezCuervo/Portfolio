import style from "./Detail.module.css";
import { FC, useEffect } from "react";
import image from "../../assets/images/details/crayon-2069.png";
import arrow from "../../assets/icons/icons8-arrow.svg";
import eye from "../../assets/icons/icons8-eye-96.png";
import github from "../../assets/icons/github.svg";
import { useSelector } from "react-redux";
import { selectLanguageJson } from "../../features/optionsSlice";
import { useNavigate } from "react-router-dom";

type NameType = "musclelab" | "portfolio" | "doggofinder";

interface DetailProps {
    nameParam: NameType;
}


const Detail: FC<DetailProps> =({nameParam}) => {

    const navigate = useNavigate();
    
    const language = useSelector(selectLanguageJson);
    
    const { goBack, viewProject, viewSourceCode } = language.details;
    const { date, name, description, tecnologies } = language.details[nameParam];
    const { frontEnd, backEnd, title } = tecnologies 

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "auto"
        })
    }, [])

    
    return(
        <div className={style.Container}>
            <div className={style.LeftContainer}>
                <div className={style.Navegation} onClick={()=> navigate(-1)}>
                    <img src={arrow} alt=""/>
                    <p>{goBack}</p>
                </div>
                <h2>{name}</h2>
                <div className={style.BackgroundDate}>
                    <p>{date}</p>
                </div>
                <p className={style.Description}>{description}</p>

                <div className={style.ButtonsContainer}>
                    <div className={style.PrimaryButton}>
                        <img src={eye} alt=""/>
                        <button>{viewProject}</button>
                    </div>

                    <div className={style.SecondaryButton}>
                        <img src={github} alt=""/>
                        <button>{viewSourceCode}</button>
                    </div>
                </div>
                <div className={style.TecnologiesContainer}>
                    <h3>{title}</h3>
                    <div className={style.FrontEndTags}>
                        {
                            frontEnd.map((tag) => {
                                return (
                                    <div>
                                        <span>{tag}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={style.BackEndTags}>
                        {
                            backEnd.map((tag) => {
                                return (
                                    <div>
                                        <span>{tag}</span>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>

            <div className={style.RightContainer}>
                <img src={image} alt=""/>

            </div>
        </div>
    )
}

export default Detail;