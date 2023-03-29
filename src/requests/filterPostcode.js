import axios from "axios";

const filterPostcode = (search, setProperties) => {
  axios
    .get(`http://localhost:4000/getProperties${search}`)
    .then(({ data }) => {
      setProperties(data.propertyData);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default filterPostcode;
