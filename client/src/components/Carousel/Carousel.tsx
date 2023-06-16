    import { FC } from "react";
    import style from  "./Carousel.module.css";
    import Experience from "../Experience/Experience";
    import Tecnologies from "../Tecnologies/Tecnologies";
    import WhoIAm from "../WhoIAm/WhoIAm";
    import { useState } from "react";

    const Carousel: FC = () => {
        
        const [activeIndex, setActiveIndex] = useState(0);

        const items = [
            <WhoIAm/>,
            <Tecnologies/>,
            <Experience/>
        ];

        const updateIndex = (newIndex: number) => {
            if (newIndex < 0) {
                newIndex = 0
            } else if (newIndex >= items.length) {
                newIndex = 0;
            }
            setActiveIndex(newIndex);
        }



        return (
            <>
            <div className={style.Carousel}
                style={{transform: `translateX(-${activeIndex * 33.2}%)`}}>

                {items.map((element) => {
                    return element;
                })}

            </div>
            <div className={style.Background}>
                <div className={`${style.Rombos} ${activeIndex === 0 ? style.ActiveIndex : ""}`} onClick={()=> {
                    updateIndex(0);
                }}></div>
                <div className={`${style.Rombos} ${activeIndex === 1 ? style.ActiveIndex : ""}`} onClick={() => {
                    updateIndex(1);
                }}></div>
                <div className={`${style.Rombos} ${activeIndex === 2 ? style.ActiveIndex : ""}`} onClick={()=> {
                    updateIndex(2);
                }}></div>
            </div>
            </>
        )
    }

    export default Carousel;