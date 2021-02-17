import React, { useState } from "react";
import Colors from "./Colors";
import OneColor from "./OneColor";
import ColorPicker from "./ColorPicker";
import { Switch, Route, Redirect } from "react-router-dom";

const Routes = () => {
  const [colors, setColors] = useState([
    { color: "red", hex: "#FF0000" },
    { color: "blue", hex: "#0093FF" },
    { color: "green", hex: "#27BD3B" },
  ]);

  const addColor = (newColor) => {
    setColors((colors) => [...colors, newColor]);
  };

  return (
    <Switch>
      <Route exact path="/colors">
        <Colors colors={colors} />
      </Route>
      <Route exact path="/colors/new">
        <ColorPicker addColor={addColor} />
      </Route>
      <Route path="/colors/:color">
        <OneColor colors={colors} />
      </Route>
      <Redirect to="/colors" />
    </Switch>
  );
};

export default Routes;
