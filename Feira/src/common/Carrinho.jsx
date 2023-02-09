import { createContext, useContext, useEffect, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho'

export const CarrinhoProvider = (props) => {

    const [carrinho, setCarrinho] = useState([]);
    const [quantidadeCarrinho, setQuantidadeC] = useState(0)
    const [valorCarrinho, setValorC] = useState(0)

    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho, quantidadeCarrinho, setQuantidadeC, valorCarrinho, setValorC }}>
            {props.children}
        </CarrinhoContext.Provider>
    )
}

export function useCarrinhoContext() {
    const { carrinho, setCarrinho, quantidadeCarrinho, setQuantidadeC, valorCarrinho, setValorC } = useContext(CarrinhoContext);

    function adicionar(NovoItem) {
        if (!carrinho.some(item => { return item.id == NovoItem.id })) {
            setCarrinho(prevValue => {
                return [...prevValue, NovoItem]
            })
        } else {

            setCarrinho(prevValue => {
                const valor = prevValue.map((item) => {
                    if (item.id == NovoItem.id) {
                        item.quantidade += 1
                    }
                    return item
                })
                return valor;
            })

        }

    }

    function remover(Id) {
        if (carrinho.some(item => item.id == Id)) {
            setCarrinho(prevValue => {
                if (prevValue.filter(item => item.id == Id)[0].quantidade === 1) {
                    return [...prevValue].filter(item => item.id != Id)
                }
                else {
                    return prevValue.map(item => {
                        if (item.id == Id) {
                            item.quantidade -= 1
                        }
                        return item
                    })
                }
            })
        }

    }

    useEffect(() => {
        const { valor, quantidade } = carrinho.reduce((cont, element) =>
            (
                {
                    valor: cont.valor + (element.valor * element.quantidade),
                    quantidade: cont.quantidade + element.quantidade
                }
            ), { valor: 0, quantidade: 0 } )

        setQuantidadeC(quantidade)
        setValorC(valor.toFixed(2))
        console.log(valor)
    }, [carrinho, quantidadeCarrinho])

    return { carrinho, setCarrinho, quantidadeCarrinho, valorCarrinho, adicionar, remover}
}