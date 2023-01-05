import React from "react";
import Classes from '../Styles/SecondShowRoom.module.css';
import Photo from '../Media/Images/slide5.jpg';

const SecondShowRoom = () => {
    return (
        <section className={Classes.SecondShowRoom}>
            <div className={Classes.PhotoCollage}>
                <img src={Photo} alt="" />
            </div>
            <div className={Classes.ShopNowBtn}>
                <button className={Classes.Btn}> Shop Now </button>
            </div>
        </section>
    );
}

export default SecondShowRoom;
