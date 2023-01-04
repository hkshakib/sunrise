import React from "react";
import Navbar from "./Navbar";
import Classes from "../Styles/WebBody.module.css";

function WebBody({children}){
    return (
        <>
            <Navbar />
            <main className={Classes.Main}>
                <div className={Classes.Container} >
                    {children}
                </div>
            </main>
        </>
    )
}

export default WebBody;