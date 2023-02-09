import styles from './inicial.module.scss'
import { Link } from 'react-router-dom'

import { UsuarioContext } from "../../common/Usuario.jsx"
import { useContext } from 'react'

export function PaginaInicial() {
      
  const {valor, setValor, nome, setNome} = useContext(UsuarioContext)

  function decimais(event) {
    const $valor = event.target.value;
    if (event.target.value && $valor.indexOf('.') === -1) {
      setValor($valor + '.00')
    }
    if ($valor.split('.').length > 1) {
      if ($valor.split('.')[1].length === 1) {
        setValor($valor + '0')
      }
      if ($valor.split('.')[1].length > 2) {
        setValor(valor => Math.floor(valor) + '.00')
      }
    }
    if (!event.target.value) {
      setValor('0.00')
    }
  }

  return (
        <div className={styles.centro}>
          <input id="nome" type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
          <input type="number" placeholder="R$" onBlur={(e) => decimais(e)} value={valor} onChange={(e) => setValor(e.target.value)} />
          <Link to="/feira"><button disabled={nome.length < 3 || Number(valor) == 0}>Avançar</button></Link>
        </div>
  )


}
