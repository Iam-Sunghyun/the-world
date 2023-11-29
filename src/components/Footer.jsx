import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&#169; copyright The World Inc. {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
