import styles from "./UserNavbar.module.css";

import profile from "../../assets/images/profile.png";

function UserNavbar() {
  return (
    <div className={styles.main}>
      <img
        className={styles.profile_image}
        src={profile}
        alt="User profile image"
      />
      <div>
        <h3 className={styles.title}>Ramtin Daniels</h3>
        <h3 className={styles.sub_title}>Administrator</h3>
      </div>
    </div>
  );
}

export default UserNavbar;
