import "./ProjectCard.css"

function ProjectCard(object){
    return(
    <div className="card cardStyle text-center">
        <h5 className="card-title">{object.projectName}</h5>
        <hr></hr>
        {/* process.env.public_url is used to treat the public folder like an environmental variable, thanks to ASKbcs for the help */}
        <img src={process.env.PUBLIC_URL + object.screenshot} className="card-img-top" alt={object.projectName}/>
        <div className="card-body d-flex justify-content-center">
            <a href={object.GitHub} className="btn btn-primary mt-auto" target="_blank" rel="noreferrer">GitHub</a>
            <a href={object.DeployedLink} className="btn btn-primary mt-auto" target="_blank" rel="noreferrer">Website</a>
        </div>
    </div>    
    )
}


export default ProjectCard;