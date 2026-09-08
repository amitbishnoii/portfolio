import Hero from "../components/Hero.js";
import Projects from "../components/Projects.js";
import TechStack from "../components/TechStack.js";
import { projects } from "../data/projects.js";

const Home = () => {
    return (
        <>
            <Hero />
            <TechStack />
            <Projects projects={projects.slice(0, 2)} showBtn={true} />
        </>
    );
};

export default Home;
