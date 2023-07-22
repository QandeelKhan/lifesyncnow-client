import { useEffect, useState } from "react";
import axios from "axios";

// ---------3RD PARTY IMPORTS----------
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// prism-c needs to be loaded before prism-cpp to work theme for the cpp code snippet
import Prism from "prismjs";
import "prismjs/components/prism-c"; // Language
import "prismjs/components/prism-cpp"; // Language
import "prismjs/components/prism-python"; // Language
import "prismjs/themes/prism-okaidia.css"; // Theme
import { Helmet } from "react-helmet";
// ---------3RD PARTY IMPORTS----------

// ---------INTERNAL IMPORTS----------
import PageTemplate from "../components/PageTemplate/PageTemplate";
import PageMainHeading from "../components/PageTemplate/PageMainHeading";
import "../components/css/privacy.css";
// ---------INTERNAL IMPORTS----------

const Privacy = () => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // checking if the data is completely loaded then run prisma after that to apply style from privacy.css on "code snippets"
        if (data.length > 0) {
            Prism.highlightAll();
        }
    }, [data]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8000/api/privacy/"
            );
            const responseData = response.data;
            if (Array.isArray(responseData) && responseData.length > 0) {
                setData(responseData);
                // setPrivacy(responseData[0]);
            }
        } catch (error) {
            console.log(error);
            // Handle the error gracefully (e.g., show an error message to the user)
        }
    };

    const renderContent = (content: any) => {
        return { __html: content };
    };

    return (
        <>
            <Helmet>
                <title>Welcome LifeSyncNow Privacy Policy Page</title>
                <meta
                    name="description"
                    content="Welcome to the lifesyncnow, this is the lifesyncnow blog privacy policy page, created by qandeel khan, Your privacy is always our first priority"
                />
                <meta
                    name="keywords"
                    content="Qandeel Khan, Qandeel Baloch, lifesyncnow, life sync now, PrivacyPolicy, PrivacyPolicy page of lifesyncnow, lifesyncnow blog privacy policy page, health and fitness, best health blog, best life blog"
                />
                <meta name="author" content="Qandeel Khan" />
                <meta name="robots" content="index,follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Helmet>
            <PageTemplate>
                {data.map((myData: any) => (
                    <div key={myData.id}>
                        <PageMainHeading title={myData.title} />
                        <img src={`${myData.myImage}`} alt="" />
                        <div className="privacy-page-content">
                            {myData.content ? (
                                <div
                                    dangerouslySetInnerHTML={renderContent(
                                        myData.content
                                    )}
                                />
                            ) : (
                                <p>
                                    JavaScript needs to be enabled to view this
                                    content.
                                    <a href="https://www.enable-javascript.com/">
                                        Enable JavaScript
                                    </a>
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </PageTemplate>
        </>
    );
};

export default Privacy;
