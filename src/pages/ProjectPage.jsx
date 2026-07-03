import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects.js";

const ProjectPage = () => {
    return (
        <section className="py-20 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Projects
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        A collection of full-stack and AI-powered applications
                    </p>
                </div>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-12 ${
                                project.reverse ? "lg:flex-row-reverse" : ""
                            }`}
                        >
                            <div className="flex-1 space-y-6">
                                <div>
                                    <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider">
                                        {project.subtitle}
                                    </span>
                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>
                                <ul className="space-y-3">
                                    {project.techStack.map(
                                        (point, pointIndex) => (
                                            <li
                                                key={pointIndex}
                                                className="flex items-start"
                                            >
                                                <svg
                                                    className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span className="text-gray-700 dark:text-gray-300">
                                                    {point}
                                                </span>
                                            </li>
                                        ),
                                    )}
                                </ul>
                                <div className="flex gap-3">
                                    <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                                        Visit Now
                                        <svg
                                            className="w-5 h-5 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors duration-200">
                                        <FaGithub className="text-lg" />
                                        View Repo
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto"
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
