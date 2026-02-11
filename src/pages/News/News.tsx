import { NewsResponse } from "../../types/news";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";
import NewsCard from "../../components/NewsCard/NewsCard";
import styles from "./News.module.css";
import Header from "../../components/Header/Header";
import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";

const limit = 6;

const fetchNews = async (
  page: number,
  limit: number,
  searchInput: string
): Promise<NewsResponse> => {
  const { data } = await api.get<NewsResponse>("/news", {
    params: {
      page,
      limit,
      keyword: searchInput,
    },
  });
  return data;
};

export default function News() {
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  const { data, isLoading, error, isError, isFetching } = useQuery({
    queryKey: ["news", page, limit, searchInput],
    queryFn: () => fetchNews(page, limit, searchInput),
    placeholderData: (prev) => prev,
    staleTime: 60_000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;
  if (!data) return null;

  const totalPages = data?.totalPages;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className={`containerWide ${styles.newsContainer}`}>
      <Header variant="light" />
      <div className={styles.newsCradsTitleWrapper}>
        <h1 className={styles.newsCardsMainTitle}>News</h1>
        <div className={styles.newsCardsSearchWrapper}>
          <input
            className={styles.newsCardsSearch}
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
          />
          <svg width="18" height="18" className={styles.searchIcon}>
            <use href="/icons/sprite.svg#icon-search" />
          </svg>
        </div>
      </div>
      {isFetching && <p>Updating...</p>}
      <ul className={styles.newsCards}>
        {data?.results.map((item) => (
          <NewsCard key={item._id} item={item} />
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
