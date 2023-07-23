import { useEffect, useState } from "react";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import "../css/advertise.css";
import PageMainHeading from "../components/PageTemplate/PageMainHeading";
import axios from "axios";
const Advertise = () => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        axios
            // TODO: THIS BACKEND URL SHOULD BE REPLACED WITH LIFE-SYNC-NOW, TO GET SAFE FROM STRIKE
            .get("/api/advertise-with-life-sync-now/")
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
                            (paragraph: any) => {
                                const formattedText =
                                    paragraph?.paragraph_content?.replace(
                                        /\n/g,
                                        "<br />"
                                    );
                                return (
                                    <div key={paragraph.id}>
                                        <p>{paragraph.paragraph_title}</p>
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: formattedText,
                                            }}
                                        />
                                        {paragraph.paragraph_content}
                                    </div>
                                );
                            }
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
