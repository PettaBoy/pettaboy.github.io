import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="bar">
            <NavLink to="/" className="bar-item">Home</NavLink>
            <NavLink to="/virtualmusickeyboard" className="bar-item">VirtualMusicKeyboard</NavLink>
            <NavLink to="/cymaticssimulator" className="bar-item">CymaticsSimulator</NavLink>
            <NavLink to="/lyrics" className="bar-item">Lyrics</NavLink>
        </nav>
    );
}

export default Navbar;