import styles from "./Hamburger.module.css";

function Hamburger() {
  return (
    <label className={styles.burger} htmlFor="burger">
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}

export default Hamburger;
