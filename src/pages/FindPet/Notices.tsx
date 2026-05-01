import Header from "../../components/Header/Header";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";
import { NoticesResponse } from "../../types/notices";
import NoticesList from "../../components/NoticesList/NoticesList";

export default function Notices() {
  const fetchNotices = async () => {
    const res = await api.get<NoticesResponse>("/notices");
    return res.data.results;
  };

  const { data } = useQuery({
    queryKey: ["notices"],
    queryFn: fetchNotices,
  });

  return (
    <div className={`containerWide`}>
      <Header variant="light" showAuthOnTablet />
      <h1>Find your favorite pet</h1>
      <ul>
        {data?.map((notice) => (
          <NoticesList key={notice._id} notice={notice} />
        ))}
      </ul>
    </div>
  );
}
