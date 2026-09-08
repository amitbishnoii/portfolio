import type { Project } from "../data/projects.js";
import Card from "./Card.js";
import { useNavigate } from "react-router-dom";

const Projects = ({
    projects,
    showBtn = false,
}: {
    projects: Project[];
    showBtn: boolean;
}) => {
    const navigate = useNavigate();

    return (
        <section
            id="projects"
            className="section-block py-24 px-6 sm:px-8 bg-[#F2F1EC] dark:bg-[#14161A]"
        >
            <div className="max-w-6xl mx-auto flex flex-col">
                <div className="mb-16 max-w-xl">
                    <h2 className="section-heading pf-mono text-3xl sm:text-4xl font-bold text-[#1B1D1F] dark:text-[#ECEAE2] tracking-tight">
                        Projects
                    </h2>
                    <p className="pf-sans text-base text-[#6B6F76] mt-3 leading-relaxed">
                        Full stack AI powered Projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            url={project.dep}
                            title={project.title}
                            description={project.desc}
                            icon={project.icon}
                            gitRepo={project.gitRepo}
                        />
                    ))}
                </div>

                {showBtn && (
                    <button
                        onClick={() => navigate("/projects")}
                        className="group pf-sans inline-flex items-center gap-1.5 text-sm font-medium text-[#1B1D1F] dark:text-[#ECEAE2] self-center mt-14"
                    >
                        <span className="border-b border-[#1B1D1F] dark:border-[#ECEAE2] group-hover:border-[#D98F2B] group-hover:text-[#D98F2B] transition-colors duration-150">
                            View all projects
                        </span>
                    </button>
                )}
            </div>
        </section>
    );
};

export default Projects;
