import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Navbar />
      </nav>

      <Outlet />

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </main>
  );
}

export default Layout;
