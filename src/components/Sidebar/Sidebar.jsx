/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./Sidebar.module.css";
import arrow_right from "../../assets/icons/Arrow-Right.svg";
import Logo from "../../ui/Logo";
import SidebarList from "./SidebarList";

function Sidebar({ isOpen, setOpen }) {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.sidebar_active : ""}`}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.menu} onClick={() => setOpen(!isOpen)}>
          <img
            src={arrow_right}
            alt="open menu icon"
            className={`${styles.show_menu} ${
              isOpen ? styles.show_menu_active : ""
            }`}
          />
        </div>
      </div>

      <div className={styles.line} />

      <div>
        <SidebarList title="Home"></SidebarList>
        <SidebarList title="Pages"></SidebarList>
        <SidebarList title="Elements"></SidebarList>
      </div>
    </div>
  );
}

export default Sidebar;
