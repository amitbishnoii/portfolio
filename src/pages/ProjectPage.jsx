import {projects} from "../data/projects.js";
import Projects from "../components/Projects.jsx";

const ProjectPage = () => {
    return <Projects projects={projects} />;
};

export default ProjectPage;
