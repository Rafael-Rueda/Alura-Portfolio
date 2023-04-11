import styles from './notfound.module.scss';
import stylesTema from 'Styles/tema.module.scss';
import {ReactComponent as Notfoundsvg} from 'assets/not_found.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={classNames({[styles.container]: true, [stylesTema.container]: true})}>
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <Notfoundsvg/>
    </div>
    
  );
}