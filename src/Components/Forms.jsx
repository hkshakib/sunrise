import React from "react";
import Classes from '../Styles/Forms.module.css';

const Forms = () => {
    return (
        <section className={Classes.Forms}>

            <div className={Classes.JoinUs}>
                <span className={Classes.JoinText}>Join Us</span>
                <span className={Classes.MiniText}>
                    Sign up to our newsletter for 15% off your first order and<br/>
                    exclusive access to our our sales and<br/> 
                    latest collections!
                </span>
            </div>

            <div className={Classes.Address}>

                <div className={Classes.Details}>

                    <div className={Classes.FirstName}>
                        <div className={Classes.Title}><span>First name*</span></div>
                        <input type="text" placeholder="Your first name*" />
                    </div>

                    <div className={Classes.Email}>
                        <div className={Classes.EmailTitle}><span>Email Address*</span></div>
                        <input type="text" placeholder="Your Email Address*" />
                    </div>

                </div>

                <div className={Classes.Aggrement}>
                    <input type="radio" />
                    <span>By clicking join now to subscribe, you acknowledge that your information will be <br/> 
                        transferred to Mailchimp for processing. Learn more about Mailchimp's privacy<br/>
                        practices here.
                        </span>
                </div>

            </div>

            <div className={Classes.Birthday}>
                <div className={Classes.BirthdayTitle}>
                    <span>Your Birthday (for a special birthday treat)</span>
                </div>
                <div className={Classes.Times}>
                    <input type="date" placeholder="DAY"/>
                    <input type="month" placeholder="MONTH"/>
                </div>
                <div className={Classes.SubmitBtn}>
                    <button>SUBMIT</button>
                </div>
            </div>
        </section>
    );
}

export default Forms;
