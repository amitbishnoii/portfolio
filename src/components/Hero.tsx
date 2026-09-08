import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
    return (
        <section className="hero-section relative w-full bg-[#F2F1EC] dark:bg-[#14161A]">
            <div className="hero-inner max-w-6xl mx-auto px-6 sm:px-8 pt-28 pb-24">
                <div className="hero-copy max-w-2xl">
                    <span className="hero-kicker pf-mono text-sm text-[#6B6F76]">
                        Hi, I'm Amit
                    </span>

                    <h1 className="hero-title pf-mono text-4xl md:text-6xl font-bold text-[#1B1D1F] dark:text-[#ECEAE2] leading-[1.1] mt-4">
                        Full stack developer,{" "}
                        <span className="relative inline-block">
                            building with AI
                            <span className="absolute left-0 -bottom-1 w-full h-0.75 bg-[#D98F2B]" />
                        </span>
                    </h1>

                    <p className="hero-description pf-sans text-lg text-[#4A4D52] dark:text-[#B7B8B6] leading-relaxed mt-8 max-w-lg">
                        I build scalable applications using React, Node.js,
                        Express, and MongoDB, with AI Integration.
                    </p>

                    <div className="flex items-center gap-8 mt-10">
                        <a
                            href="#projects"
                            className="group pf-sans inline-flex items-center gap-1.5 text-sm font-medium text-[#1B1D1F] dark:text-[#ECEAE2]"
                        >
                            <span className="border-b border-[#1B1D1F] dark:border-[#ECEAE2] group-hover:border-[#D98F2B] group-hover:text-[#D98F2B] transition-colors duration-150">
                                View projects
                            </span>
                            <BsArrowUpRight
                                className="w-4 h-4 group-hover:text-[#D98F2B] transition-colors duration-150"
                                strokeWidth={2}
                            />
                        </a>
                        <a
                            href="#contact"
                            className="pf-sans text-sm font-medium text-[#6B6F76] hover:text-[#1B1D1F] dark:hover:text-[#ECEAE2] transition-colors duration-150"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
