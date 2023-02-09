import { UsuarioContext } from "../../common/Usuario.jsx"
import { useContext } from 'react'

import img1 from '../../../public/assets/abobora.png'
import img2 from '../../../public/assets/batata.png'
import img3 from '../../../public/assets/brocolis.png'
import img4 from '../../../public/assets/pepino.png'
import img5 from '../../../public/assets/tomate.png'

import styles from './compras.module.scss'
import { Produto } from './Produto'



export function Compras() {

    const {valor, nome} = useContext(UsuarioContext)
    

    return (
        <div className={styles.grid2}>
            <h1>Olá {nome} !</h1>
            <h2>Saldo: R$ {valor}</h2>
            <ul>
                <Produto id={1} valor={10} img={img1} produto="Abóbora" />
                <Produto id={2} valor={2} img={img2} produto="Batata" />
                <Produto id={3} valor={0.5} img={img3} produto="Brócolis" />
                <Produto id={4} valor={2} img={img4} produto="Pepino" />
                <Produto id={5} valor={3} img={img5} produto="Tomate" />
            </ul>
        </div>
    )
}
