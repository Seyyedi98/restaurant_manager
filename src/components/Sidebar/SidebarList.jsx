/* eslint-disable react/prop-types */
import styles from "./SidebarList.module.css";

function SidebarList({ title }) {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line} />
    </div>
  );
}

export default SidebarList;
