import { useEffect, useState } from "react";
import styles from "./NoticesFilterBlock.module.css";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import GenderFilter from "../GenderFilter/GenderFilter";
import SpeciesFilter from "../SpeciesFilter/SpeciesFilter";
import LocationFilter from "../LocationFilter/LocationFilter";

type Props = {
  category: string;
  setCategory: (category: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  species: string;
  setSpecies: (species: string) => void;
  keyword: string;
  setKeyword: (keyword: string) => void;
  debouncedKeyword: string;
  setDebouncedKeyword: (debouncedKeyword: string) => void;
  locationQuery: string;
  setLocationQuery: (locationQuery: string) => void;
  setLocationId: (locationId: string) => void;
  popularity: "" | "popular" | "unpopular";
  setPopularity: (popularity: "" | "popular" | "unpopular") => void;
  price: "" | "cheap" | "expensive";
  setPrice: (price: "" | "cheap" | "expensive") => void;
};

export default function NoticesFilters({
  category,
  setCategory,
  gender,
  setGender,
  species,
  setSpecies,
  keyword,
  setKeyword,
  setDebouncedKeyword,
  locationQuery,
  setLocationQuery,
  setLocationId,
  popularity,
  setPopularity,
  price,
  setPrice,
}: Props) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isSpeciesOpen, setIsSpeciesOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 500);

    return () => clearTimeout(timer);
  }, [keyword, setDebouncedKeyword]);

  return (
    <div className={styles.filters}>
      <div className={styles.topRow}>
        <div className={styles.searchGroup}>
          <input
            className={styles.searchInput}
            placeholder="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
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
          <button
            className={styles.filterBtn}
            onClick={() => setIsSpeciesOpen((prev) => !prev)}
          >
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
          <input
            className={styles.locationInput}
            placeholder="Location"
            value={locationQuery}
            onChange={(e) => {
              setLocationQuery(e.target.value);
              setIsLocationOpen(true);
            }}
          />

          {locationQuery && (
            <button
              type="button"
              className={styles.clearLocationBtn}
              onClick={() => {
                setLocationQuery("");
                setLocationId("");
                setIsLocationOpen(false);
              }}
              aria-label="Clear location"
            >
              <svg className={styles.clearIcon}>
                <use href="/icons/sprite.svg#icon-close" />
              </svg>
            </button>
          )}

          <svg className={styles.searchIcon}>
            <use href="/icons/sprite.svg#icon-search" />
          </svg>

          {isLocationOpen && locationQuery && (
            <LocationFilter
              locationQuery={locationQuery}
              setLocationQuery={setLocationQuery}
              setLocationId={setLocationId}
              closeDropdown={() => setIsLocationOpen(false)}
            />
          )}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottomRow}>
        <button
          className={`${styles.sortBtn} ${popularity === "popular" ? styles.active : ""}`}
          onClick={() =>
            setPopularity(popularity === "popular" ? "" : "popular")
          }
        >
          Popular
        </button>
        <button
          className={`${styles.sortBtn} ${popularity === "unpopular" ? styles.active : ""}`}
          onClick={() =>
            setPopularity(popularity === "unpopular" ? "" : "unpopular")
          }
        >
          Unpopular
        </button>
        <button
          className={`${styles.sortBtn} ${price === "cheap" ? styles.active : ""}`}
          onClick={() => setPrice(price === "cheap" ? "" : "cheap")}
        >
          Cheap
        </button>
        <button
          className={`${styles.sortBtn} ${price === "expensive" ? styles.active : ""}`}
          onClick={() =>
            setPrice(price === "expensive" ? "" : "expensive")
          }
        >
          Expensive
        </button>
      </div>
    </div>
  );
}
