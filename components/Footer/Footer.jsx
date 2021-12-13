import Logo from '../Logo/Logo';
import SocialMedia from '../SocialMedia/SocialMedia';

import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <p className={styles.content}>
        All rights reserved © Equalizer 2021 <br /> Have any problems? Contact
        us via social media or <br /> email us at{' '}
        <span className={styles.bold}>equalizer@example.com</span>
      </p>
      <SocialMedia />
    </footer>
  );
}
7;
