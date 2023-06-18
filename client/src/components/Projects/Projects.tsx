import manIcon from "../../assets/icons/projects/man-silhouette.png";
import dumbBell from "../../assets/icons/projects/dumbbell.png";
import pawIcon from "../../assets/icons/projects/paw_logo_icon.png";
import style from "./Projects.module.css";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectLanguageJson } from "../../features/optionsSlice";
import { Link } from "react-router-dom";


const Projects: FC = () => {

    const language = useSelector(selectLanguageJson);
    const { title } = language.projects.firstView;
    return (
        <div className={style.MainContainer}>

            <h2>{title}</h2>
            <div className={style.BarsContainer}>


                <Link to={"/detail/portfolio"}>
                    <div className={style.Portfolio}>
                        <h2> https:// Juan Gómez </h2>
                    </div>
                </Link>

                <Link to={"/detail/musclelab"}>
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
                </Link>

                <Link to={"detail/doggofinder"}>
                    <div className={style.DoggoFinder}>
                        <img src= {pawIcon} alt=""/>
                        <h2>oggo</h2>

                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Projects