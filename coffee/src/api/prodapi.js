import image1 from "../assets/images/coffeepack.jpeg";
import image2 from "../assets/images/coffeeseeds.jpeg";
import image3 from "../assets/images/coffeeseeds2.jpeg";
import image4 from "../assets/images/coffee7.webp";
import image5 from "../assets/images/coffeecup.jpeg";
import image6 from "../assets/images/coffee8.jpeg";
import image7 from "../assets/images/coffee9.jpeg";
import image8 from "../assets/images/coffee8.jpeg";
import image9 from "../assets/images/coffee9.jpeg";

const prodApi = [
  {
    id: 1,
    image: image1,
    title: "Fresh Arabica Coffee",
    description: "Rich and aromatic coffee beans sourced from premium plantations.",
    price: "₹1199",
    inr: "₹1299",
    category: "coffee",
    bestseller: true,
  },
  {
    id: 2,
    image: image2,
    title: "Espresso Blend",
    description: "Smooth and strong, perfect for your daily espresso shots.",
    price: "₹899",
    inr: "₹999",
    category: "coffee",
    bestseller: false,
  },
  {
    id: 3,
    image:image3,
    title: "Cold Brew Pack",
    description: "Ideal for refreshing iced coffee, naturally sweet and smooth.",
    price: "₹1099",
    inr: "₹1299",
    category: "coffee",
    bestseller: true,
  },
  {
    id: 4,
    image: image4,
    title: "Premium Green Tea",
    description: "Light and healthy, full of antioxidants, perfect for mornings.",
    price: "₹699",
    inr: "₹799",
    category: "tea",
    bestseller: false,
  },
  {
    id: 5,
    image: image5,
    title: "Chocolate Muffin Pack",
    description: "Delicious chocolate muffins, soft and perfect for snacks.",
    price: "₹499",
    inr: "₹599",
    category: "snacks",
    bestseller: true,
  },
  {
    id: 6,
    image: image6,
    title: "Butter Croissant Pack",
    description: "Flaky, buttery French pastry, perfect for breakfast.",
    price: "₹599",
    inr: "₹699",
    category: "snacks",
    bestseller: false,
  },
  {
    id: 7,
    image: image7,
    title: "Veg Sandwich",
    description: "Fresh veggies with herbs and sauces in soft bread, wholesome snack.",
    price: "₹399",
    inr: "₹499",
    category: "snacks",
    bestseller: true,
  },
];

export default prodApi;
