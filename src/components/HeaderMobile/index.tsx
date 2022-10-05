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
          <Link href='/tools/claymorphism'>Claymorphism</Link>
        </li>
        <li>
          <Link href='/tools/neumorphism'>Neumorphism</Link>
        </li>
        <li>
          <Link href='/tools/glassmorphism'>Glassmorphism</Link>
        </li>
        <li>
          <Link href='/tools/text-gradient'>Text Gradient</Link>
        </li>
        <li>
          <Link href='/tools/background-gradient'>Background Gradient</Link>
        </li>
      </ul>
    </header>
  );
}
