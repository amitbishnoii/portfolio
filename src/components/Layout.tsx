import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
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
