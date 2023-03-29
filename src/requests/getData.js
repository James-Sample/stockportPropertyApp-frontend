import axios from "axios";

const getData = (setProperties, setAlert) => {
  const { REACT_APP_API_URL } = process.env;
  axios
    .get(`${REACT_APP_API_URL}/getProperties`)
    .then(({ data }) => {
      setProperties(data.propertyData);
    })
    .catch(() => {
      setAlert({
        message: "Unable to retrieve properties",
        isSuccess: false,
      });
    });
};

export default getData;
