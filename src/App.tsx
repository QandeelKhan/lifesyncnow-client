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

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/skin-care-tips" element={<SkinCareTips />} />
                    <Route
                        path="/food-and-nutrition"
                        element={<FoodAndNutrition />}
                    />
                    <Route
                        path="/holistic-treatment"
                        element={<HolisticTreatment />}
                    />
                    <Route path="/fitness-tips" element={<FitnessTips />} />
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
