import React from "react";

function DropdownItem(props) {
    return (
        <li className='dropdownItem'>
            <span> {props.text} </span>
        </li>
    );
}

export default DropdownItem;