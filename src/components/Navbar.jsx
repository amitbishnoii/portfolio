import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ navItems }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full bg-white dark:bg-black">
            <nav className="sticky z-10 bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-lg shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="hidden md:ml-6 md:flex md:space-x-8">
                                {navItems.map((item) => (
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
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="hidden md:block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer">
                                Download Resume
                            </button>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 dark:border-zinc-800">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
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
                            ))}
                            <div className="border-t border-gray-200 dark:border-zinc-800 pt-4 mt-4">
                                <button className="hidden md:block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer">
                                    Download Resume
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}
