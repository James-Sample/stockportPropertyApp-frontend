import React, { useState } from "react";
import "../styles/addproperty.css";
import postData from "../requests/postData";
import Alert from "../components/Alert";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "0",
      bathrooms: "0",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const [alert, setAlert] = useState(initialState.alert);

  // const [image, setImage] = useState([]);

  // const imageHandler = (event) => {
  //   console.log(URL.createObjectURL(event.target.files[0]));
  //   setImage(URL.createObjectURL(event.target.files[0]));
  // };

  const handleAddproperty = (event) => {
    postData(fields, setAlert);
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
  };

  const handleFieldChange = (event) => {
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
            <option value="SK1">SK1</option>
            <option value="SK2">SK2</option>
            <option value="SK3">SK3</option>
            <option value="SK4">SK4</option>
            <option value="SK5">SK5</option>
            <option value="SK6">SK6</option>
            <option value="SK7">SK7</option>
            <option value="SK6">SK8</option>
            <option value="SK9">SK9</option>
            <option value="SK10">SK10</option>
            <option value="SK11">SK11</option>
            <option value="SK12">SK12</option>
            <option value="SK13">SK13</option>
            <option value="SK14">SK14</option>
            <option value="SK15">SK15</option>
            <option value="SK16">SK16</option>
            <option value="SK17">SK17</option>
            <option value="SK18">SK18</option>
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
            <option value="Semi-Detached">Semi-Deteched</option>
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
        {/* <label htmlFor="image">
          Upload a picture:
          <input type="file" onChange={imageHandler} />
          <img src={image} alt="none" />
        </label> */}
        <button className="submit-button" type="submit">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
