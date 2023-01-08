import React, { useState } from "react";
import Classes from '../Styles/Slider.module.css'
import Photo1 from '../Media/Images/slide1.jpg';
import Photo2 from '../Media/Images/slide2.jpg';
import { NavLink } from "react-router-dom";

const Slider = () => {
    const [Index, setIndex] = useState(0);
    let Photo;
    const HandlePrev = () => {
        if (Index === 1) {
            setIndex(0);
        }
        else {
            setIndex(1);
        }
    }

    const HandleNext = () => {
        if (Index === 1) {
            setIndex(0);
        }
        else {
            setIndex(1);
        }
    }

    if (Index === 0) {
        Photo = Photo1;
    }
    else {
        Photo = Photo2;
    }

    return (
        <section className={Classes.Slider}>
            <div className={Classes.Btn}>
                <span className={Classes.Title}>SALE</span>
                <NavLink to={'/sale'} className={Classes.ShopNowBtn}>SHOP NOW</NavLink>
                <button className={Classes.PrevBtn} onClick={HandlePrev}>
                    <span>Prev</span>
                </button>
                <button className={Classes.NextBtn} onClick={HandleNext}>
                    <span>Next</span>
                </button>
            </div>
            <div className={Classes.ImageSlider}>
                <img src={Photo} alt="" />
            </div>

        </section>
    );
}

export default Slider;
