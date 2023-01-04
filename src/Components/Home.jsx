import React from "react";
import Slider from "./Slider";
import AutoSlider from "./AutoSLider";
import ShowRoom from "./ShowRoom";
import BigShowRoom from "./BigShowRoom";
import SecondShowRoom from "./SecondShowRoom";

function Home(){
    return (
        <>
            <Slider/>
            <AutoSlider/>
            <ShowRoom/>
            <BigShowRoom/>
            <SecondShowRoom/>
        </>
    )
}

export default Home;