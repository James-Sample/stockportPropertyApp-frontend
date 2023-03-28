import axios from "axios";

const postData = (fields, setAlert) => {
  axios
    .post("http://localhost:4000/addProperty", fields)
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
