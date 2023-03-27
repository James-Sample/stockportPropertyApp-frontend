import React from "react";
import "../styles/addproperty.css";

const AddProperty = () => {
  return (
    <div className="addproperty">
      <h1>Add Properties</h1>
      <form className="property-form">
        <label htmlFor="title">
          Title:
          <input
            id="title"
            name="title"
            // value={fields.title}
            // onChange={handleFieldChange}
            placeholder="3 Bed House"
          />
        </label>
        <label htmlFor="postcode">
          Postcode:
          <input
            id="postcode"
            name="postcode"
            placeholder="Start typing Postcode"
          />
        </label>
        <label htmlFor="type">
          Type:
          <select
            id="type"
            name="type"
            // value={fields.type}
            // onChange={handleFieldChange}
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
            id="bedroom"
            name="bedroom"
            // value={fields.bedroom}
            // onChange={handleFieldChange}
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
            // value={fields.bathrooms}
            // onChange={handleFieldChange}
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
            // value={fields.price}
            // onChange={handleFieldChange}
            placeholder="Your most recent valuation..."
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            // value={fields.email}
            // onChange={handleFieldChange}
            placeholder="e.g. yourname@gmail.com"
          />
        </label>
        <label htmlFor="image">Image:</label>
      </form>
    </div>
  );
};

export default AddProperty;
