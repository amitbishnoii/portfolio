import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import { Outlet } from "react-router-dom";

export interface navItem {
    name: string;
    to: string;
}

export const navItems: navItem[] = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/projects" },
    { name: "Github", to: "https://github.com/amitbishnoii/" },
    { name: "LeetCode", to: "https://leetcode.com/u/aMitBishnoiiiiii/" },
    { name: "Contact", to: "/contact" },
];

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
