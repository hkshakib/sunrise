import React from "react";
import Navbar from "./Navbar";
import Classes from "../Styles/WebBody.module.css";

const WebBody =()=>{
    return(
        <div className={Classes.WebBody}>
            <Navbar/>
        </div>
    )
}

export default WebBody;