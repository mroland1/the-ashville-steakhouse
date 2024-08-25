import { NavLink, Link, useLocation } from "react-router-dom"
import "./Navbar.css"
import Sidebar from "./Sidebar"

export default function Navbar() {
    const location = useLocation();

    function showSidebar() {
        let sidebar = document.getElementById("sidebar");
        sidebar.classList.add("active"); // Az active osztály hozzáadása
    }

    return (
        <nav>
            <Sidebar />

            <ul className="navbar">
                <li>
                    <Link to="/home">
                        <h2 className={location.pathname === "/home" ? "hideOnHomePage" : ""}>
                            The Ashville Steakhouse
                        </h2>
                    </Link>
                </li>
                <li className="hideOnMobile"><NavLink to="/home">Home</NavLink></li>
                <li className="hideOnMobile"><NavLink to="/about">About</NavLink></li>
                <li className="hideOnMobile"><NavLink to="/gallery">Gallery</NavLink></li>
                <li className="hideOnMobile"><NavLink to="/contact">Contact</NavLink></li>
                <li onClick={showSidebar} id="menuIcon">
                    <Link to="#"><i className="fa-solid fa-bars"></i></Link>
                </li>
            </ul>
        </nav>
    );
}
