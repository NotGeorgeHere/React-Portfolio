import './Home.css';
import avatar from '../../images/img_avatar.png';

function Home(){
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">George Ryder - React Portfolio</h1>
                    <p className="lead">Front-end website developer, check out my Portfolio!</p>
                    <img src={avatar} alt="Portfolio avatar" className='avatar'></img>
                </div>
            </div>
            <div className='aboutSection'>
                <h3 className='AboutMe'>About Me</h3>
                <p className='aboutMeText'>In 2021 I graduated from the University of East Anglia (UEA) with a degree in History and achieved a 2:1. Since then, I have worked for Norfolk County Council and have recently finished a front-end web development course through the UK government's Skills for Life Program. Therefore, I am looking for an appropriate role that suits my skills.
                </p>
                <p className='aboutMeText'>Throughout previous employment, volunteering, and my degree I have developed key skills to help me excel under a variety of situations. I have shown an aptitude to work well under pressure, highlighted by my ability to perform well during busy retail periods. Additionally, I am a very social person and developed good working relationships whilst also developing excellent communication skills with customers and key stakeholders. I am looking for a challenging, yet rewarding, work environment with lots to do. I am also looking for a workplace in which I have the ability to thrive and develop personally with the skills I have acquired through previous employment, my degree and the Skills for Life Front-end web development course.</p>

                <h5>Feel free to contact me!</h5>
                <br></br>
                <hr></hr>
            </div>

            <div className="skillsSection">
                <h3 className="skills">Skills</h3>
                <div className='skillsTextDiv'>
                    <ul className='skillsText'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                    </ul>
                    <ul className='skillsText'>
                        <li>React.js</li>
                        <li>ES6</li>
                        <li>Node.js + NPM package manager</li>
                        <li>Git + GitHub</li>
                    </ul>
                    <ul className='skillsText'>
                        <li>BootStrap</li>
                        <li>APIs</li>
                        <li>Deployment (GitHub pages + Netlify)</li>
                        <li>DOM manipulation + JSON</li>
                    </ul>
                </div>
            </div>
        </div>      
    );
}

export default Home;