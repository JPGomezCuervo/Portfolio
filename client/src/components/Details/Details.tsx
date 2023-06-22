import style from "./Details.module.css";
import { useParams } from "react-router-dom";
import Detail from "../Detail/Detail";
import Preview from "../Preview/Preview";

type NameType = "musclelab" | "portfolio" | "doggofinder";

const Details = () => {

    const params = useParams<{ nameParam?: NameType }>().nameParam || "musclelab";
    
    return(
        <div className={style.Container}>
            <Detail nameParam={params}/>
            <Preview nameParam={params}/>

        </div>
    )
}

export default Details;