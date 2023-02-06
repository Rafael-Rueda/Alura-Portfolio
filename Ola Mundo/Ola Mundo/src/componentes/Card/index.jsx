import styles from './card.module.css'
export function Card(props) {
    return (
        <div className={styles.post}>
            <img className={styles.capa} src={`../../../src/assets/posts/${props.card.id}/capa.png`} />
            <p>{props.card.titulo}</p>
        </div>
    )
}