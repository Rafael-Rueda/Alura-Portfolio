import { Prato } from 'types/Prato';
import styles from './tagsprato.module.scss';
import classNames from 'classnames';

export default function TagsPrato({category, size, serving, price}: Prato) {
  return (
    <div className={styles.tags}>
      <div className={classNames({[styles.tags__tipo]: true, [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true})}>
        {category.label}
      </div>
      <div className={styles.tags__porcao}>
        {size}g
      </div>
      <div className={styles.tags__qtdpessoas}>
        Serve {serving} pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={styles.tags__valor}>
        R$ {price.toFixed(2)}
      </div>
    </div>
  );
}
