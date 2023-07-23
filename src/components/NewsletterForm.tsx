import React, { useState } from "react";
import "../css/newsletterForm.css";
import axios from "axios";

interface SubscribeFormProps {
    apiUrl: string;
}

const NewsletterForm: React.FC<SubscribeFormProps> = ({ apiUrl }) => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);

        axios
            .post(apiUrl, { email })
            .then(() => {
                setIsSuccess(true);
                setErrorMessage("");
            })
            .catch((error) => {
                setIsSuccess(false);
                if (error.response) {
                    setErrorMessage(error.response.data.email[0]);
                } else {
                    setErrorMessage(error.message);
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section id="newsLetter" className="section-m1">
            <div className="newstext">
                <h4>Singn Up for Newsletters</h4>
                <p>
                    Get Email updates about our latest Posts and{"  "}
                    <span> special offers</span>
                </p>
            </div>
            <form className="form" onClick={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <button className="normal">Sign Up</button>
                {isSuccess && <p>Successfully subscribed!</p>}
                {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                )}
            </form>
        </section>
    );
};

export default NewsletterForm;
