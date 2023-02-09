import { useContext } from "react";
import { useCarrinhoContext } from "../../../common/Carrinho";
import { PagamentoContext, usePagamentoContext } from "../../../common/Pagamento";

export function Pagamento() {

    const { pagamento, tiposPagamento } = useContext(PagamentoContext);
    const { mudarPagamento } = usePagamentoContext();
    const { valorCarrinho } = useCarrinhoContext();

    return (
        <div style={{ display: 'grid', width: '20%' }}>
        <h3>Total a pagar: R$ {valorCarrinho}</h3>
            <label htmlFor="pagamento">Pagamento</label>
            <select onChange={(e) => {mudarPagamento(e.target.value)}} value={pagamento.id} width="200px" id="pagamento">
                {tiposPagamento.map(metodo => {
                    return (
                        <option key={metodo.id} value={metodo.id}>{tiposPagamento[metodo.id -1].nome}</option>
                    )
                })}
            </select>
        </div>
    )
}
