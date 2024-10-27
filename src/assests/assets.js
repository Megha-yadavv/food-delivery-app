import food1 from "./food1.jpg";
import food2 from "./food2.jpg";
import food3 from "./food3.jpg";
import food4 from "./food4.jpg";
import food5 from "./food5.jpg";
import food6 from "./food6.jpg";
import food7 from "./food7.jpg";
import food8 from "./food8.jpg";
import food9 from "./food9.jpg";
import food10 from "./food10.jpg";

import food11 from "./food11.jpg";
import food12 from "./food12.jpg";
import food13 from "./food13.jpg";
import food14 from "./food14.jpg";
import food15 from "./food15.jpg";
import food16 from "./food16.jpg";
import food17 from "./food17.jpg";
import food18 from "./food18.jpg";
import food19 from "./food19.jpg";
import food20 from "./food20.jpg";
import food21 from "./food21.jpg";
import food22 from "./food22.jpg";
import food23 from "./food23.jpg";
import food24 from "./food24.jpg";
import food25 from "./food25.jpg";
import food26 from "./food26.jpg";
import food27 from "./food27.jpg";
import food28 from "./food28.jpg";

import drink1 from "./drink1.jpg";
import drink2 from "./drink2.jpg";
import drink3 from "./drink3.jpg";
import drink4 from "./drink4.jpg";
import play_store from './play_store.png';
import app_store from './app_store.png';
import empty_cart from './empty-cart.png';

import menu_salads from "./menu-salads.jpg";
import menu_pure_veg from "./menu-pure-veg.jpg";
import menu_drinks from "./menu-drinks.jpg";
import menu_italian from "./menu-italian.jpg";
import menu_chinese from "./menu-chinese.jpg";
import menu_indian from "./menu-indian.jpg";
import menu_dessert from "./menu-dessert.jpg";
import menu_snacks from "./menu-snacks.jpg";
import rating_stars from "./rating_stars.png";

export const assets = { rating_stars, play_store, app_store, empty_cart};

export const menu_list = [
  {
    menu_name: "Salad",
    menu_image: menu_salads,
  },
  {
    menu_name: "Pure Veg",
    menu_image: menu_pure_veg,
  },
  {
    menu_name: "Snacks",
    menu_image: menu_snacks,
  },
  {
    menu_name: "Indian",
    menu_image: menu_indian,
  },
  {
    menu_name: "Chinese",
    menu_image: menu_chinese,
  },
  {
    menu_name: "Italian",
    menu_image: menu_italian,
  },
  {
    menu_name: "Dessert",
    menu_image: menu_dessert,
  },
  {
    menu_name: "Beverages",
    menu_image: menu_drinks,
  },
];

