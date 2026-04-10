import styles from "./Register.module.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const initialFormValues: FormValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().trim().required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "You must enter minimum 7 characters")
    .required("Password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
});

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleSubmit = (data: FormValues) => {
    console.log("Form data:", data);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={`container ${styles.registerContainer}`}>
        <div className={styles.registerHeader}>
          <Header variant="light" showAuthOnTablet />
        </div>
        <main className={styles.registerMain}>
          <section className={styles.left}>
            <div className={styles.registerImgCard}>
              <picture>
                <source
                  media="(min-width: 1280px)"
                  srcSet="
          /images/register-cat-1x.png 1x,
          /images/register-cat-2x.png 2x
        "
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="
          /images/tab-register-cat-1x.png 1x,
          /images/tab-register-cat-2x.png 2x
        "
                />
                <img
                  className={styles.petImage}
                  src="/images/mob-register-cat-1x.png"
                  srcSet="
          /images/mob-register-cat-1x.png 1x,
          /images/mob-register-cat-2x.png 2x
        "
                  alt="Cat"
                />
              </picture>
              <div className={styles.registerCardDesc}>
                <div className={styles.petAvatar}>
                  <img
                    src="/images/cat-icon-1x.png"
                    srcSet="/images/cat-icon-1x.png 1x, /images/cat-icon-2x.png 2x"
                    alt="Cat avatar"
                  />
                </div>
                <div className={styles.petInfo}>
                  <div className={styles.petTopRow}>
                    <p className={styles.petName}>Jack</p>
                    <p className={styles.petBirthday}>
                      <span className={styles.petBirthdayLabel}>Birthday:</span>{" "}
                      <span className={styles.petBirthdayDate}>18.10.2021</span>
                    </p>
                  </div>
                  <p className={styles.petText}>
                    Jack is a gray Persian cat with green eyes. He loves to be
                    pampered and groomed, and enjoys playing with toys.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.right}>
            <div className={styles.formCard}>
              <div className={styles.registerTitle}>
                <h1 className={styles.title}>Registration</h1>
                <p className={styles.subtitle}>
                  Thank you for your interest in our platform.
                </p>
              </div>
              <Formik<FormValues>
                initialValues={initialFormValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {({ touched, errors }) => {
                  const getFieldState = (field: keyof FormValues) =>
                    touched[field] && errors[field]
                      ? styles.inputError
                      : touched[field] && !errors[field]
                      ? styles.inputOkay
                      : "";

                  return (
                    <Form className={styles.form} autoComplete="on">
                      <div className={styles.fieldGroup}>
                        <Field
                          className={`${styles.input} ${getFieldState("name")}`}
                          type="text"
                          name="name"
                          placeholder="Name"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className={styles.error}
                        />
                      </div>

                      <div className={styles.fieldGroup}>
                        <Field
                          className={`${styles.input} ${getFieldState(
                            "email"
                          )}`}
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
                            className={`${styles.input} ${getFieldState(
                              "password"
                            )}`}
                            autoComplete="new-password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                          />
                          <button
                            type="button"
                            className={styles.eyeBtn}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <svg className={styles.eyeIcon}>
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

                      <div className={styles.fieldGroup}>
                        <div className={styles.passWrapper}>
                          <Field
                            className={`${styles.input} ${getFieldState(
                              "passwordConfirm"
                            )}`}
                            autoComplete="new-password"
                            type={showPasswordConfirm ? "text" : "password"}
                            name="passwordConfirm"
                            placeholder="Confirm password"
                          />
                          <button
                            type="button"
                            className={styles.eyeBtn}
                            onClick={() =>
                              setShowPasswordConfirm(!showPasswordConfirm)
                            }
                          >
                            <svg className={styles.eyeIcon}>
                              <use
                                href={`/icons/sprite.svg#${
                                  showPasswordConfirm
                                    ? "icon-eye-off"
                                    : "icon-eye"
                                }`}
                              />
                            </svg>
                          </button>
                        </div>
                        <ErrorMessage
                          name="passwordConfirm"
                          component="div"
                          className={styles.error}
                        />
                      </div>

                      <button type="submit" className={styles.submitBtn}>
                        REGISTRATION
                      </button>
                    </Form>
                  );
                }}
              </Formik>
              <p className={styles.bottomText}>
                Already have an account?
                <Link className={styles.bottomLink} to="/login">
                  Login
                </Link>
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
