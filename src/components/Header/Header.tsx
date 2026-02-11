import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

type Props = {
  variant?: "dark" | "light";
};

export default function Header({ variant = "dark" }: Props) {

  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink} ${isActive ? styles.navBorder : ""}`;

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
        <NavLink className={getNavClass} to="/news">
          News
        </NavLink>
        <NavLink className={getNavClass} to="/find">
          Find pet
        </NavLink>
        <NavLink className={getNavClass} to="/friends">
          Our friends
        </NavLink>
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
