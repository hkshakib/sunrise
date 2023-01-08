import React from "react";
import Classes from '../Styles/BigShowRoom.module.css';

const BigShowRoom = () => {
    return (
        <section className={Classes.BigShowRoom}>
            <div className={Classes.ShopNowBtn}>
                <span className={Classes.Title}></span>
                <span className={Classes.SecondTitle}></span>
                <button className={Classes.Btn}> Shop Now </button>
            </div>
            <div className={Classes.PhotoCollage}>

            </div>
        </section>
    );
}

export default BigShowRoom;
