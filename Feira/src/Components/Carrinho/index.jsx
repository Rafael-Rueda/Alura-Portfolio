import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CarrinhoContext } from "../../common/Carrinho";
import { Produto } from "../Compras/Produto";
import styles from "./carrinho.module.scss"
import { Pagamento } from "./Pagamento";

export function Carrinho() {
    const { carrinho } = useContext(CarrinhoContext);
    const navigate = useNavigate();

    return (
        <>
        <div className={styles.grid}>
        <button onClick={() => navigate(-1)}>Voltar</button>

        {carrinho.map(item => {
            return (
            <ul key={item.id}>
                <Produto {...item} produto={item.nome} />
            </ul>
            )
        })}

        <Pagamento />

        </div>
        </>
    )
}
