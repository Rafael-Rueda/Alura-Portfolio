import styles from './banner.module.css'

export function Banner() {
    return (
        <header>
            <div className={styles.banner}>
                <div>
                    <h1 className={styles.titulo}>Olá Mundo !</h1>
                    <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)</p>
                </div>
                <div className={styles.imagens}>
                    <img className={styles.circuloColorido} src="../../../src/assets/circulo_colorido.png" alt="circulo colorido no banner"></img>
                    <img className={styles.minhaFoto} src="../../../src/assets/minha_foto.png" alt="foto do antonio no banner"></img>
                </div>

            </div>
        </header>
    )
}
