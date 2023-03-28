import axios from "axios";

const getData = (setProperties, setAlert) => {
  axios
    .get("http://localhost:4000/getProperties")
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
