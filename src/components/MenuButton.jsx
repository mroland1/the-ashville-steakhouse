import "./MenuButton.css"
import menu from "../assets/the-ashville-steakhouse-menu.pdf"

export default function MenuButton() {
    return (
        <button id="menuButton"><a href={menu} target="_blank" rel="noreferrer noopener">Check out our menu Here!</a></button>
    )
}