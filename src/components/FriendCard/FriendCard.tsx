import { FriendsItem } from "../../types/friends";
import styles from "./FriendCard.module.css";

export default function FriendCard({ friend }: { friend: FriendsItem }) {
  const openDay = friend.workDays?.find((day) => day.isOpen);
  return (
    <>
      <li className={styles.friendCard}>
        <img
          className={styles.friendImg}
          src={friend.imageUrl}
          alt="friend image"
          width={90}
          height={90}
        />
        <div>
          <h3 className={styles.friendTitle}>{friend.title}</h3>
          <div className={styles.friendDetails}>
            <p className={styles.friendInfoGrey}>
              Email: <span className={styles.friendInfo}>{friend.email}</span>
            </p>
            <p className={styles.friendInfoGrey}>
              Address:{" "}
              <span className={styles.friendInfo}>
                {friend.address ? friend.address : "website only"}
              </span>
            </p>
            <p className={styles.friendInfoGrey}>
              Phone:{" "}
              <span className={styles.friendInfo}>
                {friend.phone ? friend.phone : "email only"}
              </span>
            </p>
          </div>
        </div>
        <p className={styles.workingTime}>
          {openDay ? `${openDay.from} - ${openDay.to}` : "Day and night"}
        </p>
      </li>
    </>
  );
}
