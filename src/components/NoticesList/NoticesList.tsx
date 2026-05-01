import { Notice } from "../../types/notices";
import styles from "../NoticesList/NoticesList.module.css";

type Props = {
  notice: Notice;
};

export default function NoticesList({ notice }: Props) {
  return (
    <>
      <li>
        <img src={notice.imgURL} alt={notice.title} className={styles.img} />
        <div>
          <div>
            <h3>{notice.title}</h3>
            <p>{notice.popularity}</p>
          </div>
          <div>
            <div>
              <p>Name</p>
              <p>{notice.name}</p>
            </div>
            <div>
              <p>Birthday</p>
              <p>{notice.birthday}</p>
            </div>
            <div>
              <p>Sex</p>
              <p>{notice.sex}</p>
            </div>
            <div>
              <p>Species</p>
              <p>{notice.species}</p>
            </div>
            <div>
              <p>Category</p>
              <p>{notice.category}</p>
            </div>
          </div>
          <p>{notice.comment}</p>
          <p>{notice.price}</p>
          <div>
            <button>Learn more</button>
            <button>heart</button>
          </div>
        </div>
      </li>
    </>
  );
}
