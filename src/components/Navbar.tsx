import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "motion/react";
import type { navItem } from "./Layout";

export default function Navbar({ navItems }: { navItems: navItem[] }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `pf-sans inline-flex items-center pt-1 pb-1 text-sm font-medium border-b-2 transition-colors duration-150 ${
            isActive
                ? "text-[#1B1D1F] dark:text-[#ECEAE2] border-[#D98F2B]"
                : "text-[#6B6F76] border-transparent hover:text-[#1B1D1F] dark:hover:text-[#ECEAE2]"
        }`;

    return (
        <div className="site-nav sticky z-20 top-0 w-full backdrop-blur-sm">
            <nav className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="hidden md:flex md:space-x-8">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.to}
                                    className={linkClass}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="hidden md:block pf-sans px-4 py-2 border border-[#1B1D1F] dark:border-[#ECEAE2] text-[#1B1D1F] dark:text-[#ECEAE2] text-sm font-medium hover:bg-[#1B1D1F] hover:text-[#F2F1EC] dark:hover:bg-[#ECEAE2] dark:hover:text-[#14161A] transition-colors duration-150 cursor-pointer">
                            Download resume
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden inline-flex items-center justify-center p-2 text-[#6B6F76] hover:text-[#1B1D1F] dark:hover:text-[#ECEAE2] transition-colors duration-150"
                        >
                            {isMenuOpen ? (
                                <GrClose size={20} />
                            ) : (
                                <RxHamburgerMenu size={20} />
                            )}
                        </button>
                    </div>
                </div>

                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isMenuOpen ? "auto" : 0,
                        opacity: isMenuOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.35 }}
                    className={`overflow-hidden ${
                        isMenuOpen
                            ? "pointer-events-auto"
                            : "pointer-events-none"
                    }`}
                >
                    <div className="pt-2 pb-4 flex flex-col items-center gap-3">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.to}
                                className={linkClass}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                    <div className="border-t border-[#D8D6CE] dark:border-[#2A2C30] pt-4 pb-4 flex items-center justify-center">
                        <button className="pf-sans px-4 py-2 border border-[#1B1D1F] dark:border-[#ECEAE2] text-[#1B1D1F] dark:text-[#ECEAE2] text-sm font-medium hover:bg-[#1B1D1F] hover:text-[#F2F1EC] dark:hover:bg-[#ECEAE2] dark:hover:text-[#14161A] transition-colors duration-150 cursor-pointer">
                            Download resume
                        </button>
                    </div>
                </motion.div>
            </nav>
        </div>
    );
}
