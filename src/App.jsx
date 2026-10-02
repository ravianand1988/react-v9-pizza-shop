import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>RK Pizza Laden &mdash; order now</h1>
      <Pizza name="The Fungi Pizza" description="Mushroom, cheese, tomato" />
      <Pizza name="Chicken Teriyaki" description="chicken, soya, brocoli, etc." />
      <Pizza name="Veg Pizza" description="Mozzarella, cheese, tomato" />
      <Pizza name="Baked Potato Pizza" description="unholy potato mash, wtf Minnesota" />
      <Pizza name="The Hawaiian" description="pineapple and ham, wtf America" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
