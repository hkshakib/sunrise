import React from "react";
import Classes from '../Styles/BigShowRoom.module.css';

const BigShowRoom = () => {
    // const[slide, setSlide] = React.useState()
    return (
        <section className={Classes.BigShowRoom}>
            <div className={Classes.ShopNowBtn}>
                <button className={Classes.Btn}> Shop Now </button>
            </div>
            <div className={Classes.PhotoCollage}>
                
            </div>
        </section>
    );
}

export default BigShowRoom;
