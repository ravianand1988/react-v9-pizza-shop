import React from "react";
import { createRoot } from "react-dom";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "RK Pizza Laden"),
    React.createElement(Pizza, {
      name: "The Fungi Pizza",
      description: "Mushroom, cheese, tomato",
    }),
    React.createElement(Pizza, {
      name: "Chicken Teriyaki",
      description: "chicken, soya, brocoli, etc.",
    }),
    React.createElement(Pizza, {
      name: "Veg Pizza",
      description: "Mozzarella, cheese, tomato",
    }),
    React.createElement(Pizza, {
      name: "Baked Potato Pizza",
      description: "unholy potato mash, wtf Minnesota",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "pineapple and ham, wtf America",
    }),
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
