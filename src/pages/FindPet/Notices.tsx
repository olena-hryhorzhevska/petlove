import Header from "../../components/Header/Header";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";
import { NoticesResponse } from "../../types/notices";
import NoticesList from "../../components/NoticesList/NoticesList";
import styles from "./Notices.module.css";
import NoticesFilterBlock from "../../components/NoticesFilterBlock/NoticesFilterBlock";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";

export default function Notices() {
  const [category, setCategory] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [species, setSpecies] = useState<string>("");

  const fetchNotices = async () => {
    const res = await api.get<NoticesResponse>("/notices", {
      params: {
        category: category || undefined,
        sex: gender || undefined,
        species: species || undefined,
      },
    });
    return res.data.results;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["notices", category, gender, species],
    queryFn: fetchNotices,
  });

    if (isLoading) return <Loader />;
    if (isError) {
      return (
        <p>Error: {error instanceof Error ? error.message : "Unknown error"}</p>
      );
    }

  return (
    <div className={styles.pageWrapper}>
      <div className={`containerWide`}>
        <Header variant="light" showAuthOnTablet />
        <h1 className={styles.pageTitle}>Find your favorite pet</h1>
        <NoticesFilterBlock category={category} setCategory={setCategory} gender={gender} setGender={setGender} species={species} setSpecies={setSpecies} />
        <ul className={styles.noticesCards}>
          {data && data.length > 0 ? (
            data.map((notice) => (
              <NoticesList key={notice._id} notice={notice} />
            ))
          ) : (
            <p className={styles.emptyMessage}>No pets found for this filter</p>
          )}
        </ul>
      </div>
    </div>
  );
}
