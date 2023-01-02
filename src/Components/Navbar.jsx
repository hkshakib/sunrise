import React from "react";
import Classes from "../Styles/Navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngleDown, faSearch, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Currency = <FontAwesomeIcon icon={faDollarSign} />
const Search = <FontAwesomeIcon icon={faSearch} />
const BottomArrow = <FontAwesomeIcon icon={faAngleDown} />

const Navbar = () => {

    let Count = 0;
    return (
        <navbar className={Classes.Navbar}>
            <ul className={Classes.Utility}>  
                <li className={Classes.Uitems1}>{Currency}</li>
                <li className={Classes.Uitems2}>{Search}</li>
            </ul>

            <ul className={Classes.LeftItems}>
                <li className={Classes.Litems1}>SHOP {BottomArrow}</li>
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

        </navbar>
    );
}
export default Navbar;