import "./ProjectCard.css"

function ProjectCard(object){
    return(
    <div className="card cardStyle">
        <img src={object.screenshot} className="card-img-top" alt={object.projectName}/>
        <div className="card-body">
            <h5 className="card-title">{object.projectName}</h5>
            <a href={object.GitHub} className="btn btn-primary">GitHub</a>
            <a href={object.DeployedLink} className="btn btn-primary">Website</a>
        </div>
    </div>    
    )
}


export default ProjectCard;