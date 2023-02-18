import styles from './filme.module.scss'

export function Filme(props) {
  return (
    <div className={styles.video}>
      <iframe src={props.filme.link}></iframe>
    </div>
  )
}
