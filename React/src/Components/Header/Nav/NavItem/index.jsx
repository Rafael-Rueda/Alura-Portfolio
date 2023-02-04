import styles from './styles/navitem.module.scss'

export function NavItem(props) {
    function mudar(id) {
        props.setSelecionado(prevValue=> {
            return {['s' + id]: true }
        })
    }
    return (
        <li onClick={() => mudar(props.id)} className={styles.item}>
            <img alt={"imagem " + props.value} style={{fill: 'red'}} src={props.src}></img>
            <p className={props.selected ? styles.selected : ''}>{props.value}</p>
        </li>
    )
}