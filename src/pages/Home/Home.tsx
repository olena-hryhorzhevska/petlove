import Header from "../../components/Header/Header";
import css from "./Home.module.css";

export default function HomePage() {
  return (
    <main className="container">
      <section className={css.heroCard}>
        <Header variant="dark" showAuthOnTablet={false} />
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
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet="/images/hero-photo-1x.jpg 1x, /images/hero-photo-2x.jpg 2x"
          />

          <source
            media="(min-width: 768px)"
            srcSet="/images/tab-hero-photo-1x.jpg 1x, /images/tab-hero-photo-2x.jpg 2x"
          />

          <img
            className={css.image}
            src="/images/mob-hero-photo-1x.jpg"
            srcSet="/images/mob-hero-photo-1x.jpg 1x, /images/mob-hero-photo-2x.jpg 2x"
            alt="Woman hugging a dog"
          />
        </picture>
      </section>
    </main>
  );
}
