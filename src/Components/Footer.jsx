import React from "react";
import Classes from '../Styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons"

const Fb = <FontAwesomeIcon icon={faFacebook} size="2x" />
const In = <FontAwesomeIcon icon={faInstagram} size="2x" />
const Pin = <FontAwesomeIcon icon={faPinterest} size="2x" />

const Footer = () => {
    return (
        <section className={Classes.Footer}>
            <div className={Classes.Content}>
                <div className={Classes.Shop}>
                    <span id={Classes.ShopTitle}>SHOP</span>
                    <span id={Classes.ShopLink1}>Shop all</span>
                    <span id={Classes.ShopLink2}>HS 22</span>
                    <span id={Classes.ShopLink3}>Slavaged Pieces</span>
                </div>
                <div className={Classes.SocialLinks}>
                    <div className={Classes.Icons}>
                        <span>{Fb}</span>
                        <span>{In}</span>
                        <span>{Pin}</span>
                    </div>
                    <div className={Classes.CopyRight}>
                        <span>© 2023 CLOE CASSANDRO. ALL RIGHTS RESERVED.</span>
                    </div>
                    <div className={Classes.MadeText}>
                        <span>MADE BY SHAKIB</span>
                    </div>
                </div>
            </div>

            <div className={Classes.Journal}>
                <div className={Classes.SetFooterItems}>
                    <span id={Classes.FooterTitle}>JOURNAL</span>
                    <span id={Classes.FooterLink}>Lookbooks</span>
                    <span id={Classes.FooterLink}>Journal</span>
                </div>
            </div>
            <div className={Classes.About}>
                <div className={Classes.SetFooterItems}>
                    <span id={Classes.FooterTitle}>ABOUT</span>
                    <span id={Classes.FooterLink}>Our Story</span>
                    <span id={Classes.FooterLink}>Collaborations</span>
                </div>
            </div>
            <div className={Classes.Contact}>
                <div className={Classes.SetFooterItems}>
                    <span id={Classes.FooterTitle}>CONTACT</span>
                    <span id={Classes.FooterLink}>Enquiry Email</span>
                    <span id={Classes.FooterLink}>Wholesale Email</span>
                </div>
            </div>
            <div className={Classes.Services}>
                <div className={Classes.SetFooterItems}>
                    <span id={Classes.FooterTitle}>SERVICES</span>
                    <span id={Classes.FooterLink}>Delivary & Returns</span>
                    <span id={Classes.FooterLink}>Stokists</span>
                    <span id={Classes.FooterLink}>Care Guide</span>
                    <span id={Classes.FooterLink}>Size Guide</span>
                </div>
            </div>
            <div className={Classes.Legal}>
                <div className={Classes.SetFooterItems}>
                    <span id={Classes.FooterTitle}>LEGAL</span>
                    <span id={Classes.FooterLink}>Privecy Policy</span>
                    <span id={Classes.FooterLink}>Terms & Conditions</span>
                    <span id={Classes.FooterLink}>Cookie Policy</span>
                </div>
            </div>
        </section>
    );
}

export default Footer;
