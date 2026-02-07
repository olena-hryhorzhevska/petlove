import { NewsItem } from "../../types/news";
import styles from "./NewsCard.module.css";

type Props = {
  item: NewsItem;
};
export default function NewsCard({ item }: Props) {
  return (
    <>
      <li className={styles.newsCard}>
        <img
          src={item.imgUrl}
          alt={item.title}
          className={styles.newsImgCard}
        />
        <div className={styles.newsCardContent}>
          <h3 className={styles.newsCardTitle}>{item.title}</h3>
          <p className={styles.newsCardText}>{item.text}</p>
        </div>
        <div className={styles.newsCardFooter}>
          <p className={styles.newsCardDate}>
            {new Date(item.date).toLocaleDateString("en-GB")}
          </p>
          <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.newsCardReadMore}>
            Read more
          </a>
        </div>
      </li>
    </>
  );
}
