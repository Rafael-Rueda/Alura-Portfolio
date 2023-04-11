import { Props } from 'Interfaces/PropsItem';
import styles from './item.module.scss';
import TagsPrato from 'Components/TagsPrato';
import { Prato } from 'types/Prato';
import { useNavigate } from 'react-router-dom';

export function Item(props: Props) {

  const navigate = useNavigate();

  function redirecionar(prato: Prato) {
    navigate(`/prato/${prato.id}`, {state: {prato}});
  }

  return (
    <div className={styles.item} onClick={() => redirecionar(props)}>
      <div className={styles.item__imagem}>
        <img src={props.photo} alt={props.title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <TagsPrato {...props}/>
      </div>
    </div>
  );
}