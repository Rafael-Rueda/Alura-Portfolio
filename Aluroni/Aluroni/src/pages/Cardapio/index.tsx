import styles from './cardapio.module.scss';
import stylesTema from 'Styles/tema.module.scss';

import Buscador from './Buscador';
import {useState} from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import { Itens } from './Itens';

export default function Cardapio() {
  const [busca, setBusca] = useState< string >('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<string>('');
  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardapio</h3>
      <Buscador
        busca={busca}
        setBusca={setBusca}
      />

      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro}/>
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
      </div>

      <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
    </section>
  );
}
