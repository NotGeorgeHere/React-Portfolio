import { NavLink, Link} from 'react-router-dom';

function Header(){
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to='/'>React Portfolio</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

        <li className="nav-item">
            <NavLink 
            to='/React-Portfolio' 
            end 
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Home Page</NavLink>
        </li>

        <li className="nav-item">
            <NavLink 
            to='/projects' 
            end 
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Projects</NavLink>
        </li>

        <li className="nav-item">
            <NavLink 
            to='/contact' 
            end 
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }>Contact Me</NavLink>
        </li>
        </ul>
    </div>
    </nav>  
    );
}

export default Header;