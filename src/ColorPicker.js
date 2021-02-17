import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ColorPicker = ({ addColor }) => {
  const initialState = { color: "", hex: "" };
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(formData);
    setFormData(initialState);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color name</label>
      <input
        id="color"
        name="color"
        type="text"
        placeholder="new color name"
        value={formData.color}
        onChange={handleChange}
      ></input>
      <label htmlFor="hex">HEX code</label>
      <input
        id="hex"
        name="hex"
        type="color"
        placeholder="HEX code"
        value={formData.color}
        onChange={handleChange}
      ></input>
      <button>Submit</button>
    </form>
  );
};

export default ColorPicker;
