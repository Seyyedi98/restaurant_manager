import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.left_col}>
        <p>Privacy and Policy</p>
        <p>How to use</p>
      </div>
      <div className={styles.rigt_col}>
        <p className={styles.copyright}>
          ©2024 Made by <span>Seyyedi.</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
