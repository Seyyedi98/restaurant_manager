import Cart from "../components/Cart/Cart";
import Categories from "../components/Categories/Categories";
import Foods from "../components/Foods/Foods";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <main>
      <div className={styles.dashboard}>
        <div className={styles.nav}>
          <Navbar />
        </div>

        <div className={styles.categories}>
          <Categories />
        </div>

        <div className={styles.foods}>
          <Foods />
        </div>

        <div className={styles.cart}>
          <Cart />
        </div>

        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
