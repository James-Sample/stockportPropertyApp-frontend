import React, { useEffect, useState } from "react";
import axios from "axios";

const FilterBar = () => {
  const [obj, setobj] = useState({});
  const [sort, setSort] = useState({ sort: "price", order: "desc" });
  const [filterPostcode, setFilterPostcode] = useState([]);
  const [search, setSearch] = useState("");
  const base_url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getAllProperties = async () => {
      try {
        const url = `${base_url}?sort=${sort.sort},${
          sort.order
        }&postcode=${filterPostcode.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setobj(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllProperties();
  }, [sort, filterPostcode, search]);
};

export default FilterBar;
