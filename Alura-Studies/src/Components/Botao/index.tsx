import styles from './botao.module.scss'

function Button({children, onClick, type} : {[key: string]: any}) {
  return (
      <button type={type} onClick={(e: React.MouseEvent<HTMLElement>) => {e.preventDefault(); onClick()}} className={styles.button}>
        {children}
      </button>
  )
}

export default Button;