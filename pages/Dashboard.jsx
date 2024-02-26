import styles from "./Dashboard.module.css";

import Cart from "../components/Cart/Cart";
import Categories from "../components/Categories/Categories";
import Foods from "../components/Foods/Foods";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Dashboard() {
  return (
    <main className={styles.main}>
      <div className={styles.background_pattern1}></div>
      <div className={styles.background_pattern2}></div>
      <div className={styles.dashboard}>
        <nav className={styles.nav}>
          <Navbar />
        </nav>

        <section className={styles.categories}>
          <Categories />
        </section>

        <section className={styles.foods}>
          <Foods />
        </section>

        <aside className={styles.cart}>
          <Cart />
        </aside>

        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </main>
  );
}

export default Dashboard;
