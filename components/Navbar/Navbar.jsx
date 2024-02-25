import styles from "./Navbar.module.css";

import arrow_right from "../../assets/icons/Arrow-Right.svg";
import notification from "../../assets/icons/notification.svg";
import mail from "../../assets/icons/mail.svg";
import Logo from "../../ui/Logo";
import Burger from "../Menu/Hamburger";
import UserNavbar from "../User/UserNavbar";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <img
          src={arrow_right}
          alt="open menu icon"
          className={styles.show_menu}
        />
        <div className={styles.logo}>
          <Logo />
        </div>

        <div className={styles.notifications}>
          <img src={notification} alt="notifications" />
        </div>

        <div className={styles.mails}>
          <img src={mail} alt="mail" />
        </div>

        <div className={styles.menu}>
          <Burger />
        </div>

        <div className={styles.user}>
          <UserNavbar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
