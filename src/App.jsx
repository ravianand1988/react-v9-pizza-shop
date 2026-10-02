import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>RK Pizza Laden &mdash; order now</h1>
      <Pizza
        name="The Fungi Pizza"
        description="Mushroom, cheese, tomato"
        image={"/public/pizzas/the_greek.webp"}
      />
      <Pizza
        name="Chicken Teriyaki"
        description="chicken, soya, brocoli, etc."
        image={"/public/pizzas/bbq_ckn.webp"}
      />
      <Pizza
        name="Veg Pizza"
        description="Mozzarella, cheese, tomato"
        image={"/public/pizzas/ital_veggie.webp"}
      />
      <Pizza
        name="Baked Potato Pizza"
        description="unholy potato mash, wtf Minnesota"
        image={"/public/pizzas/sicilian.webp"}
      />
      <Pizza
        name="The Hawaiian"
        description="pineapple and ham, wtf America"
        image={"/public/pizzas/spinach_supr.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