export const food_list = [
  {
    _id: "1",
    name: "Avacado salad",
    image: food13,
    price: 229,
    description: "Fresh vegetable salad served with a side of warm bread.",
    category: "Salad",
  },
  {
    _id: "2",
    name: "Cheese salad",
    image: food18,
    price: 199,
    description:
      "A hearty salad with cottage cheese and fresh garden vegetables.",
    category: "Salad",
  },
  {
    _id: "3",
    name: "Fish salad",
    image: food25,
    price: 299,
    description:
      "Crispy fried fish served with a medley of seasoned vegetables.",
    category: "Salad",
  },
  {
    _id: "4",
    name: "Spicy salad",
    image: food28,
    price: 99,
    description: "A zesty mix of fresh vegetables with a spicy dressing.",
    category: "Salad",
  },
  {
    _id: "5",
    name: "Kadhai paneer",
    image: food14,
    price: 359,
    description: "A rich and creamy Indian paneer dish cooked with spices.",
    category: "Pure Veg",
  },
  {
    _id: "6",
    name: "Rajma masala",
    image: food15,
    price: 299,
    description: "Spiced kidney beans cooked in a flavorful tomato gravy.",
    category: "Pure Veg",
  },
  {
    _id: "7",
    name: "Naan",
    image: food20,
    price: 15,
    description: "Soft and fluffy Indian flatbread, perfect with curries.",
    category: "Pure Veg",
  },
  {
    _id: "8",
    name: "Spicy lentil",
    image: food21,
    price: 199,
    description: "Lentils cooked with aromatic spices and herbs.",
    category: "Pure Veg",
  },
  {
    _id: "9",
    name: "Burger with fries",
    image: food3,
    price: 469,
    description: "Juicy burger served with crispy fries on the side.",
    category: "Snacks",
  },
  {
    _id: "10",
    name: "Chicken bites",
    image: food4,
    price: 289,
    description: "Crispy chicken bites served with a dipping sauce.",
    category: "Snacks",
  },
  {
    _id: "11",
    name: "Crispy fries",
    image: food26,
    price: 189,
    description: "Fries tossed in a spicy peri-peri seasoning.",
    category: "Snacks",
  },
  {
    _id: "12",
    name: "Roasted chicken",
    image: food7,
    price: 259,
    description: "Tender chicken legs roasted to perfection.",
    category: "Snacks",
  },
  {
    _id: "13",
    name: "Roasted fish",
    image: food2,
    price: 299,
    description: "Deliciously roasted fish with herbs and spices.",
    category: "Indian",
  },
  {
    _id: "14",
    name: "Fish curry",
    image: food16,
    price: 479,
    description: "Fish simmered in a spicy and tangy curry sauce.",
    category: "Indian",
  },
  {
    _id: "15",
    name: "Butter chicken",
    image: food22,
    price: 599,
    description: "Chicken cooked in a creamy tomato-based sauce.",
    category: "Indian",
  },
  {
    _id: "16",
    name: "Masala dosa",
    image: food23,
    price: 199,
    description: "Crispy dosa filled with spiced mashed potatoes.",
    category: "Indian",
  },
  {
    _id: "17",
    name: "Noodles",
    image: food5,
    price: 198,
    description: "Savory noodles served with a flavorful broth.",
    category: "Chinese",
  },
  {
    _id: "18",
    name: "Fried rice",
    image: food17,
    price: 179,
    description: "Stir-fried rice with vegetables and soy sauce.",
    category: "Chinese",
  },
  {
    _id: "19",
    name: "Dumplings",
    image: food19,
    price: 129,
    description: "Steamed dumplings filled with savory meat and vegetables.",
    category: "Chinese",
  },
  {
    _id: "20",
    name: "Spring rolls ",
    image: food11,
    price: 99,
    description: "Crispy spring rolls served with a spicy dipping sauce.",
    category: "Chinese",
  },
  {
    _id: "21",
    name: "Spaghetti",
    image: food8,
    price: 199,
    description: "Classic spaghetti in a tomato basil sauce.",
    category: "Italian",
  },
  {
    _id: "22",
    name: "Alfredo pasta",
    image: food9,
    price: 249,
    description: "Creamy Alfredo sauce over perfectly cooked pasta.",
    category: "Italian",
  },
  {
    _id: "23",
    name: "Macaroni",
    image: food10,
    price: 249,
    description: "Macaroni pasta tossed in a rich and cheesy sauce.",
    category: "Italian",
  },
  {
    _id: "24",
    name: "Pizza",
    image: food27,
    price: 199,
    description: "Classic Italian pizza topped with cheese and tomato sauce.",
    category: "Italian",
  },
  {
    _id: "25",
    name: "Pancakes",
    image: food1,
    price: 159,
    description: "Fluffy pancakes served with syrup and butter.",
    category: "Dessert",
  },
  {
    _id: "26",
    name: "Chocolate cake",
    image: food6,
    price: 149,
    description: "Rich and moist chocolate cake with a creamy frosting.",
    category: "Dessert",
  },
  {
    _id: "27",
    name: "Donuts",
    image: food12,
    price: 299,
    description: "Soft donuts with a sweet glaze.",
    category: "Dessert",
  },
  {
    _id: "28",
    name: "Raspberry pudding",
    image: food24,
    price: 199,
    description: "Creamy pudding topped with fresh raspberries.",
    category: "Dessert",
  },
  {
    _id: "29",
    name: "Iced tea",
    image: drink1,
    price: 49,
    description: "Refreshing iced tea with a hint of lemon.",
    category: "Beverages",
  },
  {
    _id: "30",
    name: "Broccoli juice",
    image: drink2,
    price: 99,
    description: "Healthy juice made from fresh broccoli.",
    category: "Beverages",
  },
  {
    _id: "31",
    name: "Black tea",
    image: drink3,
    price: 29,
    description: "A robust cup of black tea, served hot or cold.",
    category: "Beverages",
  },
  {
    _id: "32",
    name: "Coffee",
    image: drink4,
    price: 69,
    description: "A bold, aromatic brew made from premium roasted beans.",
    category: "Beverages",
  },
];
