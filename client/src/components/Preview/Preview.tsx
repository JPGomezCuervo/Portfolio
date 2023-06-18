import { FC } from "react";
import style from "./Preview.module.css";
import musclelab_a from "../../assets/images/details/musclelab/musclelab1.png";
import musclelab_b from "../../assets/images/details/musclelab/musclelab2.png";
import musclelab_c from "../../assets/images/details/musclelab/musclelab3.png";

interface PreviewType {
    nameParam: string;
}

const Preview: FC<PreviewType> = ({ nameParam }) => {

    const imageSelector = (nameParam: string): any => {
        switch (nameParam) {
            case "portfolio":
                return [
                    // portfolio_a,
                    // portfolio_b,
                    // portfolio_c
                ];
            case "musclelab":
                return [musclelab_a, musclelab_b, musclelab_c];
            case "doggofinder":
                return [
                    // doggofinder_a,
                    // doggofinder_b,
                    // doggofinder_c
                ];
            default:
                return [musclelab_a, musclelab_b, musclelab_c];
        }
    };

    const images = imageSelector(nameParam);

    return (
        <div className={style.Container}>
            <div className={style.ToolBar}>
                <div className={style.RedDot}></div>
                <div className={style.YellowDot}></div>
                <div className={style.GreenDot}></div>
                <div className={style.SearchBar}></div>
            </div>
                <img src={images[0]} alt="" />
        </div>
    );
};

export default Preview;
