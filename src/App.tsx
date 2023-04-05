import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Registration from "./pages/auth/Registration";
import Login from "./pages/auth/Login";
import SkinCareTips from "./pages/SkinCareTips";
import FoodAndNutrition from "./pages/FoodAndNutrition";
import HolisticTreatment from "./pages/HolisticTreatment";
import FitnessTips from "./pages/FitnessTips";
import PostDetail from "./pages/PostDetail";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookieNotice from "./pages/CookieNotice";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RelationshipTips from "./pages/RelationshipTips";
import Entertairment from "./pages/Entertairment";
import AuthorBio from "./components/AuthorBio";
import AuthorProfile from "./pages/AuthorProfile";
import PostTopic from "./pages/PostTopic";
import SearchResults from "./pages/SearchResult";
import Advertise from "./pages/Advertise";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/skin-care-tips" element={<SkinCareTips />} />
                    {/* <Route path="/post-detail" element={<PostDetail />} /> */}
                    <Route path="/post/:slug" element={<PostDetail />} />
                    <Route path="/topic/:slug" element={<PostTopic />} />
                    <Route path="search/" element={<SearchResults />} />
                    <Route
                        path="/food-and-nutrition"
                        element={<FoodAndNutrition />}
                    />
                    <Route
                        path="/holistic-treatment"
                        element={<HolisticTreatment />}
                    />
                    <Route path="/fitness-tips" element={<FitnessTips />} />
                    <Route
                        path="/terms-and-conditions"
                        element={<TermsAndConditions />}
                    />
                    <Route
                        path="/relationship-tips"
                        element={<RelationshipTips />}
                    />
                    <Route path="/cookie-notice" element={<CookieNotice />} />
                    {/* TODO: correct entertainment spellings at all instances */}
                    <Route path="/entertairment" element={<Entertairment />} />
                    {/* <Route path="/author/:slug" element={<AuthorBio />} /> */}
                    <Route path="/author/:slug" element={<AuthorProfile />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/advertise" element={<Advertise />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                    {/* <Route
                        path="/registration"
                        element={<GoogleRegistration />}
                    /> */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
