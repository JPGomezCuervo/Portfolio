import { FC } from "react";
import style from "./Summary.module.css";
import { selectLanguageJson } from "../../features/optionsSlice";
import { useSelector } from "react-redux";
import photograph from "../../assets/images/summary/photograph.jpg";

const Summary: FC = () => {

    const language = useSelector(selectLanguageJson);
    const { title, description} = language.summary;


    return (
        <div className={style.MainContainer}>
            <div className={style.LeftContainer}>
                <h1>
                    {title}
                </h1>
                <h3>
                    {description}
                </h3>
            </div>
            <div className={style.RightContainer}>
                <img src={photograph} alt=""/>
            </div>
        </div>
    )
}

export default Summary;