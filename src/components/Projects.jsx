import Card from "./Card.jsx";
import { useNavigate } from "react-router-dom";

const Projects = ({ projects, showBtn = false }) => {
    const navigate = useNavigate();

    return (
        <section className="py-20 px-4 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto flex flex-col">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 lg:ml-96">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            url={project.dep}
                            title={project.title}
                            description={project.desc}
                            icon={project.icon}
                        />
                    ))}
                </div>
                {showBtn && (
                    <button
                        className="text-white bg-gray-900 hover:bg-black font-medium rounded-md px-5 py-2 border border-gray-700 transition-colors self-center mt-5"
                        onClick={() => navigate("/projects")}
                    >
                        View all Projects
                    </button>
                )}
            </div>
        </section>
    );
};

export default Projects;
