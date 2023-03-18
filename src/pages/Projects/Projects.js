import projects from "../../projects.json";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import './Projects.css';

function Projects(){
    return (
        <div className="row d-flex justify-content-center">
            <h3 className="projectTitle">Check out my projects:</h3>
            {projects.map((project) => (
                <ProjectCard 
                    id={project.id}
                    projectName={project.projectName}
                    screenshot={project.screenshot}
                    GitHub={project.GitHub}
                    DeployedLink={project.DeployedLink}
                />
            ))}
        </div>
    );
}

export default Projects;