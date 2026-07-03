import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router-dom";
import { navItems } from "../data/navItems.js";

const Layout = () => {
    return (
        <>
            <Navbar navItems={navItems} />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
