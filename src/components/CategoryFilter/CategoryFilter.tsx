import styles from "./CategoryFilter.module.css";

type Props = {
  setCategory: (category: string) => void;
  closeDropdown: () => void;
};

const categories = ["sell", "free", "lost", "found"];

export default function CategoryFilter({ setCategory, closeDropdown }: Props) {
  const handleSelect = (value: string) => {
    setCategory(value);
    closeDropdown();
  };

  return (
    <div className={styles.dropdown}>
      <button
        type="button"
        className={styles.dropdownItem}
        onClick={() => handleSelect("")}
      >
        Show all
      </button>

      {categories.map((item) => (
        <button
          key={item}
          type="button"
          className={styles.dropdownItem}
          onClick={() => handleSelect(item)}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
}
