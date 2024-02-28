import styles from "./Dashboard.module.css";

import Cart from "../components/Cart/Cart";
import Categories from "../components/Categories/Categories";
import Foods from "../components/Foods/Foods";

function Dashboard() {
  return (
    <>
      <div className={styles.background_pattern1}></div>
      <div className={styles.background_pattern2}></div>
      <div className={styles.dashboard}>
        <section className={styles.categories}>
          <Categories />
        </section>

        <section className={styles.foods}>
          <Foods />
        </section>

        <aside className={styles.cart}>
          <Cart />
        </aside>
      </div>
    </>
  );
}

export default Dashboard;
