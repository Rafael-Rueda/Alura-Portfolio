import logo from '../../assets/logo.svg'


import { Outlet, Link } from 'react-router-dom'
import styles from './default.module.scss'
import { useCarrinhoContext } from '../../common/Carrinho'

export function Default() {

    const { quantidadeCarrinho } = useCarrinhoContext()
    
    return (
        <>
        <div className={styles.grid}>
            <img alt="Logotipo" src={logo}></img>
            <Link to="/carrinho"><p>Carrinho {quantidadeCarrinho}</p></Link>
        </div>
        <Outlet />
        </>
    )
}