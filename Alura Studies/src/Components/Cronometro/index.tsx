import styles from './cronometro.module.scss'

function Cronometro() {
  return (
    <div>
      <p className={styles.p}>
        <div>
        <span className={styles.span}>0</span>
        <span className={styles.span}>0</span>
        <span className={styles.span}>:</span>
        <span className={styles.span}>0</span>
        <span className={styles.span}>0</span>
        <span className={styles.span}>:</span>
        <span className={styles.span}>0</span>
        <span className={styles.span}>0</span>
        </div>
      </p>
    </div>
  )
}

export default Cronometro;
