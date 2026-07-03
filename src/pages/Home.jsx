import Hero from "../components/Hero.jsx";
import Projects from "../components/Projects.jsx";
import TechStack from "../components/TechStack.jsx";
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
