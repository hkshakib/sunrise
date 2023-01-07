import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import Classes from "../Styles/Navbar.module.css";
import DropDown from "./DropDown";
import SearchDown from "./Search";

const Currency = <FontAwesomeIcon icon={faDollarSign} />
const Search = <FontAwesomeIcon icon={faSearch} />

const Navbar = () => {

    let Count = 0;
    return (
        <nav className={Classes.Navbar}>
            <ul className={Classes.Utility}>
                <li className={Classes.Uitems1}>{Currency}</li>
                <li className={Classes.Uitems2}><SearchDown Icon = {Search} /></li>
            </ul>

            <ul className={Classes.LeftItems}>
                <li className={Classes.Litems1}><DropDown text="SHOP" type="shop" /></li>
                <NavLink to={"/shop"} className={Classes.Litems2}>OUR STORY</NavLink>
                <NavLink to={"/solution"} className={Classes.Litems3}>SUSTAINABLE SOLUTIONS</NavLink>
            </ul>

            <NavLink to={"/"} className={Classes.WebLogo}>SUNSHINE</NavLink>

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