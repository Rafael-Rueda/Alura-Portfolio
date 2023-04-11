import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo/>
    </footer>
  );
}