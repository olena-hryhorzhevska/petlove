import { FriendsItem } from "../../types/friends";
import styles from "./FriendCard.module.css";

export default function FriendCard({ friend }: { friend: FriendsItem }) {
  const openDay = friend.workDays?.find((day) => day.isOpen);
  return (
    <>
      <li className={styles.friendCard}>
        <img className={styles.friendImg} src={friend.imageUrl} alt="friend image" width={90} height={90}/>
        <div>
          <h3>{friend.title}</h3>
          <p>Email: {friend.email}</p>
          <p>Address: {friend.address ? friend.address : "website only"}</p>
          <p>Phone: {friend.phone ? friend.phone : "email only"}</p>
        </div>
        <p className={styles.workingTime}>{openDay ? `${openDay.from} - ${openDay.to}` : "Day and night"}</p>
      </li>
    </>
  );
}
