import React from "react";
import Classes from '../Styles/ShowRoom.module.css';
import Photo1 from '../Media/Images/slide3.jpg';

const ShowRoom = () => {
    return (
        <section className={Classes.ShowRoom}>

            <div className={Classes.PhotoCollage} >
                <img src={Photo1} alt="" />
                <span className={Classes.Title}>
                    JEANIE MINI - ECRU PAISLEY
                </span><br/>
                <span className={Classes.Price}>£252.00</span>
            </div>

            <div className={Classes.PhotoCollage} >
                <img src={Photo1} alt="" />
                <span className={Classes.Title}>
                    JEANIE MINI - ECRU PAISLEY
                </span><br/>
                <span className={Classes.Price}>£252.00</span>
            </div>

            <div className={Classes.PhotoCollage} >
                <img src={Photo1} alt="" />
                <span className={Classes.Title}>
                    JEANIE MINI - ECRU PAISLEY
                </span><br/>
                <span className={Classes.Price}>£252.00</span>
            </div>

            <div className={Classes.PhotoCollage} >
                <img src={Photo1} alt="" />
                <span className={Classes.Title}>
                    JEANIE MINI - ECRU PAISLEY
                </span><br/>
                <span className={Classes.Price}>£252.00</span>
            </div>

        </section>
    );
}

export default ShowRoom;
