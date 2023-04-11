import styles from './ordenador.module.scss';
import opcoes from './opcoes.json';
import {useState} from 'react';
import classNames from 'classnames';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md';
import { Props } from 'Interfaces/PropsOrdenador';

export default function Ordenador({ordenador, setOrdenador}: Props) {

  const [aberto, setAberto] = useState<boolean>(false);
  const ordenador_options = classNames({
    [styles.ordenador__options]: true, 
    [styles['ordenador__options--ativo']]: aberto
  });

  return (
    <button className={classNames({[styles.ordenador]: true, [styles['ordenador--ativo']]: ordenador !== ''})} onClick={() => {setAberto((prevValue) => {return !prevValue;});}} onBlur={() => {setAberto(false);}}>
      <span>Ordenar por {ordenador}</span>
      {aberto ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}
      <div className={ordenador_options}>
        {opcoes.map(opcao => {
          return (
            <div key={opcao.value} className={styles.ordenador__option} onClick={() => {setOrdenador(opcao.value);}}>
              {opcao.nome}
            </div>
          );
        })}
      </div>
    </button>
  );
}
