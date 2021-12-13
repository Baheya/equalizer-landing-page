import Image from 'next/image';
import { Header } from '../components/Header/Header';
import styles from '../styles/Home.module.css';
import phoneApp from '../public/images/illustration-app.png';
import InfoCard from '../components/InfoCard/InfoCard';
import { Footer } from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContainer}>
        <section className={styles.mainContent}>
          <h1 className={`heading-large ${styles.heading}`}>
            We make your music sound extraordinary.
          </h1>
          <p className={`paragraph-large ${styles.paragraph}`}>
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </p>
        </section>
        <section className={styles.gridContainer}>
          <div className={styles.phoneImageContainer}>
            <Image src={phoneApp} />
          </div>
          <div className={styles.background} />
          <InfoCard />
        </section>
      </main>
      <Footer />
    </div>
  );
}
