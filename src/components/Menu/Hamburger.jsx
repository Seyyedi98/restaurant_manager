/* eslint-disable react/prop-types */
import styles from "./Hamburger.module.css";

function Hamburger({ isNavbarOpen, setIsNavbarOpen }) {
  return (
    <label className={styles.burger} htmlFor="burger">
      <input
        type="checkbox"
        checked={isNavbarOpen}
        onChange={() => setIsNavbarOpen(!isNavbarOpen)}
        id="burger"
      />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}

export default Hamburger;
