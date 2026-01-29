import { Link } from "react-router-dom";
import css from "./Home.module.css";

export default function HomePage() {
  return (
    <main className="container">
      <section className={css.heroCard}>
        <header className={css.header}>
          <Link className={css.logo} to="/">
            <img
              src="/images/logowhite.png"
              alt="Petlove"
              className={css.logoImage}
            />
          </Link>

          <nav className={css.nav}>
            <a className={css.navLink} href="#news">
              News
            </a>
            <a className={css.navLink} href="#find">
              Find pet
            </a>
            <a className={css.navLink} href="#friends">
              Our friends
            </a>
          </nav>

          <div className={css.auth}>
            <Link className={css.loginBtn} to="/login">
              Log in
            </Link>
            <Link className={css.registerBtn} to="/register">
              Registration
            </Link>
          </div>
        </header>

        <div className={css.heroContent}>
          <h1 className={css.title}>
            Take good <span className={css.titleLight}>care</span> of your small
            pets
          </h1>

          <p className={css.subtitle}>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
      </section>

      <section className={css.imageCard}>
        <img
          className={css.image}
          src="/images/hero-photo-1x.jpg"
          srcSet="
    /images/hero-photo-1x.jpg 1x,
    /images/hero-photo-2x.jpg 2x
  "
          alt="Woman hugging a dog"
        />
      </section>
    </main>
  );
}
