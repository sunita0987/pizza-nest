import spicyPaneer from "../assets/images/Tandoori.png";
import cheese from "../assets/images/chese2.png";
import veggie from "../assets/images/veggie.png";
import masalaPaneer from "../assets/images/masalapaneer.png";
export const pizzas = [
  {
    name: "Tandoori Paneer",
    price: "₹279",
    description:
      "Tandoori-marinated paneer, onion, green & red capsicum, mozzarella, Indian herbs",
    image: spicyPaneer,
  },
  {
    name: "Cheese Overload",
    price: "₹299",
    description:
      "Mozzarella, Cheddar, Processed Cheese, Tomato Sauce,  buttery golden crust",
    image: cheese,
  },
  {
    name: "Veggie Fiesta",
    price: "₹239",
    description:
      "Bell peppers, onion, mushrooms, zucchini or brinjal, mozzarella cheese",
    image: veggie,
  },
  {
    name: "Masala Paneer",
    price: "₹249",
    description:
      "Masala-marinated paneer, sautéed onions, green & red capsicum, mozzarella cheese",
    image: masalaPaneer,
  },
];

import slice1 from "../assets/images/rectanglepizza.png";
import slice2 from "../assets/images/rectanglepizza.png";
import men from "../assets/images/1stimage.png";
import women from "../assets/images/2ndimage.png";
import ui from "../assets/images/3rdimage.png";

export const TEST_DATA = [
  {
    name: "Aarav Mehta",
    role: "Software Developer",
    text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
    image: men,
    pizza: slice1,
  },
  {
    name: "Neha Sharma",
    role: "UI/UX Designer",
    text: "Absolutely loved the spicy paneer pizza! The crust was crispy and the toppings were fresh and flavorful. A perfect balance of spice and cheese.",
    image: women,
    pizza: slice2,
  },
  {
    name: "Neha Sharma",
    role: "UI/UX Designer",
    text: "Absolutely loved the spicy paneer pizza! The crust was crispy and the toppings were fresh and flavorful. A perfect balance of spice and cheese.",
    image: ui,
    pizza: slice2,
  },
];
