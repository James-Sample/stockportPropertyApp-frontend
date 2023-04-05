import React from "react";
import styles from "./styles.module.css";

const SortFilter = ({ sort, setSort }) => {
  const onSelectChange = ({ currentTarget: input }) => {
    setSort({ sort: input.value, order: sort.order });
  };

  const onArrowChange = () => {
    if (sort.order === "asc") {
      setSort({ sort: sort.sort, order: "desc" });
    } else {
      setSort({ sort: sort.sort, order: "asc" });
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.sort_by}>Sort By :</p>
      <select
        onChange={onSelectChange}
        className={styles.select}
        defaultValue={sort.sort}
      >
        <option value="price">Price</option>
      </select>
      <button
        className={styles.arrow_btn}
        onClick={onArrowChange}
        type="button"
      >
        <p className={styles.up_arrow}>&uarr;</p>
        <p className={styles.down_arrow}>&darr;</p>
      </button>
    </div>
  );
};

export default SortFilter;
