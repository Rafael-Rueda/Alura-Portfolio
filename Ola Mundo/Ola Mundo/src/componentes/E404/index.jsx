import styles from './E404.module.css'
import erro404 from '../../assets/erro_404.png'
export function E404() {
  return (
    <div>
      <div className={styles.conteudoContainer}>
          <span className={styles.texto404}>404</span>

          <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>

          <p className={styles.paragrafo}>Tem certeza de que era isso que você estava procurando ?</p>
          <p className={styles.paragrafo}>Aguarde uns instantes e recarregue a página, ou volte para a página principal.</p>
          <div className={styles.botaoContainer}>
            <button>Voltar</button>
          </div>
          <img className={styles.imagemCachorro} src={erro404}/>
      </div>
    </div>
  )
}
