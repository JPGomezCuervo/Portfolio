import { FC } from "react";
import style from "./FrontTag.module.css"

interface FrontTagProps {
    frontEnd: string;
    key: number;
}

const FrontTag: FC <FrontTagProps> = ({frontEnd}) => {

    return (
        <div className={style.Background}>
            <p>{frontEnd}</p>

        </div>
    )
}

export default FrontTag;