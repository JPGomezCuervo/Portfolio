import { FC } from "react";
import style from "./Detail.module.css";

interface DetailProps {
    name: string;
}

const Detail: FC<DetailProps> =({name}) => {
    
    return(
        <div className={style.Container}>

            <div className={style.RightContainer}>
                <h2>{}</h2>
            </div>

            <div className={style.LeftContainer}>

            </div>
        </div>
    )
}

export default Detail;