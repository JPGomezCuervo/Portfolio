import React, { FC, useEffect, useState, useRef } from "react";
import style from  "./Carousel.module.css";
import Experience from "../Experience/Experience";
import Tecnologies from "../Tecnologies/Tecnologies";
import WhoIAm from "../WhoIAm/WhoIAm";
import arrow from "../../assets/icons/icons8-arrow.svg";


const Carousel: FC = () => {
    
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const items = [
        { key: "whoiam", component: <WhoIAm /> },
        { key: "tecnologies", component: <Tecnologies /> },
        { key: "experience", component: <Experience /> }
      ];
      
    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= items.length) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    const handleNextSlide = () => {
      updateIndex(activeIndex + 1)

    }
    const handlePrevSlide = () => {
      updateIndex(activeIndex - 1)
    }

    useEffect(() => {
        // Need to learn debouncing to implement keydown event, because the page overloads when the user press too fast the keys.
        let isScrolling = false;
        // let isKeyScrolling = false;
        // let isblocked = false;

        const handleScroll = (event: WheelEvent) => {
            if (!isScrolling) {
              isScrolling = true;
        
              setTimeout(() => {
                if (event.deltaX > 0) {
                  updateIndex(activeIndex + 1);
                } else {
                  updateIndex(activeIndex - 1);
                }
        
                isScrolling = false;
              }, 250);
            }
          };

        // const handleKeyPress = (event: KeyboardEvent) => {
        //     if (!isKeyScrolling && !isblocked) {
        //         isKeyScrolling = true;
        //         if (event.key === "ArrowRight") updateIndex(activeIndex + 1);
        //         if(event.key === "ArrowLeft") updateIndex(activeIndex - 1);
        //         isKeyScrolling = false;
        //         isblocked = true;

        //         setTimeout(() => {
        //             isblocked = false;
        //         }, 1000)
        //     }
        // }
    
        const carouselElement = carouselRef.current;

        if (carouselElement) {
            carouselElement.addEventListener("wheel", handleScroll);
            // document.addEventListener("keydown", handleKeyPress)
          return () => {
            carouselElement.removeEventListener("wheel", handleScroll);
          };
        }
      }, [activeIndex]);
    
    return (
        <>
            <div ref={carouselRef} className={style.Carousel} style={{ transform: `translateX(-${activeIndex * 33.2}%)` }}>
                {items.map((item) => (
                    <div key={item.key}>{item.component}</div>
                ))}
            </div>
            <div className={style.Background}>
                <img className={`${style.LeftArrow} ${style.Arrow}`} src={arrow} alt="" onClick={handlePrevSlide}/>
                <div className={`${style.Rombos} ${activeIndex === 0 ? style.ActiveIndex : ""}`} onClick={()=> {
                    updateIndex(0);
                }}></div>
                <div className={`${style.Rombos} ${activeIndex === 1 ? style.ActiveIndex : ""}`} onClick={() => {
                    updateIndex(1);
                }}></div>
                <div className={`${style.Rombos} ${activeIndex === 2 ? style.ActiveIndex : ""}`} onClick={()=> {
                    updateIndex(2);
                }}></div>
                <img className={`${style.RightArrow} ${style.Arrow}`} src={arrow} alt="" onClick={handleNextSlide}/>

            </div>
        </>
    )
}
export default Carousel;