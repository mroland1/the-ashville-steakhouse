import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import "./Sidebar.css";

export default function Sidebar() {
    const navigate = useNavigate();

    function hideSidebarAndNavigate(path) {
        let sidebar = document.getElementById("sidebar");
        sidebar.classList.remove("active"); 

        setTimeout(() => {
            navigate(path); 
        }, 100);
    }

    return (
        <ul id="sidebar">
            <li onClick={() => hideSidebarAndNavigate("#")}>
                <Link to="#">
                    <i className="fa-solid fa-x"></i>
                </Link>
            </li>
            <li onClick={() => hideSidebarAndNavigate("/home")}>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li onClick={() => hideSidebarAndNavigate("/about")}>
                <NavLink to="/about">About</NavLink>
            </li>
            <li onClick={() => hideSidebarAndNavigate("/gallery")}>
                <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li onClick={() => hideSidebarAndNavigate("/contact")}>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <ul id="social">
                <li><Link to="https://www.instagram.com/theashvillesteakhouse/" target="_blank"><i className="fa-brands fa-instagram"></i></Link></li>
                <li><Link to="https://www.facebook.com/theashvillebristol" target="_blank"><i className="fa-brands fa-facebook"></i></Link></li>
                <li><Link onClick={() => window.location = "tel: +44 7864 8277756"}><i className="fa-solid fa-phone"></i></Link></li>
                <li><Link onClick={() => window.location = "mailto: info@theashvillesteakhouse.co.uk"}><i className="fa-regular fa-envelope"></i></Link></li>
            </ul>
        </ul>
    );
}
