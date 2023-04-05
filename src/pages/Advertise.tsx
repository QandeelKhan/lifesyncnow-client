import React, { useEffect, useState } from "react";
import PageTemplate from "../components/PageTemplate";
import "../components/css/advertise.css";
import PageMainHeading from "../components/PageMainHeading";
import axios from "axios";
const Advertise = () => {
    const [advertise, setAdvertise] = useState<any>({});
    const [data, setData] = useState<any>([]);
    const [paragraphs, setParagraphs] = useState<any>([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/Advertise-With-Well-Plus-Good/")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <PageTemplate>
            {data.map((myData: any) => (
                <div key={myData.id}>
                    <PageMainHeading title={myData.title} />
                    <div className="advertise-page-content">
                        <p>{myData.content}</p>
                        {myData.paragraphs_advertise_well_good.map(
                            (paragraph: any) => (
                                <div>
                                    <p>{paragraph.paragraph_title}</p>
                                    <p>{paragraph.paragraph_content}</p>
                                </div>
                            )
                        )}
                        <br />
                    </div>
                </div>
            ))}
            {/* <div className="advertise-page-content">
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
                <br />
            </div> */}
        </PageTemplate>
    );
};

export default Advertise;
