import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import Classes from "../Styles/Navbar.module.css";
import DropDown from "./DropDown";

const Currency = <FontAwesomeIcon icon={faDollarSign} />
const Search = <FontAwesomeIcon icon={faSearch} />

const Navbar = () => {

    let Count = 0;
    return (
        <nav className={Classes.Navbar}>
            <ul className={Classes.Utility}>  
                <li className={Classes.Uitems1}>{Currency}</li>
                <li className={Classes.Uitems2}>{Search}</li>
            </ul>

            <ul className={Classes.LeftItems}>
                <li className={Classes.Litems1}><DropDown text="SHOP"/></li>
                <li className={Classes.Litems2}>OUR STORY</li>
                <li className={Classes.Litems3}>SUSTAINABLE SOLUTIONS</li>
            </ul>

            <div className={Classes.WebLogo}>SUNSHINE</div>

            <ul className={Classes.RightItems}>
                <li className={Classes.Ritems}>LOOKBOOKS</li>
                <li className={Classes.Ritems}>ACCOUNT</li>
                <li className={Classes.Ritems}>
                    BAG<div className={Classes.Counter}>{Count}</div> 
                </li>
            </ul>

        </nav>
    );
}
export default Navbar;