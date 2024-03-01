/* eslint-disable react/prop-types */
import styles from "./UserNavbar.module.css";

import profile from "../../assets/images/profile.webp";

function UserNavbar({ showName }) {
  return (
    <div className={styles.main}>
      <img
        className={styles.profile_image}
        src={profile}
        alt="User profile image"
      />
      {showName && (
        <div className={styles.text_col}>
          <h3 className={styles.title}>Username</h3>
          <h3 className={styles.sub_title}>Administrator</h3>
        </div>
      )}
    </div>
  );
}

export default UserNavbar;
