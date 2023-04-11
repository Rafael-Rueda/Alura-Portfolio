import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {

  const rotas = [{
    label: 'Inicio',
    to: '/',
    id: 1
  }, 
  {
    label: 'Cardápio',
    to: '/cardapio',
    id: 2
  },
  {
    label: 'Sobre',
    to: '/sobre',
    id: 3
  }];

  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {rotas.map(rota => {
          return (
            <li key={rota.id} className={styles.menu__link}><Link to={rota.to}>{rota.label}</Link></li>
          );
        })}
      </ul>
    </nav>
  );
}
