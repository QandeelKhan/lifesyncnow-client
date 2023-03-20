import React from "react";
import PageTemplate from "../components/PageTemplate";
import "../components/css/advertise.css";
import PageMainHeading from "../components/PageMainHeading";
const Advertise = () => {
    return (
        <PageTemplate>
            <PageMainHeading title="Advertise With Well+Good" />
            <div className="advertise-page-content">
                <p>
                    Please contact us at advertising@wellandgood.com to learn
                    more about our advertising opportunities.
                </p>
                <p>
                    + Don’t forget to include: <br />
                    + Your name, email and phone <br /> + Company name <br /> +
                    Business category/field <br /> + Timing of your potential ad
                    campaign (i.e. – Sept – Nov) <br /> + High and low budget
                    levels to craft a proposal <br /> + How you will measure
                    success (i.e. KPIs) <br /> + Optional: how you found us?
                </p>
            </div>
        </PageTemplate>
    );
};

export default Advertise;
