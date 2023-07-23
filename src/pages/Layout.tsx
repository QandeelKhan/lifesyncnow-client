import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout: React.FC = () => {
    const location: any = useLocation();
    const [key, setKey] = useState(0);

    // const dispatch = useDispatch();
    // const handleOutlet = () => {
    //     dispatch(setNavVisible(false));
    //     dispatch(setGearOpen(false));
    //     dispatch(setSideBarVisible(false));
    // };

    useEffect(() => {
        setTimeout(() => {}, 2000);
    }, []);

    useEffect(() => {
        setKey(location.key);
    }, [location]);
    return (
        <>
            {/* <LandingPage /> */}
            {/* <SideNav /> */}
            {/* <ThemesGear /> */}
            {/* <BlogDetailSidebar /> */}
            {/* <ThemeWrapper key={key}>
                    </ThemeWrapper> */}
            {/* <CssBaseline /> */}

            <Outlet key={key} />
        </>
    );
};
export default Layout;
