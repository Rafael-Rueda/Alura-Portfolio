import { NavItem } from './NavItem'
import styles from './styles/nav.module.scss'

// Imagens
    import img1 from '../../../../Images/inicio.svg'
    import img2 from '../../../../Images/maiscurtidas.svg'
    import img3 from '../../../../Images/maisvistos.svg'
    import img4 from '../../../../Images/novas.svg'
    import img5 from '../../../../Images/surpreendame.svg'

// Hooks
    import { useState } from 'react'


export function Nav() {

    const [selecionado, setSelecionado] = useState({s1: true});


    return (
        <nav>
            <ul className={styles.ul}>
                <NavItem 
                id={1}
                src={img1}
                value="Início" 
                selected={selecionado.s1}
                setSelecionado={setSelecionado}
                />

                <NavItem
                id={2}
                src={img2} 
                value="Mais curtidas" 
                selected={selecionado.s2}
                setSelecionado={setSelecionado}
                />

                <NavItem
                id={3}
                src={img3} 
                value="Mais vistas" 
                selected={selecionado.s3}
                setSelecionado={setSelecionado}
                />

                <NavItem
                id={4}
                src={img4} 
                value="Novas" 
                selected={selecionado.s4}
                setSelecionado={setSelecionado}
                />
                
                <NavItem
                id={5}
                src={img5} 
                value="Surpreenda-me" 
                selected={selecionado.s5}
                setSelecionado={setSelecionado}
                />
            </ul>
        </nav>
    )
}