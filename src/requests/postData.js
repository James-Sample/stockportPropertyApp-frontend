import axios from "axios";

const postData = (fields, setAlert) => {
  const { REACT_APP_API_URL } = process.env;
  axios
    .post(`${REACT_APP_API_URL}/addProperty`, fields)
    .then(() => {
      setAlert({
        message: "Property Added",
        isSuccess: true,
      });
    })
    .catch(() => {
      setAlert({
        message: "Couldn't add your property, please try again",
        isSuccess: false,
      });
    });
};

export default postData;
