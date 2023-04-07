import { useState, useEffect } from 'react';
import { Item } from './Item'
import cardapio from './itens.json'

interface Props {
    busca: string;
    filtro: number;
    ordenador: string;
}

export function Itens({ busca, filtro, ordenador }: Props) {
    const [lista, setLista] = useState(cardapio);

    function ordenar(lista: typeof cardapio): typeof cardapio {
        switch(ordenador) {
            case 'porcao':
                console.log(lista.sort((a, b) => a.size > b.size ? 1 : -1))
                return lista.sort((a, b) => a.size > b.size ? 1 : -1)
            case 'qtd_pessoas':
                return lista.sort((a, b) => a.serving > b.serving ? 1 : -1)
            case 'preco':
                return lista.sort((a, b) => a.price > b.price ? 1 : -1)
            default:
                return lista
        }
    }

    useEffect(() => {

        if (filtro !== null) {
            setLista(cardapio.filter(item => {
                return item.category.id === filtro
            }))
        } else {
            setLista(cardapio)
        }

        if (busca !== '') {
            setLista(lista.filter(item => {
                if (item.description.toLowerCase().includes(busca.toLowerCase()) || item.title.toLowerCase().includes(busca.toLowerCase())) {
                    return item
                }
            }))
        } else if (filtro === null) {
            setLista(cardapio)
        }

        if (ordenador !== '') {
            setLista(ordenar(lista))
        } else {
            setLista(prevValue => { return prevValue})
        }
        
    }, [filtro, busca, ordenador])

    return (
        <div>
            {lista.map(item => {
                return (<Item key={item.id} {...item} />)
            })}
        </div>
    )
}