import { Helmet } from "react-helmet";
import "../components/css/home.css";
import PageTemplate from "../components/PageTemplate";

const Home = (props: any) => {
    return (
        <>
            <Helmet>
                <title>lifesyncnow-client</title>
                <meta
                    name="description"
                    content="Welcome to the portfolio of Qandeel Khan, a Full Stack Developer specializing in Python, Django, and React. Browse his projects, skills, and experience.he's also known as qandeel baloch with the name of pakistani model"
                />
                <meta
                    name="keywords"
                    content="Qandeel Khan, Full Stack Developer, Python, Django, React, Portfolio, Projects, Skills, Experience,qandeel baloch"
                />
                <meta name="author" content="Qandeel Khan" />
                <meta name="robots" content="index,follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Helmet>
            <PageTemplate>
                <section id="home">
                    <h2>Please Add Items to home page...</h2>
                </section>
            </PageTemplate>
        </>
    );
};

export default Home;
