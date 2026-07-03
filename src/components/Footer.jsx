import { NavLink } from "react-router-dom";
import { navItems } from "../data/navItems.js";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white w-full dark:bg-black border-t border-gray-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <div className="text-xl font-bold text-gray-900 dark:text-white flex gap-4">
                            <a href="https://leetcode.com/u/aMitBishnoiiiiii/">
                                {<SiLeetcode />}
                            </a>
                            <a href="https://github.com/amitbishnoii?tab=overview&from=2026-02-01&to=2026-02-26">
                                {<FaGithub />}
                            </a>
                            <a href="mailto:amitbishnoi29012@gmail.com">
                                {<MdEmail />}
                            </a>
                            <a href="https://www.linkedin.com/in/amit-bishnoi-52bb4735a/">
                                {<FaLinkedin />}
                            </a>
                        </div>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-6">
                        {navItems.map((item) => {
                            return (
                                <NavLink
                                    key={item.name}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                                            isActive
                                                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-500"
                                                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                        }}`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
