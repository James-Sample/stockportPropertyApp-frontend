import React from "react";
import styles from "./styles.module.css";
import postcodes from "../../data/postcode.json";

const PostcodeFilter = ({ filterPostcode, setFilterPostcode }) => {
  const onChange = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterPostcode, input.value];
      setFilterPostcode(state);
    } else {
      const state = filterPostcode.filter((val) => val !== input.value);
      setFilterPostcode(state);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Filter By Postcode</h1>
      <div className={styles.postcode_container}>
        {postcodes.map((postcode) => (
          <div className={styles.postcode} key={postcode}>
            <input
              className={styles.postcode_input}
              type="checkbox"
              value={postcode}
              onChange={onChange}
            />
            <p className={styles.postcode_label}>{postcode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostcodeFilter;
