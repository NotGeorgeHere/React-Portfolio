import { NavLink, Link} from 'react-router-dom';
import "./Header.css"

function Header(){
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
    <Link className="navbar-brand" to='/React-Portfolio'>React Portfolio</Link>
    
    <div className="expand navbar-expand" id="navbarSupportedContent">
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