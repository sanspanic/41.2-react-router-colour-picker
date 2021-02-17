import React from "react";
import { useParams, Link } from "react-router-dom";
import "./OneColor.css";

const OneColor = ({ colors }) => {
  const { color } = useParams();

  const currColor = colors.filter((c) => c.color === color)[0];

  console.log(currColor);

  return (
    <div className="OneColor" style={{ backgroundColor: currColor.hex }}>
      <h1>WOW! What a color {currColor.color} is!</h1>
      <div>
        <Link to="/colors">Back</Link>
      </div>
    </div>
  );
};

export default OneColor;
