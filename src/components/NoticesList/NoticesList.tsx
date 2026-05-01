import { Notice } from "../../types/notices";
import styles from "../NoticesList/NoticesList.module.css";

type Props = {
  notice: Notice;
};

export default function NoticesList({ notice }: Props) {
  const date = notice.birthday;
  const [year, month, day] = date.split("-");
  const formattedDate = `${day}.${month}.${year}`;
  const correctName = notice.name.split(" ").slice(0, 1).join(" ");

  return (
    <>
      <li className={styles.noticeCard}>
        <img src={notice.imgURL} alt={notice.title} className={styles.img} />
        <div className={styles.content}>
          <div className={styles.metaTitleGroup}>
            <h3 className={styles.title}>{notice.title}</h3>
            <p className={styles.popularity}>{notice.popularity}</p>
          </div>
          <div className={styles.metaItem}>
            <div className={styles.metaDetails}>
              <p className={styles.metaLabel}>Name</p>
              <p className={styles.metaValue}>{correctName}</p>
            </div>
            <div className={styles.metaDetails}>
              <p className={styles.metaLabel}>Birthday</p>
              <p className={styles.metaValue}>{formattedDate}</p>
            </div>
            <div className={styles.metaDetails}>
              <p className={styles.metaLabel}>Sex</p>
              <p className={styles.metaValue}>{notice.sex}</p>
            </div>
            <div className={styles.metaDetails}>
              <p className={styles.metaLabel}>Species</p>
              <p className={styles.metaValue}>{notice.species}</p>
            </div>
            <div className={styles.metaDetails}>
              <p className={styles.metaLabel}>Category</p>
              <p className={styles.metaValue}>{notice.category}</p>
            </div>
          </div>
          <p className={styles.comment}>{notice.comment}</p>
        </div>

        <div className={styles.buttonGroup}>
          <p className={styles.price}>${notice.price}</p>
          <div className={styles.buttons}>
            <button className={styles.learnMore}>Learn more</button>
            <button className={styles.heart}>heart</button>
          </div>
        </div>
      </li>
    </>
  );
}
