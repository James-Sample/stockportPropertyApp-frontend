/* eslint-disable comma-dangle */
import axios from "axios";

const getData = async (sort, filterPostcode, search, setProperties) => {
  const { REACT_APP_API_URL } = process.env;
  try {
    const url = `${REACT_APP_API_URL}/getProperties?sort=${sort.sort},${
      sort.order
    }&postcode=${filterPostcode.toString()}&search=${search}`;
    const { data } = await axios.get(url);
    setProperties(data.propertyData);
  } catch (err) {
    console.log(err);
  }
};

export default getData;
