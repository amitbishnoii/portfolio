import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects.js";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectPage = () => {
    return (
        // <section className="py-20 bg-white dark:bg-black overflow-hidden">
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //         <div className="text-center mb-16">
        //             <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        //                 Projects
        //             </h2>
        //             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        //                 A collection of full-stack and AI-powered applications
        //             </p>
        //         </div>

        //         <div className="space-y-24">
        //             {projects.map((project, index) => (
        //                 <div
        //                     key={index}
        //                     className={`flex flex-col lg:flex-row items-center gap-12 ${
        //                         project.reverse ? "lg:flex-row-reverse" : ""
        //                     }`}
        //                 >
        //                     <div className="flex-1 space-y-6">
        //                         <div>
        //                             <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
        //                                 {project.title}
        //                             </h3>
        //                         </div>
        //                         <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        //                             {project.desc}
        //                         </p>
        //                         <ul className="space-y-3">
        //                             {project.techStack.map(
        //                                 (point, pointIndex) => (
        //                                     <li
        //                                         key={pointIndex}
        //                                         className="flex items-start"
        //                                     >
        //                                         <svg
        //                                             className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5"
        //                                             fill="none"
        //                                             stroke="currentColor"
        //                                             viewBox="0 0 24 24"
        //                                         >
        //                                             <path
        //                                                 strokeLinecap="round"
        //                                                 strokeLinejoin="round"
        //                                                 strokeWidth={2}
        //                                                 d="M5 13l4 4L19 7"
        //                                             />
        //                                         </svg>
        //                                         <span className="text-gray-700 dark:text-gray-300">
        //                                             {point}
        //                                         </span>
        //                                     </li>
        //                                 ),
        //                             )}
        //                         </ul>
        //                         <div className="flex gap-3">
        //                             <button
        //                                 onClick={() =>
        //                                     (window.location.href = project.dep)
        //                                 }
        //                                 className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 cursor-pointer"
        //                             >
        //                                 Visit Now
        //                                 <svg
        //                                     className="w-5 h-5 ml-2"
        //                                     fill="none"
        //                                     stroke="currentColor"
        //                                     viewBox="0 0 24 24"
        //                                 >
        //                                     <path
        //                                         strokeLinecap="round"
        //                                         strokeLinejoin="round"
        //                                         strokeWidth={2}
        //                                         d="M9 5l7 7-7 7"
        //                                     />
        //                                 </svg>
        //                             </button>
        //                             <button className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors duration-200 cursor-pointer">
        //                                 <FaGithub className="text-lg" />
        //                                 View Repo
        //                             </button>
        //                         </div>
        //                     </div>
        //                     <div className="flex-1">
        //                         <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
        //                             <img
        //                                 src={project.image}
        //                                 alt={project.title}
        //                                 width={600}
        //                                 height={400}
        //                                 className="w-full h-auto"
        //                             />
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </section>
        <section className="project-page py-24 bg-[#F2F1EC] dark:bg-[#14161A] overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="project-page-heading mb-20 max-w-xl">
                    <span className="page-kicker pf-mono">
                        SELECTED WORK / 2026
                    </span>
                    <h2 className="pf-mono text-3xl sm:text-4xl font-bold text-[#1B1D1F] dark:text-[#ECEAE2] tracking-tight">
                        Projects
                    </h2>
                    <p className="pf-sans text-base text-[#6B6F76] mt-3 leading-relaxed">
                        A collection of full-stack and AI-powered applications.
                    </p>
                </div>

                <div className="space-y-20">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-row flex flex-col lg:flex-row gap-10 lg:gap-16 border-t border-[#D8D6CE] dark:border-[#2A2C30] pt-10 ${
                                project.reverse ? "lg:flex-row-reverse" : ""
                            }`}
                        >
                            <div className="flex-1 flex flex-col justify-center space-y-5">
                                <span className="pf-mono text-xs text-[#6B6F76]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3 className="pf-mono text-2xl sm:text-[28px] font-bold text-[#1B1D1F] dark:text-[#ECEAE2] leading-snug">
                                    {project.title}
                                </h3>

                                <p className="pf-sans text-[15px] text-[#4A4D52] dark:text-[#B7B8B6] leading-relaxed max-w-md">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-1">
                                    {project.techStack.map(
                                        (point, pointIndex) => (
                                            <span
                                                key={pointIndex}
                                                className="pf-mono text-xs px-2.5 py-1 border border-[#D8D6CE] dark:border-[#2A2C30] text-[#4A4D52] dark:text-[#B7B8B6] rounded-sm"
                                            >
                                                {point}
                                            </span>
                                        ),
                                    )}
                                </div>

                                <div className="flex items-center gap-6 pt-3">
                                    <button
                                        onClick={() =>
                                            (window.location.href = project.dep)
                                        }
                                        className="group pf-sans inline-flex items-center gap-1.5 text-sm font-medium text-[#1B1D1F] dark:text-[#ECEAE2] cursor-pointer"
                                    >
                                        <span className="border-b border-[#1B1D1F] dark:border-[#ECEAE2] group-hover:border-[#D98F2B] group-hover:text-[#D98F2B] transition-colors duration-150">
                                            Visit site
                                        </span>
                                        <BsArrowUpRight
                                            className="w-4 h-4 group-hover:text-[#D98F2B] transition-colors duration-150"
                                            strokeWidth={2}
                                        />
                                    </button>

                                    <button className="pf-sans inline-flex items-center gap-2 text-sm font-medium text-[#6B6F76] hover:text-[#1B1D1F] dark:hover:text-[#ECEAE2] transition-colors duration-150 cursor-pointer">
                                        <FaGithub
                                            className="w-4 h-4"
                                            strokeWidth={2}
                                        />
                                        View repo
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="border border-[#D8D6CE] dark:border-[#2A2C30] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto grayscale-15 hover:grayscale-0 transition-[filter] duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectPage;
