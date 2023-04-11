import { Props } from 'Interfaces/PropsFiltro';
import filtros from './filtros.json';
import styles from './filtros.module.scss';
import classNames from 'classnames';

export default function Filtros({filtro, setFiltro}: Props) {
  function SelecionarFiltro(selecionado: typeof filtros[0]) {
    if (selecionado.id === filtro) {
      return setFiltro(null);
    }
    return setFiltro(selecionado.id);
  }
  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => {
        return <button className={classNames({[styles.filtros__filtro]: true, [styles['filtros__filtro--ativo']]: filtro === opcao.id})} key={opcao.id} onClick={() => {SelecionarFiltro(opcao);}}>{opcao.label}</button>;
      })}
    </div>
  );
}
