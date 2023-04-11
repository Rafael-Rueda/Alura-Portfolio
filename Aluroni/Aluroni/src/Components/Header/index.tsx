import { Outlet } from 'react-router-dom';
import styles from './header.module.scss';
import stylesTema from 'Styles/tema.module.scss';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          <p>A casa do codigo e da massa</p>
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
      </div>
    </>
  );
}