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
                <div className={Classes.TextContainer}>
                    <span className={Classes.Title}>EACH PIECE IS INDIVIDUALLY HANDMADE IN BALI AND MADE FROM SURPLUS FABRIC</span>
                    <span className={Classes.SecondTitle}>Salvaged Pieces</span>
                </div>
                <div className={Classes.BtnContainer}>
                    <button className={Classes.Btn}> Shop Now </button>
                </div>
            </div>
        </section>
    );
}

export default SecondShowRoom;
