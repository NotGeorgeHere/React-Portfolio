import projects from "../../projects.json";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import './Projects.css';

function Projects(){
    return (
        <div>
            <h3 className="projectTitle">Check out my projects here:</h3>
        <div className="row d-flex justify-content-center">
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
        </div>
    );
}

export default Projects;