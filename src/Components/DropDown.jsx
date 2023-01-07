import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import '../Styles/DropDown.css';
import DropdownItem from "./DropDownItem";

const BottomArrow = <FontAwesomeIcon icon={faAngleDown} />
const UpArrow = <FontAwesomeIcon icon={faAngleUp} />


function DropDown({ text }) {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();
    let Arrow;
    if (!open) {
        Arrow = BottomArrow;
    }
    else {
        Arrow = UpArrow;
    }


    const DownItems = {
        title: "SHOP",
        one: "SHOP ALL",
        two: "SALE",
        three: "GIFTS",
        four: "NEW IN",
        six: "SLAVEGED PIECES",
        seven: "JUMPSUITS",
        eight: "TOPS",
        nine: "SKIRTS",
        ten: "SARONGS",
        eleven: "SCRUNCHIES",
    }

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
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
                    <DropdownItem text={DownItems}/>
                </ul>
            </div>
        </div>
    );


}
export default DropDown;