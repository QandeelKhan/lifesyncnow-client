import React from "react";
import "./css/newsletterForm.css";
const NewsletterForm = () => {
    return (
        <section id="newsLetter" className="section-m1">
            <div className="newstext">
                <h4>Singn Up for Newsletters</h4>
                <p>
                    Get Email updates about our latest Posts and{" "}
                    <span> special offers</span>
                </p>
            </div>
            <form className="form">
                <input type="text" placeholder="example@gmail.com" />
                <button className="normal">Sign Up</button>
            </form>
        </section>
    );
};

export default NewsletterForm;
