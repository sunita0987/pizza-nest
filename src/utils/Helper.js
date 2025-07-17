import spicyPaneer from "../assets/images/Tandoori.png";
import cheese from "../assets/images/chese2.png";
import veggie from "../assets/images/veggie.png";
import masalaPaneer from "../assets/images/masalapaneer.png";

import img1 from "../assets/images/pizza1.png";
import img2 from "../assets/images/pizza2.png";
import img3 from "../assets/images/pizza3.png";
import img4 from "../assets/images/pizza4.png";
import img5 from "../assets/images/pizza5.png";
import img6 from "../assets/images/pizza6.png";
import img7 from "../assets/images/pizza7.png";

import slice from "../assets/images/rectanglepizza.png";



import farmhouse from "../assets/images/vegpizza.png";
import masala from "../assets/images/pannermasala.png";
import combo from "../assets/images/drink.png";

export const PIZZAS = [
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

export const TEST_DATA = [
  {
    name: "Aarav Mehta",
    role: "Software Developer",
    text: " The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snck-just in pizza from! Super satisfying and definitely ordering again. ",
    pizza: slice,
  },
  {
    name: "Jiya Sharma",
    role: "UI/UX Designer",
    text: " The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snck-just in pizza from! Super satisfying and definitely ordering again.",
    pizza: slice,
  },
  {
    name: "Rahul Sharma",
    role: "front-end developer",
    text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snck-just in pizza from! Super satisfying and definitely ordering again.",
    pizza: slice,
  },
];

export const CRAVINGS_DATA = {
  All: [
    {
      price: "₹229 / ₹359 / ₹499",
      name: "Farmhouse Magic",
      description:
        "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
      img: farmhouse,
    },
    {
      price: "₹279 / ₹399 / ₹519",
      name: "Masala Paneer",
      description:
        "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
      img: masala,
    },
    {
      price: "₹379",
      name: "Solo Meal Combo",
      description:
        "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
      img: combo,
    },
  ],
  "Veg Pizzas": [
    {
      price: "₹229 / ₹359 / ₹499",
      name: "Farmhouse Magic",
      decscription:
        "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
      img: farmhouse,
    },
    {
      price: "₹279 / ₹399 / ₹519",
      name: "Masala Paneer",
      description:
        "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
      img: masala,
    },
  ],
  "Non-Veg Pizzas": [
    {
      price: "₹299 / ₹419 / ₹549",
      name: "Chicken Tikka",
      description:
        "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
      img: masala,
    },
  ],

  "Combos & Drinks": [
    {
      price: "₹379",
      name: "Solo Meal Combo",
      decscription:
        "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
      img: combo,
    },
  ],
  "Sides & Dips": [
    {
      price: "₹99",
      name: "Garlic Bread",
      decscription:
        "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
      img: combo,
    },
  ],
};

export const GALLERY_IMG = [
  {
    image: img1,
    colSpan: "col-span-1 ",
    rowSpan: "row-span-2 ",
  },
  {
    image: img2,
    colSpan: "col-span-3 ",
    rowSpan: "row-span-3 ",
  },
  {
    image: img3,
    colSpan: "col-span-1 ",
    rowSpan: "row-span-2 ",
  },
  {
    image: img4,
    colSpan: "col-span-1 ",
    rowSpan: "row-span-2 ",
  },
  {
    image: img5,
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    image:img6,
    colSpan: "col-span-1 ",
    rowSpan: "row-span-1 ",
  },
  {
    image: img7,
    colSpan: "col-span-1 ",
    rowSpan: "row-span-2 ",
  },
];
