import { FC } from "react";
import style from "./Experience.module.css";
import image from "../../assets/images/whoIAm/thirdView/crayon-page-under-construction-1.png";
import { useSelector } from "react-redux";
import { selectLanguageJson } from "../../features/optionsSlice";

const Experience: FC = () => {

    const language = useSelector(selectLanguageJson);
    const { title, description } = language.whoIAm.thirdView;
    return (
        <section className={style.MetaContainer}>
            <div className={style.MainContainer}>

                <div className={style.LeftContainer}>
                    <h2>
                        {title}
                    </h2>
                    <img src={image} alt=""/>
                </div>

                <div className={style.RightContainer}>
                    <h3>
                        {description}
                    </h3>

                </div>

            </div>

        </section>
    )
}

export default Experience;