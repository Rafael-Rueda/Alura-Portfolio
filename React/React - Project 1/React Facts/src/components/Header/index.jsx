import Navbar from "./Navbar"

export default function Header(props) {
    return (
        <header>
            <Navbar darkMode={props.darkMode} setDarkMode={props.setDarkMode}/>
        </header>
    )
}