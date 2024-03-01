import styles from "./Navbar.module.css";

import arrow_right from "../../assets/icons/Arrow-Right.svg";
import notification from "../../assets/icons/notification.svg";
import mail from "../../assets/icons/mail.svg";
import Logo from "../../ui/Logo";
import Burger from "../Menu/Hamburger";
import UserNavbar from "../User/UserNavbar";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div
          className={styles.menu}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <img
            src={arrow_right}
            alt="open menu icon"
            className={`${styles.show_menu} ${
              isSidebarOpen ? styles.show_menu_active : ""
            }`}
          />
        </div>

        <div className={styles.logo}>
          <Logo />
        </div>

        <div className={styles.burgerMenu}>
          <Burger
            isNavbarOpen={isNavbarOpen}
            setIsNavbarOpen={setIsNavbarOpen}
          />
        </div>

        <div className={styles.userProfile}>
          <div className={styles.notifications}>
            <img src={notification} alt="notifications" />
          </div>

          <div className={styles.mails}>
            <img src={mail} alt="mail" />
          </div>

          <div className={styles.user}>
            <UserNavbar showName={true} />
          </div>
        </div>

        <div
          className={`${styles.nav_user_mobile} ${
            isNavbarOpen ? styles.nav_user_mobile_active : ""
          }`}
        >
          <div className={styles.userProfile_mobile}>
            <div className={styles.notifications_mobile}>
              <img src={notification} alt="notifications" />
            </div>

            <div className={styles.mails_mobile}>
              <img src={mail} alt="mail" />
            </div>

            <div className={styles.user_mobile}>
              <UserNavbar showName={false} />
            </div>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} setOpen={setIsSidebarOpen} />
    </div>
  );
}

export default Navbar;
