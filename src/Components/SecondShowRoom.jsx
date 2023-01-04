import React from "react";
import Classes from '../Styles/SecondShowRoom.module.css';

const SecondShowRoom = () => {
    // const[slide, setSlide] = React.useState()
    return (
        <section className={Classes.SecondShowRoom}>
            <div className={Classes.PhotoCollage}>

            </div>
            <div className={Classes.ShopNowBtn}>
                <button className={Classes.Btn}> Shop Now </button>
            </div>
        </section>
    );
}

export default SecondShowRoom;
