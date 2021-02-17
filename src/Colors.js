import React from "react";
import { Link } from "react-router-dom";
import "./Colors.css";

const Colors = ({ colors }) => {
  return (
    <div className="Colors">
      <h3>Welcome to the color factory.</h3>
      <h1>
        <Link to="/colors/new">Add a color</Link>
      </h1>
      <div>
        Please select a color.
        <ul>
          {colors.map((c) => (
            <li>
              <Link exact to={`/colors/${c.color}`}>
                {c.color}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Colors;
