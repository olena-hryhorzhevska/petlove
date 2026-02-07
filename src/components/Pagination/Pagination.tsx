import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

type Props = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ page, totalPages, onPageChange }: Props) {
  if (totalPages <= 1) return null;

  const isFirst = page === 1;
  const isLast = page === totalPages;

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.navBtn}
        onClick={() => onPageChange(1)}
        disabled={isFirst}
        aria-label="First page"
      >
        {"<<"}
      </button>

      <ReactPaginate
        pageCount={totalPages}
        forcePage={page - 1}
        onPageChange={(e) => onPageChange(e.selected + 1)}
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        containerClassName={styles.pagination}
        pageLinkClassName={styles.pageBtn}
        activeLinkClassName={styles.active}
        previousLinkClassName={styles.navBtn}
        nextLinkClassName={styles.navBtn}
        breakLinkClassName={styles.dots}
        disabledLinkClassName={styles.disabled}
      />

      <button
        type="button"
        className={styles.navBtn}
        onClick={() => onPageChange(totalPages)}
        disabled={isLast}
        aria-label="Last page"
      >
        {">>"}
      </button>
    </div>
  );
}
