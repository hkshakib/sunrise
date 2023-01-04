import React from "react";
import Classes from '../Styles/Slider.module.css';
import Photo1 from '../Media/Images/slide1.jpg';

const Slider = () => {
    // const[slide, setSlide] = React.useState()
    return (
        <section className={Classes.Slider}>
            
            <div className={Classes.ImageSlider}>
                <img src={Photo1} alt="" />
            </div>
            
        </section>
    );
}

export default Slider;
