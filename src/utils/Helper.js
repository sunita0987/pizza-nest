import spicyPaneer from "../assets/images/Tandoori.png";
import cheese from "../assets/images/chese2.png";
import veggie from "../assets/images/veggie.png";
import masalaPaneer from "../assets/images/masalapaneer.png";

import Galleryimg1 from "../assets/images/pizza1.png";
import Galleryimg2 from "../assets/images/pizza2.png";
import Galleryimg3 from "../assets/images/pizza3.png";
import Galleryimg4 from "../assets/images/pizza4.png";
import Galleryimg5 from "../assets/images/pizza5.png";
import Galleryimg6 from "../assets/images/pizza6.png";
import Galleryimg7 from "../assets/images/pizza7.png";


import slice1 from "../assets/images/rectanglepizza.png";
import slice2 from "../assets/images/rectanglepizza.png";
import men from "../assets/images/1stimage.png";
import women from "../assets/images/2ndimage.png";
import ui from "../assets/images/3rdimage.png";


import farmhouse from "../assets/images/vegpizza.png";
import masala from "../assets/images/pannermasala.png";
import combo from "../assets/images/drink.png";

export const  Pizzas = [
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
]

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


export const DATA = {
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
        image: Galleryimg1,
        colSpan: 'col-span-1 ',
        rowSpan: 'row-span-1 ',
    },
    {
        image: Galleryimg2,
        colSpan: 'col-span-1 ',
        rowSpan: 'row-span-1 ',
    },
    {
        image: Galleryimg3,
        colSpan: 'col-span-1 ',
        rowSpan: 'row-span-2 ',
    },
    {
        image: Galleryimg4,
        colSpan: 'col-span-2 ',
        rowSpan: 'row-span-1 ',
    },
    {
        image: Galleryimg5,
        colSpan: 'col-span-1',
        rowSpan: 'row-span-1',
    },
    {
        image: Galleryimg6,
        colSpan: 'col-span-2 ',
        rowSpan: 'row-span-1 ',
    },
    {
        image: Galleryimg7,
        colSpan: 'col-span-2 ',
        rowSpan: 'row-span-1 ',
    },

]
