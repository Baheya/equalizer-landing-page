import { Logo } from '../Logo/Logo';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.pageHeader}>
      <Logo />
    </header>
  );
}
