import { FC } from "react";
import style from "./WhoIAm.module.css";
import { useSelector } from "react-redux";
import { selectLanguageJson } from "../../features/optionsSlice";
import image from "../../assets/images/whoIAm/firstView/crayon-online-conversation.png"

const WhoIAm: FC = () => {

    const language = useSelector(selectLanguageJson);
    const { title, description } = language.whoIAm.firstView;
    return (
        <section className={style.MetaContainer}>
            <div className={style.MainContainer}>

                <div className={style.LeftContainer}>
                    <h2>{title}</h2>
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

export default WhoIAm;
