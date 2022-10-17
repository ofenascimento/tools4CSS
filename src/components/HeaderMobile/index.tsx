import Link from 'next/link';
import styles from './styles.module.scss';

export default function HeaderApp() {
  return (
    <header className={styles.header}>
      <a className={styles.logo}>
        <h1>Tools4CSS</h1>
      </a>
      <input className={styles.menuBtn} type='checkbox' id='menu-btn' />
      <label className={styles.menuIcon} htmlFor='menu-btn'>
        <span className={styles.navicon} />
      </label>
      <ul className={styles.menu}>
        <li>
          <Link href='/background-gradient'>Background Gradient</Link>
        </li>
        <li>
          <Link href='/text-gradient'>Text Gradient</Link>
        </li>
        <li>
          <Link href='/claymorphism'>Claymorphism</Link>
        </li>
        <li>
          <Link href='/neumorphism'>Neumorphism</Link>
        </li>
        <li>
          <Link href='/glassmorphism'>Glassmorphism</Link>
        </li>
      </ul>
    </header>
  );
}
