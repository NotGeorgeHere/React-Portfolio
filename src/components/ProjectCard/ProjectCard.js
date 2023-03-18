import "./ProjectCard.css"

function ProjectCard(object){
    return(
    <div className="card cardStyle text-center">
        <h5 className="card-title">{object.projectName}</h5>
        <hr></hr>
        <img src={object.screenshot} className="card-img-top" alt={object.projectName}/>
        <div className="card-body d-flex justify-content-center">
            <a href={object.GitHub} className="btn btn-primary mt-auto" target="_blank" rel="noreferrer">GitHub</a>
            <a href={object.DeployedLink} className="btn btn-primary mt-auto" target="_blank" rel="noreferrer">Website</a>
        </div>
    </div>    
    )
}


export default ProjectCard;