import styles from "./SpeciesFilter.module.css";

type Props = {
  species: string;
  setSpecies: (value: string) => void;
  closeDropdown: () => void;
};

const speciesArray = [
  "dog",
  "cat",
  "monkey",
  "bird",
  "snake",
  "turtle",
  "lizard",
  "frog",
  "fish",
  "ants",
  "bees",
  "butterfly",
  "spider",
  "scorpion",
];

export default function SpeciesFilter({
  species,
  setSpecies,
  closeDropdown,
}: Props) {
  const handleSelect = (value: string) => {
    setSpecies(value);
    closeDropdown();
  };
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownScroll}>
        <button
          type="button"
          className={`${styles.dropdownItem} ${species === "" ? styles.active : ""}`}
          onClick={() => handleSelect("")}
        >
          Show all
        </button>

        {speciesArray.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setSpecies(item)}
            className={`${styles.dropdownItem} ${species === item ? styles.active : ""}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
