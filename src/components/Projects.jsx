import Card from "./Card.jsx";
import chat from "../assets/chat.svg";
import interviewer from "../assets/interviewer.svg"

const Projects = () => {
    const projects = [
        {
            title: "AI-Powered Chat Application",
            desc: "A realtime Chat App built using Socket.io + Node.js in backend and React in Frontend with AI features such as message summarization, AI reply and seperate AI Chat",
            icon: chat,
            dep: "example.com",
        },
        {
            title: "AI Interviewer",
            desc: "Built an AI Interviewer that asks questions based on Role you applied for and provides real-time feedback.",
            icon: interviewer,
            dep: "example.com",
        },
        {
            title: "SaaS Application",
            desc: "Built an end to end SaaS Application",
            dep: "example.com",
        }
    ];

    return (
        <section className="py-20 px-4 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </div>
        </section>
    );
};

export default Projects;
