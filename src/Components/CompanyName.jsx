import React from "react";
import Classes from '../Styles/CompanyName.module.css';

function CompanyName({children}) {
    return (
        <section className={Classes.CompanyName}>
            {children}
        </section>
    );
}

export default CompanyName;
