import { FC } from "react";
import style from "./Preview.module.css";
import arrow from "../../assets/icons/icons8-arrow.svg";
import musclelab_a from "../../assets/images/details/musclelab/musclelab1.png";
import musclelab_b from "../../assets/images/details/musclelab/musclelab2.png";
import musclelab_c from "../../assets/images/details/musclelab/musclelab3.png";
import portfolio_a from "../../assets/images/details/portfolio/portfolio1.png";
import portfolio_b from "../../assets/images/details/portfolio/portfolio2.png";
import portfolio_c from "../../assets/images/details/portfolio/portfolio3.png";
import portfolio_d from "../../assets/images/details/portfolio/portfolio4.png";
import doggofinder_a from "../../assets/images/details/doggofinder/dogapi1.png";
import doggofinder_b from "../../assets/images/details/doggofinder/dogapi2.png";
import doggofinder_c from "../../assets/images/details/doggofinder/dogapi3.png";
import { useSelector } from "react-redux";
import { selectLanguageJson } from "../../features/optionsSlice";
import { useNavigate } from "react-router-dom";

interface PreviewType {
    nameParam: string;
}

const Preview: FC<PreviewType> = ({ nameParam }) => {

    const language = useSelector(selectLanguageJson);
    const navigate = useNavigate();
    const { goBack } = language.details;

    const imageSelector = (nameParam: string): any => {
        switch (nameParam) {
            case "portfolio":
                return [ portfolio_a,portfolio_b, portfolio_c, portfolio_d ];
            case "musclelab":
                return [ musclelab_a, musclelab_b, musclelab_c ];
            case "doggofinder":
                return [ doggofinder_a, doggofinder_b, doggofinder_c ];
            default:
                return [musclelab_a, musclelab_b, musclelab_c];
        }
    };

    const images = imageSelector(nameParam);

    return (
        <div className={style.Container}>

            {
                images.map((image: any)=> {
                    return (
                        <>
                            <div className={style.ToolBar}>
                            <div className={style.RedDot}></div>
                            <div className={style.YellowDot}></div>
                            <div className={style.GreenDot}></div>
                            <div className={style.SearchBar}></div>
                        </div>
                            <img src={image} alt="" />
                        </>
                    )
                })
            }

            <div className={style.Navegation} onClick={()=> navigate(-1)}>
                <img src={arrow} alt=""/>
                <p>{goBack}</p>
            </div>
        </div>
    );
};

export default Preview;
