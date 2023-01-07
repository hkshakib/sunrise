import React from "react";
import '../Styles/DropDownItem.css';
function DropdownItem({ text }) {
    return (
        <li className='DropDownItem'>
            <div className="Title"><span> {text.title} </span></div>
            <div className="Items">
                <span> {text.one} </span>
                <span> {text.two} </span>
                <span> {text.three} </span>
                <span> {text.four} </span>
                <span> {text.five} </span>
                <span> {text.six} </span>
                <span> {text.seven} </span>
                <span> {text.eight} </span>
                <span> {text.nine} </span>
                <span> {text.ten} </span>
                <span> {text.eleven} </span>
            </div>
        </li>
    );

}

export default DropdownItem;