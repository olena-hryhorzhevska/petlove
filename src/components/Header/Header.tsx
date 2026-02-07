import { Link } from "react-router-dom";
import styles from "./Header.module.css";

type Props = {
  variant?: "dark" | "light";
};

export default function Header({ variant = "dark" }: Props) {
  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      <Link className={styles.logo} to="/">
        <img
          src={
            variant === "dark" ? "/images/logowhite.png" : "/images/logo.png"
          }
          alt="Petlove"
          className={styles.logoImage}
        />
      </Link>

      <nav className={styles.nav}>
        <Link className={styles.navLink} to="/news">
          News
        </Link>
        <Link className={styles.navLink} to="/find">
          Find pet
        </Link>
        <Link className={styles.navLink} to="/friends">
          Our friends
        </Link>
      </nav>

      <div className={styles.auth}>
        <Link className={styles.loginBtn} to="/login">
          Log in
        </Link>
        <Link className={styles.registerBtn} to="/register">
          Registration
        </Link>
      </div>
    </header>
  );
}
