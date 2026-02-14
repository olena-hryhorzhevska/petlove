import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

type Props = {
  variant?: "dark" | "light";
};

export default function Header({ variant = "dark" }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink} ${isActive ? styles.navBorder : ""}`;

  const openMenu = () => {
    setModalOpen(true);
  };

  const closeMenu = () => {
    setModalOpen(false);
  };

  return (
    <>
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
        <button
          type="button"
          className={styles.burgerBtn}
          onClick={openMenu}
          aria-label="Open menu"
        >
          ☰
        </button>
      </header>
      {modalOpen && (
        <div className={styles.menuOverlay} role="dialog" aria-modal="true">
          <div className={styles.menuPanel}>
            <div className={styles.menuTop}>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className={styles.menuNav}>
              <NavLink className={getNavClass} to="/news" onClick={closeMenu}>
                News
              </NavLink>
              <NavLink className={getNavClass} to="/find" onClick={closeMenu}>
                Find pet
              </NavLink>
              <NavLink
                className={getNavClass}
                to="/friends"
                onClick={closeMenu}
              >
                Our friends
              </NavLink>
            </nav>
            <div className={styles.menuAuth}>
              <Link className={styles.menuLoginBtn} to="/login" onClick={closeMenu}>
                Log in
              </Link>
              <Link
                className={styles.menuRegisterBtn}
                to="/register"
                onClick={closeMenu}
              >
                Registration
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
