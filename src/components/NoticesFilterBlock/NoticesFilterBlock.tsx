import { useState } from "react";
import styles from "./NoticesFilterBlock.module.css";
import CategoryFilter from "../CategoryFilter/CategoryFilter";

type Props = {
  category: string;
  setCategory: (category: string) => void;
};

export default function NoticesFilters({ category, setCategory }: Props) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className={styles.filters}>
      <div className={styles.topRow}>
        <div className={styles.searchGroup}>
          <input className={styles.searchInput} placeholder="Search" />
          <svg className={styles.searchIcon}>
            <use href="/icons/sprite.svg#icon-search" />
          </svg>
        </div>

        <div className={styles.filterGroup}>
          <button
            type="button"
            className={styles.filterBtn}
            onClick={() => setIsCategoryOpen((prev) => !prev)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1) || "Category"}
          </button>

          <svg className={styles.chevronIcon}>
            <use href="/icons/sprite.svg#icon-chevron-down" />
          </svg>

          {isCategoryOpen && (
            <CategoryFilter
              setCategory={setCategory}
              closeDropdown={() => setIsCategoryOpen(false)}
            />
          )}
        </div>

        <div className={styles.filterGroup}>
          <button className={styles.filterBtn}>By gender</button>
          <svg className={styles.chevronIcon}>
            <use href="/icons/sprite.svg#icon-chevron-down" />
          </svg>
        </div>

        <div className={styles.filterGroup}>
          <button className={styles.filterBtn}>By type</button>
          <svg className={styles.chevronIcon}>
            <use href="/icons/sprite.svg#icon-chevron-down" />
          </svg>
        </div>

        <div className={styles.locationGroup}>
          <input className={styles.locationInput} placeholder="Location" />
          <svg className={styles.searchIcon}>
            <use href="/icons/sprite.svg#icon-search" />
          </svg>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottomRow}>
        <button className={styles.sortBtn}>Popular</button>
        <button className={styles.sortBtn}>Unpopular</button>
        <button className={styles.sortBtn}>Cheap</button>
        <button className={styles.sortBtn}>Expensive</button>
      </div>
    </div>
  );
}
