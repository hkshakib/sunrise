import React from "react";
import Classes from '../Styles/SlideShow.module.css';
import Photo from '../Media/Images/slide3.jpg';
import Photo1 from '../Media/Images/slide4.jpg';

const SlideShow = () => {
    return (
        <section className={Classes.SlideShow}>
            <div className={Classes.Image1}>
                <img src={Photo} alt="" />
            </div>
            <div className={Classes.Image2}>
                <img src={Photo1} alt="" />
            </div>
            <div className={Classes.Image3}>
                <img src={Photo} alt="" />
            </div>
        </section>
    );
}

export default SlideShow;
