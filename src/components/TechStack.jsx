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
            skills: [{ title: "React" }, { title: "Next.js" }],
        },
        {
            category: "Backend",
            icon: "⚙️",
            skills: [{ title: "Node.js" }, { title: "Express.js" }],
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
            skills: [{ title: "JWT" }, { title: "OAuth 2.0" }],
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
        <section className="section-block py-24 px-6 sm:px-8 bg-[#F2F1EC] dark:bg-[#14161A]">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 max-w-xl">
                    <h2 className="section-heading pf-mono text-3xl sm:text-4xl font-bold text-[#1B1D1F] dark:text-[#ECEAE2] tracking-tight">
                        Skills
                    </h2>
                    <p className="pf-sans text-base text-[#6B6F76] mt-3 leading-relaxed">
                        The languages, frameworks, and tools I build with.
                    </p>
                </div>

                <div className="skill-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D8D6CE] dark:bg-[#2A2C30] border border-[#D8D6CE] dark:border-[#2A2C30]">
                    {techStack.map((group, index) => (
                        <div
                            key={index}
                            className="skill-cell p-7 bg-[#F2F1EC] dark:bg-[#14161A]"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-base grayscale opacity-70">
                                    {group.icon}
                                </span>
                                <h3 className="pf-mono text-sm font-bold text-[#1B1D1F] dark:text-[#ECEAE2]">
                                    {group.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((s) => (
                                    <span
                                        key={s.title}
                                        className="pf-mono text-xs px-2.5 py-1 border border-[#D8D6CE] dark:border-[#2A2C30] text-[#4A4D52] dark:text-[#B7B8B6] rounded-sm"
                                    >
                                        {s.title}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
