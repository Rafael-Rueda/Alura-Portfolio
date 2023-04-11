import { useState, useEffect } from 'react';
import { Item } from './Item';
import cardapio from 'data/itens.json';
import { Cardapio } from 'types/Prato';

interface Props {
    busca: string;
    filtro: number | null;
    ordenador: string;
}

export function Itens({ busca, filtro, ordenador }: Props) {
  const [lista, setLista] = useState(cardapio);

  function ordenar(lista: Cardapio): Cardapio {
    switch(ordenador) {
    case 'porcao':
      return [...lista].sort((a, b) => a.size > b.size ? 1 : -1);
    case 'qtd_pessoas':
      return [...lista].sort((a, b) => a.serving > b.serving ? 1 : -1);
    case 'preco':
      return [...lista].sort((a, b) => a.price > b.price ? 1 : -1);
    case '':
      return [...lista];
    default:
      return [...lista];
    }
  }

  useEffect(() => {

    if (filtro !== null) {
      setLista(cardapio.filter(item => {
        return item.category.id === filtro;
      }));
    } else if(ordenador === null && busca === ''){
      setLista(cardapio);
    }
    
    if (busca !== '') {
      setLista(lista.filter(item => {
        if (item.description.toLowerCase().includes(busca.toLowerCase()) || item.title.toLowerCase().includes(busca.toLowerCase())) {
          return item;
        }
      }));
    } else if (filtro === null && ordenador === null) {
      setLista(cardapio);
    }
    
    if (ordenador !== '') {
      setLista(ordenar(lista));
    } else if(filtro === null && busca === ''){
      setLista(cardapio);
    }
    
  }, [filtro, busca, ordenador]);
  
  return (
    <div>
      {lista.map(item => {
        return (<Item key={item.id} {...item} />);
      })}
    </div>
  );
}