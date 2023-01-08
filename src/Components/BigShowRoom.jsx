import React from "react";
import Classes from '../Styles/BigShowRoom.module.css';

const BigShowRoom = () => {
    return (
        <section className={Classes.BigShowRoom}>
            <div className={Classes.ShopNowBtn}>
                <div className={Classes.TextContainer}>
                    <span className={Classes.Title}>CHOOSE THE PERFECT STOCKING FILLER</span>
                    <span className={Classes.SecondTitle}>See our gift selection</span>
                </div>
                <div className={Classes.BtnContainer}>
                    <button className={Classes.Btn}> Shop Now </button>
                </div>
            </div>
            <div className={Classes.PhotoCollage}>
            </div>

        </section>
    );
}

export default BigShowRoom;
