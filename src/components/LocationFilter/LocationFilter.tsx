import { api } from "../../api/axios";
import { LocationsResponse } from "../../types/locations";
import { useQuery } from "@tanstack/react-query";
import styles from "./LocationFilter.module.css";

export default function LocationFilter({
  locationQuery,
  setLocationQuery,
  setLocationId,
  closeDropdown,
}: {
  locationQuery: string;
  setLocationQuery: (query: string) => void;
  setLocationId: (id: string) => void;
  closeDropdown: () => void;
}) {
  const fetchLocations = async (query: string): Promise<LocationsResponse> => {
    const res = await api.get<LocationsResponse>("/cities/locations", {
      params: {
        query,
      },
    });
    return res.data;
  };

  const { data } = useQuery({
    queryKey: ["locations", locationQuery],
    queryFn: () => fetchLocations(locationQuery),
  });

  const filteredLocations = data?.filter((loc) => {
    return `${loc.stateEn} ${loc.cityEn}`
      .toLowerCase()
      .includes(locationQuery.toLowerCase());
  });

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) {
      return <span className={styles.greyText}>{text}</span>;
    }

    const regex = new RegExp(`(${query})`, "i");
    const parts = text.split(regex);
    return parts.map((part, index) => {
      const isMatch = part.toLowerCase() === query.toLowerCase();
      return (
        <span
          key={index}
          className={isMatch ? styles.blackText : styles.greyText}
        >
          {part}
        </span>
      );
    });
  };

  return (
    <div className={styles.dropdown}>
      <ul>
        {filteredLocations && filteredLocations.length > 0 ? (
          filteredLocations.map((loc) => (
            <li key={loc._id}>
              <button
                className={styles.dropdownItem}
                type="button"
                onClick={() => {
                  setLocationId(loc._id);
                  setLocationQuery(`${loc.stateEn}, ${loc.cityEn}`);
                  closeDropdown();
                }}
              >
                {highlightMatch(loc.stateEn, locationQuery)},{" "}
                {highlightMatch(loc.cityEn, locationQuery)}
              </button>
            </li>
          ))
        ) : (
          <li className={styles.noResults}>No locations found :(</li>
        )}
      </ul>
    </div>
  );
}
