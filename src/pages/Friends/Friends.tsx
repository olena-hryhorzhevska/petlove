import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";
import { FriendsResponse } from "../../types/friends";
import Header from "../../components/Header/Header";
import styles from "./Friends.module.css";
import FriendCard from "../../components/FriendCard/FriendCard";
import Loader from "../../components/Loader/Loader";

const fetchFriends = async () => {
  const res = await api.get<FriendsResponse>("/friends");
  return res.data;
};

export default function Friends() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["friends"],
    queryFn: fetchFriends,
  });

  if (isLoading) return <Loader />;
  if (isError) {
    return (
      <p>Error: {error instanceof Error ? error.message : "Unknown error"}</p>
    );
  }
  if (!data || data.length === 0) return <p>No friends found.</p>;

  return (
    <div className={styles.pageWrapper}>
      <div className={`containerWide`}>
        <Header variant="light" showAuthOnTablet />
        <h1 className={styles.friendsTitle}>Our friends</h1>
        <ul className={styles.friendsCards}>
          {data?.map((item) => (
            <FriendCard key={item._id} friend={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
