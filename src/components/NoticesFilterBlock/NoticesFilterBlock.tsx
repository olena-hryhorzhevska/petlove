import { useState } from "react";
import styles from "./NoticesFilterBlock.module.css";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import GenderFilter from "../GenderFilter/GenderFilter";
import SpeciesFilter from "../SpeciesFilter/SpeciesFilter";

type Props = {
  category: string;
  setCategory: (category: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  species: string;
  setSpecies: (species: string) => void;
};

export default function NoticesFilters({
  category,
  setCategory,
  gender,
  setGender,
  species,
  setSpecies,
}: Props) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isSpeciesOpen, setIsSpeciesOpen] = useState(false);

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
              category={category}
              setCategory={setCategory}
              closeDropdown={() => setIsCategoryOpen(false)}
            />
          )}
        </div>

        <div className={styles.filterGroup}>
          <button
            type="button"
            className={styles.filterBtn}
            onClick={() => setIsGenderOpen((prev) => !prev)}
          >
            {gender.charAt(0).toUpperCase() + gender.slice(1) || "By gender"}
          </button>
          <svg className={styles.chevronIcon}>
            <use href="/icons/sprite.svg#icon-chevron-down" />
          </svg>
          {isGenderOpen && (
            <GenderFilter
              gender={gender}
              setGender={setGender}
              closeDropdown={() => setIsGenderOpen(false)}
            />
          )}
        </div>

        <div className={styles.filterGroup}>
          <button className={styles.filterBtn} onClick={() => setIsSpeciesOpen((prev) => !prev)}>
            {species.charAt(0).toUpperCase() + species.slice(1) || "By type"}
          </button>
          <svg className={styles.chevronIcon}>
            <use href="/icons/sprite.svg#icon-chevron-down" />
          </svg>
          {isSpeciesOpen && (
            <SpeciesFilter
              species={species}
              setSpecies={setSpecies}
              closeDropdown={() => setIsSpeciesOpen(false)}
            />
          )}
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
