import { createContext, useContext, useState } from "react";

export const PagamentoContext = createContext()
PagamentoContext.displayName = "Pagamento"

export const PagamentoProvider = (props) => {
    const tiposPagamento = [{
        nome: 'Boleto',
        juros: 1,
        id: 1
    },
    {
        nome: 'Cartão de crédito',
        juros: 1.3,
        id: 2
    },
    {
        nome: 'PIX',
        juros: 1,
        id: 3
    }]

    const [pagamento, setPagamento] = useState(tiposPagamento[0]);

    return (
        <PagamentoContext.Provider value={{ pagamento, setPagamento, tiposPagamento}}>
            {props.children}
        </PagamentoContext.Provider>
    )

}

export const usePagamentoContext = () => {
    const {pagamento, setPagamento, tiposPagamento} = useContext(PagamentoContext);

    function mudarPagamento(id) {
        setPagamento(tiposPagamento[id - 1])        
    }
    return {mudarPagamento}
}