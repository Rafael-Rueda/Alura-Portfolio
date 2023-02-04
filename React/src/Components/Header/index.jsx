// Componentes
    import { Nav } from "./Nav"

// Estilos
    import styles from "./styles/header.module.scss"

// Imagens
    import logo from '../../../Images/logo.png'
    import pesquisa from '../../../Images/lupa.png'
    

export function Header() {

    return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}> 
            <img alt="logo" src={logo}/>
        </div>
        <div className={styles.input_div}>
            <input placeholder="Digite sua busca" className={styles.input} type="text"></input>
            <img alt="icone de pesquisa" src={pesquisa}></img>
        </div>
      </header>
      <Nav />
    </>
    )
  }
