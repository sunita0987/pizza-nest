import React from "react";
import PizzaCard from "../components/PizzaCard";
import spicyPaneerImg from "../assets/images/spicypanner.png";
import cheeseBurstImg from "../assets/images/cheese.png";

const Card = () => {
  const pizzas = [
    {
      name: "SPICY PANEER",
      price: 199,
      image: spicyPaneerImg,
    },
    {
      name: "CHEESE BURST",
      price: 299,
      image: cheeseBurstImg,
    },
  ];

  return (
    <div className="min-h-full bg-[#ffffff] flex flex-col items-center py-10">
      <div className="flex flex-wrap gap-6 justify-center w-full p-4">
        {pizzas.map((pizza, index) => (
          <PizzaCard
            key={index}
            name={pizza.name}
            price={pizza.price}
            image={pizza.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
