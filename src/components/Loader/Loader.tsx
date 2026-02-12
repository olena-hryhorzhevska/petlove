import { Helix } from "ldrs/react";
import "ldrs/react/Helix.css";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.wrapper}>
      <Helix size="60" speed="2.5" color="var(--color-dark-yellow)" />
    </div>
  );
}