import { FC } from "react";
import style from "./Tecnologies.module.css";
import { useSelector } from "react-redux";
import { selectLanguageJson } from "../../features/optionsSlice";
import image from "../../assets/images/whoIAm/secondView/crayon-studying-books-and-getting-ideas.png";
import tecnologiesJson from "../../utils/tecnologies.json";
import FrontTag from "../FrontTag/FrontTag";
import BackTag from "../BackTag/BackTag";

const Tecnologies: FC = () => {

    interface TecnologiesType {
        frontEnd: string[];
        backEnd: string[];
    }
    const tecnologies: TecnologiesType = tecnologiesJson;

    const language = useSelector(selectLanguageJson);
    const {title} = language.whoIAm.secondView;
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
                
                    {tecnologies.frontEnd.map((tag, index) => {
                        return <FrontTag key={index} frontEnd={tag}/>
                    })}

                    {tecnologies.backEnd.map((tag, index) => {
                        return <BackTag key={index} backEnd={tag}/>
                    })}


                </div>

            </div>

        </section>
    )
}

export default Tecnologies