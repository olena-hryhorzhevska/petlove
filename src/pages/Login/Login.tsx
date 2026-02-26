import styles from "./Login.module.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={`container ${styles.loginContainer}`}>
      <Header variant="light" showAuthOnTablet />

      <main className={styles.loginMain}>
        {/* { left side} */}
        <section className={styles.left}>
          <div className={styles.loginImgCard}>
            <img
              className={styles.dogImage}
              src="/images/login-dog-1x.png"
              srcSet="/images/login-dog-1x.png 1x, /images/login-dog-2x.png 2x"
              alt="Dog"
            />

            <div className={styles.loginCardDesc}>
              <div className={styles.petAvatar}>
                <img
                  src="/images/dog-icon-1x.png"
                  srcSet="/images/dog-icon-1x.png 1x, /images/dog-icon-2x.png 2x"
                  alt="Dog avatar"
                />
              </div>

              <div className={styles.petInfo}>
                <div className={styles.petTopRow}>
                  <p className={styles.petName}>Rich</p>
                  <p className={styles.petBirthday}>
                    <span className={styles.petBirthdayLabel}>Birthday:</span>{" "}
                    <span className={styles.petBirthdayDate}>21.09.2020</span>
                  </p>
                </div>

                <p className={styles.petText}>
                  Rich would be the perfect addition to an active family that
                  loves to play and go on walks. I bet he would love having a
                  doggy playmate too!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* { right side} */}
        <section className={styles.right}>
          <div className={styles.formCard}>
            <h1 className={styles.title}>Log in</h1>
            <p className={styles.subtitle}>
              Welcome! Please enter your credentials to login to the platform:
            </p>

            <form className={styles.form} autoComplete="on">
              <label className={styles.field}>
                <span className={styles.labelText}>Email</span>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                />
              </label>

              <label className={styles.field}>
                <span className={styles.labelText}>Password</span>

                <div className={styles.passwordWrap}>
                  <input
                    className={styles.input}
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                  />

                  <button
                    type="button"
                    className={styles.eyeBtn}
                    aria-label="Toggle password visibility"
                  >
                    <svg width="18" height="18" className={styles.eyeIcon}>
                      <use href="/icons/sprite.svg#icon-eye" />
                    </svg>
                  </button>
                </div>
              </label>

              <button type="submit" className={styles.submitBtn}>
                LOG IN
              </button>

              <p className={styles.bottomText}>
                Don’t have an account?{" "}
                <Link className={styles.bottomLink} to="/register">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
