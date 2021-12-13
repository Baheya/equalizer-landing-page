import Image from 'next/image';

import logo from '../../public/logo.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.pageHeader}>
      <Image src={logo} />
    </header>
  );
}
