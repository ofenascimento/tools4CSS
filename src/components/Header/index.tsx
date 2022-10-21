import Image from 'next/image';
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
          <Link href='#preview'>How it works?</Link>
        </li>
        <li>
          <Link href='/tools/text-gradient'>Tools</Link>
        </li>

        <li>
          <Link href='mailto:hi@tools4css.com'>Contact</Link>
        </li>
      </ul>
    </header>
  );
}
