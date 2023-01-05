import React from "react";
import Classes from '../Styles/Banner.module.css';
import Photo from '../Media/Images/banner.jpg';

const Banner = () => {
    return (
        <section className={Classes.Banner}>
            <div className={Classes.Image}>
                <img src={Photo} alt="" />
            </div>
        </section>
    );
}

export default Banner;
