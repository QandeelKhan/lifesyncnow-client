import React, { useState } from "react";
import axios from "axios";
import "../css/footer-subscribe-form.css";

interface SubscribeFormProps {
    apiUrl: string;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({ apiUrl }) => {
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
        <form onSubmit={handleSubmit} className="pop-form">
            {/* <label htmlFor="email">Email:</label> */}
            <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={handleEmailChange}
                required
            />
            <button className="pop-btn" type="submit" disabled={isLoading}>
                {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
            {isSuccess && <p>Successfully subscribed!</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
    );
};

export default SubscribeForm;
