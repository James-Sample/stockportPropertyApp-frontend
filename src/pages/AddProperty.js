import React, { useState } from "react";
import "../styles/addproperty.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AWS from "aws-sdk";
import Alert from "../components/Alert";
import postData from "../requests/postData";
import postcodes from "../data/postcode.json";
import { noTitle, noPrice, uploadedProperty } from "../components/ToastAlerts";

const {
  REACT_APP_DEFAULT_IMAGE,
  REACT_APP_AWS_S3_ACCESS_KEY_ID,
  REACT_APP_AWS_S3_SECRET_KEY,
  REACT_APP_AWS_S3_REGION,
  REACT_APP_S3_BUCKET_NAME,
} = process.env;

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      postcode: "SK1",
      type: "Flat",
      bedrooms: "1",
      bathrooms: "1",
      price: "",
      email: "contact@stockport.com",
      image: `${REACT_APP_DEFAULT_IMAGE}`,
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const [alert, setAlert] = useState(initialState.alert);
  // start image code
  AWS.config.update({
    accessKeyId: `${REACT_APP_AWS_S3_ACCESS_KEY_ID}`,
    secretAccessKey: `${REACT_APP_AWS_S3_SECRET_KEY}`,
    region: `${REACT_APP_AWS_S3_REGION}`,
    signatureVersion: "v4",
  });

  const s3 = new AWS.S3();
  const [imageUrl, setImageUrl] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadToS3 = async (event) => {
    if (!file) {
      return;
    }
    const params = {
      Bucket: `${REACT_APP_S3_BUCKET_NAME}`,
      Key: `${Date.now()}.${file.name}`,
      Body: file,
    };
    const { Location } = await s3.upload(params).promise();
    event.preventDefault();
    setImageUrl(Location);
    setFields((prevState) => ({ ...prevState, image: Location }));
    console.log("uploading to s3", Location);
  };

  // const uploadToS3 = async (event) => {
  //   const data = new FormData();
  //   data.append("file", file, file.name);
  //   console.log([...data]);
  //   if (data) {
  //     axios
  //       // ({
  //       //   method: "post",
  //       //   url: `${REACT_APP_API_URL}/upload`,
  //       //   body: data,
  //       // })
  //       .post(`${REACT_APP_API_URL}/upload`, data)
  //       // .post("https://httpbin.org/post", data)
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

  // end image code

  const handleAddproperty = (event) => {
    event.preventDefault();
    if (!fields.title) {
      noTitle();
    }
    if (!fields.price) {
      noPrice();
    } else {
      postData(fields, setAlert);
      // setAlert({ message: "", isSuccess: false });
      uploadedProperty();
      setFields(initialState.fields);
      setImageUrl(null);
    }
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="addproperty">
      <Alert message={alert.message} success={alert.isSuccess} />
      <h1>Add Properties</h1>
      <form className="property-form" onSubmit={handleAddproperty}>
        <label htmlFor="title">
          Title:
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="3 Bed House in Romiley"
          />
        </label>
        <label htmlFor="postcode">
          Postcode:
          <select
            id="postcode"
            name="postcode"
            value={fields.postcode}
            onChange={handleFieldChange}
          >
            {postcodes.map((postcode) => (
              <option key={postcode} value={postcode}>
                {postcode}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="type">
          Type:
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Detached">Detached</option>
            <option value="Cottage">Cottage</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms:
          <select
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7+">7+</option>
          </select>
        </label>
        <label htmlFor="bathrooms">
          Bathrooms:
          <select
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </label>
        <label htmlFor="price">
          Price:
          <input
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
            placeholder="Your most recent valuation..."
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            placeholder="e.g. yourname@gmail.com"
          />
        </label>
        <label htmlFor="image">
          Upload a picture:
          <input
            id="image"
            name="image"
            type="file"
            onChange={handleFileSelect}
          />
          {file && (
            <div style={{ marginTop: "10px" }}>
              <button onClick={uploadToS3} type="button">
                Upload
              </button>
            </div>
          )}
          {imageUrl && (
            <div style={{ marginTop: "10px" }}>
              <img src={imageUrl} alt="uploaded" />
            </div>
          )}
        </label>
        <button className="submit-button" type="submit">
          Add Property
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProperty;
