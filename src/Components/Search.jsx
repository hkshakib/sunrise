import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons'
import '../Styles/Search.css';
const SearchIcon = <FontAwesomeIcon icon={faSearch} />
const Cross = <FontAwesomeIcon icon={faClose} />

function Search({ Icon }) {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="SearchDropDown">
                <span onClick={() => { setOpen(!open) }}>
                    {Icon}
                </span>
            </div>

            <div className={`Search ${open ? 'active' : 'inactive'}`}>
                <div className="SearchContainer">
                    <div className="SearchBox">
                        <input type="text" placeholder='Search SunShine' className="SearchInput" />
                        <span>{SearchIcon}</span>
                    </div>
                    <div className="ExitBox">
                        <span onClick={() => { setOpen(!open) }}>{Cross}</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Search;