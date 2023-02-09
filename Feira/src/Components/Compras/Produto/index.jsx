import styles from './produto.module.scss'

import { CarrinhoContext, useCarrinhoContext } from "../../../common/Carrinho.jsx"
import { useContext } from 'react'

export function Produto({ img, produto, valor, id }) {

    const { carrinho, setCarrinho, adicionar, remover } = useCarrinhoContext()

    const Item = carrinho.find(item => {
        return item.id == id
    })

    return (
        <li>
            <div className={styles.flex}>
                <img alt="Produto da feira" src={img}></img>
                <p>{produto}</p>
            </div>
            <button disabled={!Item} onClick={() => remover(id)}>-</button>
            <p>{Item?.quantidade || 0}</p>
            <button onClick={() => adicionar({ nome: produto, valor: valor, img: img, id: id, quantidade: 1 })}>
                +
            </button>
        </li>
    )
}