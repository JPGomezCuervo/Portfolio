import { FC } from "react";
import style from  "./Carousel.module.css";
import Experience from "../Experience/Experience";
import Tecnologies from "../Tecnologies/Tecnologies";
import WhoIAm from "../WhoIAm/WhoIAm";
import { useState } from "react";

const Carousel: FC = () => {
    
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
        <div className={style.Carousel}>
            <WhoIAm/>
            <Tecnologies/>
            <Experience/>
        </div>
        <div className={style.Background}>
            <div className={style.Rombos}></div>
            <div className={style.Rombos}></div>
            <div className={style.Rombos}></div>
        </div>
        </>
    )
}

export default Carousel;