import { Button } from '../Button/Button';

import styles from './InfoCard.module.css';

export default function InfoCard() {
  return (
    <div className={styles.cardWrapper}>
      <h2 className="heading-small">Premium EQ</h2>
      <p className="paragraph-small">
        Get expert-level control with a robust equalizer, volume mixer, and
        spatial audio. Take your listening experience to a whole new level and
        access all our incredible features!
      </p>
      <div className={styles.subscriptionContainer}>
        <span className={styles.subscriptionPrice}>$4</span>/ month
      </div>
      <div className="spacer-y-4"></div>
      <Button type="ios" variant="dark" block />
      <div className="spacer-y-2"></div>
      <Button type="android" variant="light" block />
    </div>
  );
}
