import styles from "./GenderFilter.module.css";

type Props = {
  gender: string;
  setGender: (gender: string) => void;
  closeDropdown: () => void;
};
const genders = ["unknown", "female", "male", "multiple"];

export default function GenderFilter({
  gender,
  setGender,
  closeDropdown,
}: Props) {
  const handleSelect = (value: string) => {
    setGender(value);
    closeDropdown();
  };

  return (
    <div className={styles.dropdown}>
      <button
        type="button"
        className={`${styles.dropdownItem} ${gender === "" ? styles.active : ""}`}
        onClick={() => handleSelect("")}
      >
        Show all
      </button>
      {genders.map((item) => (
        <button
          key={item}
          type="button"
          className={`${styles.dropdownItem} ${gender === item ? styles.active : ""}`}
          onClick={() => {
            setGender(item);
            closeDropdown();
          }}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
}
