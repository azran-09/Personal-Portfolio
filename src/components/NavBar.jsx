import { NavLink } from 'react-router-dom';

function NavBar({ toggleTheme, currentTheme }) {
    const getLink = ({ isActive }) => 
        isActive ? 'cta active-link' : 'cta';
    return(
        <header> 
            <div className="nav-container">
            <nav>
                <NavLink to="/" type="button" className={getLink}> Home </NavLink>
                <NavLink to="/about" type="button" className={getLink}> About </NavLink>               
                <NavLink to="/contact" type="button" className={getLink}> Contact </NavLink>
                <NavLink to="/projects" type="button" className={getLink}> Projects </NavLink>
            </nav>
            <button onClick={toggleTheme} className="theme-toggle-button">                
                {currentTheme === 'dark' ? '🌙' : '☀️'} </button>
                </div>
        </header>
    );
}
export default NavBar;