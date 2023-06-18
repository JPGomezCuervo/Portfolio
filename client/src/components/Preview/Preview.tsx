import { FC } from "react";
import style from "./Preview.module.css";

interface PreviewType {
    nameParam: string;
}
const Preview:FC<PreviewType> = () => {
    
    return(
        <div className={style.Container}>
        </div>
    )
}

export default Preview;