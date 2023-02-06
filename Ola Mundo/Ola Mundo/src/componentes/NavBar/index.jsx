import { Link, useLocation, NavLink } from 'react-router-dom'
import styles from './styles/navbar.module.css'

export function NavBar() {

    const loc = useLocation()

    return (
        <nav>
            <ul className={styles.navegacao}>
                <li>
                    <Link className={loc.pathname === '/' ? `${styles.link} ${styles.atual}` : `${styles.link}`} to="/">Início</Link>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? `${styles.link} ${styles.atual}` : styles.link} to="/sobremim">Sobre Mim</NavLink>
                </li>
            </ul>
        </nav>
    )
}
