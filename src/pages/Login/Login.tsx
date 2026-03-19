import styles from "./Login.module.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  interface FormValues {
    email: string;
    password: string;
  }
  const initialFormValues: FormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (data: FormValues) => {
    console.log("Form data:", data);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid Email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className={styles.pageWrapper}>
      <div className={`container ${styles.loginContainer}`}>
        <div className={styles.loginHeader}>
          <Header variant="light" showAuthOnTablet />
        </div>
        <main className={styles.loginMain}>
          {/* { left side} */}
          <section className={styles.left}>
            <div className={styles.loginImgCard}>
              <picture>
                <source
                  media="(min-width: 1280px)"
                  srcSet="
          /images/login-dog-1x.png 1x,
          /images/login-dog-2x.png 2x
        "
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="
          /images/tab-login-dog-1x.png 1x,
          /images/tab-login-dog-2x.png 2x
        "
                />
                <img
                  className={styles.dogImage}
                  src="/images/mob-login-dog-1x.png"
                  srcSet="
          /images/mob-login-dog-1x.png 1x,
          /images/mob-login-dog-2x.png 2x
        "
                  alt="Dog"
                />
              </picture>
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
              <div className={styles.loginTitle}>
                <h1 className={styles.title}>Log in</h1>
                <p className={styles.subtitle}>
                  Welcome! Please enter your credentials to login to the
                  platform:
                </p>
              </div>
              <Formik
                initialValues={initialFormValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {({ touched, errors }) => {
                  const emailState =
                    touched.email && errors.email
                      ? styles.inputError
                      : touched.email && !errors.email
                      ? styles.inputOkay
                      : "";

                  const passwordState =
                    touched.password && errors.password
                      ? styles.inputError
                      : touched.password && !errors.password
                      ? styles.inputOkay
                      : "";

                  return (
                    <Form className={styles.form} autoComplete="on">
                      <div className={styles.fieldGroup}>
                        <Field
                          className={`${styles.input} ${emailState}`}
                          autoComplete="email"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className={styles.error}
                        />
                      </div>
                      <div className={styles.fieldGroup}>
                        <div className={styles.passWrapper}>
                          <Field
                            className={`${styles.input} ${passwordState}`}
                            autoComplete="current-password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                          />
                          <button
                            type="button"
                            className={styles.eyeBtn}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <svg
                              className={styles.eyeIcon}
                            >
                              <use
                                href={`/icons/sprite.svg#${
                                  showPassword ? "icon-eye-off" : "icon-eye"
                                }`}
                              />
                            </svg>
                          </button>
                        </div>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className={styles.error}
                        />
                      </div>
                      <button type="submit" className={styles.submitBtn}>
                        LOG IN
                      </button>
                    </Form>
                  );
                }}
              </Formik>
              <p className={styles.bottomText}>
                Don’t have an account?
                <Link className={styles.bottomLink} to="/register">
                  Register
                </Link>
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
