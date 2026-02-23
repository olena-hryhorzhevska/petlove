import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

type Props = {
  isDone?: boolean;
};

export default function Loader({ isDone = false }: Props) {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    if (isDone) {
      if (progress !== 100) {
        const id = window.setTimeout(() => setProgress(100), 0);
        return () => window.clearTimeout(id);
      }
      return;
    }

    const id = window.setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 6;
        return next >= 95 ? 95 : Math.round(next);
      });
    }, 180);

    return () => window.clearInterval(id);
  }, [isDone, progress]);

  return (
    <div className={styles.overlay} role="status" aria-live="polite">
      <div className={styles.center}>
        <div className={styles.percent}>{progress}%</div>
        <div className={styles.ring} />
      </div>
    </div>
  );
}
