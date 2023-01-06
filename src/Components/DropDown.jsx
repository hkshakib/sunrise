import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import  '../Styles/DropDown.css';
import DropdownItem from "./DropDownItem";

const BottomArrow = <FontAwesomeIcon icon={faAngleDown} />
const UpArrow = <FontAwesomeIcon icon={faAngleUp} />

function DropDown({ text }) {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();
    let Arrow;
    if(!open){
        Arrow = BottomArrow;
    }
    else{
        Arrow = UpArrow;
    }

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
                console.log(menuRef.current);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    

    return (
        <div className="MenuContainer" ref={menuRef}>
            <div className="DropDown" >
                <span onClick={() => { setOpen(!open) }}> 
                    {text}  {Arrow}
                </span>
            </div>

            <div className={`DropdownMenu ${open ? 'active' : 'inactive'}`} >
                <ul>
                    <DropdownItem text={"Shop1"} />
                    <DropdownItem text={"Shop2"} />
                    <DropdownItem text={"Shop3"} />
                    <DropdownItem text={"Shop4"} />
                    <DropdownItem text={"Shop5"} />
                    <DropdownItem text={"Shop6"} />
                    <DropdownItem text={"Shop7"} />
                </ul>
            </div>
        </div>
    );

}
export default DropDown;