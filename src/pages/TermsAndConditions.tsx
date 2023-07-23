import React, { useEffect, useState } from "react";
import "../css/termsAndConditions.css";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import axios from "axios";

const TermsAndConditions = () => {
    const [data, setData] = useState<any>([]);
    const [clauses, setClauses] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("/api/terms");

            // Create a new array with all the clauses
            const clausesArr = result.data.reduce((acc: any, item: any) => {
                return [...acc, ...item.clauses];
            }, []);

            setData(result.data);
            setClauses(clausesArr);
        };
        fetchData();
    }, []);

    return (
        <PageTemplate>
            <div className="terms-page-content">
                {/* TODO: correct it incase no data is comming from backend */}
                {data.map((claue: any, index: any) => (
                    <div key={index}>
                        <h2 className="main-heading">{claue.title}</h2>
                        <p>{claue.content}</p>
                    </div>
                ))}

                <div>
                    {clauses.map((claue: any, index: any) => (
                        <div key={index}>
                            <h2>{claue.clue_title}</h2>
                            <p>{claue.clue_content}</p>
                        </div>
                    ))}
                    <h1>hello</h1>
                </div>
            </div>
        </PageTemplate>
    );
};

export default TermsAndConditions;
