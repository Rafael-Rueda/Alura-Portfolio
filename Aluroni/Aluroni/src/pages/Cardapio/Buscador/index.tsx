import styles from './buscador.module.scss';
import { Props } from 'Interfaces/Props';
import { CgSearch } from 'react-icons/cg';

export default function Buscador({busca, setBusca}: Props) {
  return (
    <div className={styles.buscador}>
      <input 
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder='Buscar'
      />
      <CgSearch 
        size={20}
        color='#4C4D5E'
      />
    </div>
  );
}
