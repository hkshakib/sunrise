import React from "react";
import Classes from '../Styles/AutoSlider.module.css';

const AutoSlider = () => {
    let element = <span>UP TO 30% OFF IN OUR SALE</span>;

    return (
        <div className={Classes.AutoSlider}>
           {element}
           {element}
           {element}
           {element}
           {element}
           {element}
        </div>
    );
}
export default AutoSlider;