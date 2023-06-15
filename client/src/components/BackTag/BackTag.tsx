import { FC } from "react";
import style from "./BackTag.module.css"
interface BackTagProps {
    backEnd: string;
    key: number;
}

const BackTag: FC <BackTagProps> = ({backEnd}) => {


    return (
        <div className={style.Background}>
            <p>{backEnd}</p>

        </div>
    )
}

export default BackTag;