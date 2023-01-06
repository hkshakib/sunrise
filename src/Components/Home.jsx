import React from "react";
import Slider from "./Slider";
import AutoSlider from "./AutoSLider";
import ShowRoom from "./ShowRoom";
import BigShowRoom from "./BigShowRoom";
import SecondShowRoom from "./SecondShowRoom";
import SlideShow from "./SlideShow";
import CompanyName from "./CompanyName";
import Banner from "./Banner";
import Forms from "./Forms";
import Footer from "./Footer";

function Home(){
    return (
        <>
            <Slider/>
            <AutoSlider/>
            <ShowRoom/>
            <BigShowRoom/>
            <SecondShowRoom/>
            <CompanyName>
                <span>@SUNSHINE</span>
            </CompanyName>
            <SlideShow/>
            <CompanyName/>
            <Banner/>
            <Forms/>
            <Footer/>
        </>
    )
}

export default Home;