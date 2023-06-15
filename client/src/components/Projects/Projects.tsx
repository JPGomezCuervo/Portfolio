import { FC } from "react";
import style from "./Projects.module.css";
import { useSelector } from "react-redux";
import { selectLanguageJson } from "../../features/optionsSlice";
import manIcon from "../../assets/icons/projects/man-silhouette.png";
import dumbBell from "../../assets/icons/projects/dumbbell.png";
import pawIcon from "../../assets/icons/projects/paw_logo_icon.png";

const Projects: FC = () => {

    const language = useSelector(selectLanguageJson);
    const { title } = language.projects.firstView;
    return (
        <section className={style.MainContainer}>

            <h2>{title}</h2>
            <div className={style.BarsContainer}>

                <div className={style.Portfolio}>
                    <h2> https:// Juan Gómez </h2>
                </div>

                <div className={style.MuscleLab}>

                    <img
                        className={style.IconMan}
                        src={manIcon}
                        alt=""
                    />

                    <h2>Muscle Lab</h2>

                    <img
                        className={style.IconWeight}
                        src={dumbBell}
                        alt="Icono de pesa"
                    />

                </div>

                <div className={style.DoggoFinder}>
                    <img src= {pawIcon} alt=""/>
                    <h2>oggo</h2>

                </div>

            </div>
        </section>
    )
}

export default Projects