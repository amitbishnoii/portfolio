const TechStack = () => {
    const techStack = [
        {
            category: "Languages",
            icon: "🌐",
            skills: [
                { title: "HTML5" },
                { title: "CSS3" },
                { title: "JavaScript" },
                { title: "TypeScript" },
                { title: "SQL" },
            ],
        },
        {
            category: "Frontend",
            icon: "🎨",
            skills: [
                { title: "React" },
                { title: "Next.js" },
            ],
        },
        {
            category: "Backend",
            icon: "⚙️",
            skills: [
                { title: "Node.js" },
                { title: "Express.js" },
            ],
        },
        {
            category: "Databases",
            icon: "🗄️",
            skills: [
                { title: "MongoDB" },
                { title: "PostgreSQL" },
                { title: "Prisma" },
            ],
        },
        {
            category: "Authentication",
            icon: "🔐",
            skills: [
                { title: "JWT" },
                { title: "OAuth 2.0" },
            ],
        },
        {
            category: "Tools",
            icon: "🛠️",
            skills: [
                { title: "Git" },
                { title: "GitHub" },
                { title: "Docker" },
                { title: "Postman" },
            ],
        },
    ];

    return (
        <section className="py-20 px-4 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Skills
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Everything you need to build amazing products, shipped
                        faster than ever before.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techStack.map((skill, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-gray-50 dark:bg-zinc-900 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="text-4xl mb-4">{skill.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                {skill.category}
                            </h3>
                            {skill.skills.map((s) => {
                                return (
                                    <p
                                        key={s.title}
                                        className="text-gray-600 dark:text-gray-400 leading-relaxed"
                                    >
                                        {s.title}
                                    </p>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
