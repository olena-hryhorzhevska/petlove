import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios"
import { FriendsResponse } from "../../types/friends";

const fetchFriends = async () => {
  const res = await api.get<FriendsResponse>("/friends");
  return res.data;
}

export default function Friends() {

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["friends"],
    queryFn: fetchFriends,
  })
  

  return (
    <>
      <h1>Friends Page</h1>
      <ul>
        {data?.map((friend) => (
          <li key={friend._id}>{friend.title}</li>
        ))}
      </ul>
    </>
  )
}