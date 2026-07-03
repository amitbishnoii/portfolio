const Hero = () => {
    return (
        <section className="relative w-full h-full bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="text-center">
                    {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm font-medium mb-8">
                        🏆 Rated #1 by G2 Crowd
                    </div> */}

                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        Hi, I'm Amit
                        <br />
                        <span className="bg-linear-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                            {" "}
                            Full Stack Developer
                        </span>
                        <br />
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                        I build scalable apps using React, Node.js, Express and
                        MongoDB with AI integration.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#projects">
                            <button className="px-8 py-4 bg-linear-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer">
                                View Projects
                            </button>
                        </a>
                        <button className="px-8 py-4 border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 font-semibold rounded-lg transition-colors duration-200 cursor-pointer">
                            Contact
                        </button>
                    </div>
                </div>

                {/* <div className="mb-16">
                    <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-white mb-8">
                        Trusted by industry leaders
                    </h3>
                </div>

                <div className="text-center">
                    <div className="inline-flex items-center gap-6 px-8 py-4 bg-gray-50 dark:bg-zinc-900 rounded-2xl">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                4.9/5
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                G2 Rating
                            </div>
                        </div>
                        <div className="w-px h-12 bg-gray-300 dark:bg-zinc-700"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                99.9%
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Uptime
                            </div>
                        </div>
                        <div className="w-px h-12 bg-gray-300 dark:bg-zinc-700"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                24/7
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Support
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Hero;
