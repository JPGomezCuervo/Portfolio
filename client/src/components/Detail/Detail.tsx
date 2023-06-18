import style from "./Detail.module.css";
import { FC } from "react";
import { useSelector } from "react-redux";
import { selectLanguageJson } from "../../features/optionsSlice";
import image from "../../assets/images/details/crayon-2069.png";
import arrow from "../../assets/icons/icons8-arrow.svg";
import eye from "../../assets/icons/icons8-eye-96.png";

type NameType = "musclelab" | "portfolio" | "doggofinder";

interface DetailProps {
    nameParam: NameType;
}


const Detail: FC<DetailProps> =({nameParam}) => {
    
    const language = useSelector(selectLanguageJson);

    const goBack = language.details.goBack;
    const { date, name, description, tecnologies } = language.details[nameParam];
    
    return(
        <div className={style.Container}>
            <div className={style.Navegation}>
                <img src={arrow} alt=""/>
                <p>{goBack}</p>
            </div>
            <div className={style.LeftContainer}>
                <div className={style.BackgroundDate}>
                    <p>{date}</p>
                </div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>

            <div className={style.RightContainer}>
                <img src={image} alt=""/>

            </div>
        </div>
    )
}

export default Detail;