import db from "../db/connection.js";
import Product from "../models/product.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  const user1 = new User({
    username: "nathan",
    email: "nathan",
    password_digest: await bcrypt.hash("test", 11),
  });
  await user1.save();

  const user2 = new User({
    username: "jason",
    email: "test@test.com",
    password_digest: await bcrypt.hash("test", 11),
  });
  await user2.save();

  const user3 = new User({
    username: "diego",
    email: "diego",
    password_digest: await bcrypt.hash("test", 11),
  });
  await user3.save();

  const user4 = new User({
    username: "chace",
    email: "chace",
    password_digest: await bcrypt.hash("test", 11),
  });
  await user4.save();

  // products data that we want inserted into database
  const products = [
    {
      name: "Nike Air More Uptempo",
      imgURL:
        "https://images.footlocker.com/is/image/EBFL2/D8150100_a1?wid=500&hei=500&fmt=png-alpha",
      description:
        "Up the ante and up your game with the classic Nike Air More Uptempo. Nothing’s out of reach when you have a midsole made of three performance Air-Sole® units. Full-grain leather with elastic reinforcement combines for a premium fit and feel, and the durable rubber outsole ensures grip and reliable traction.",
      price: "170",
      category: "Street",
      brand: "Nike",
      gender: "Male",
    },
    {
      name: "Nike Air Max CB '94 Low",
      imgURL:
        "https://images.footlocker.com/is/image/EBFL2/D5160400_a1?wid=500&hei=500&fmt=png-alpha",
      description:
        "Inspired by Charles Barkley's loud and proud style, the Nike Air Max CB '94 dipped into the archives and returned with this classic from the golden age of basketball. Charles Barkley's iconic sneaker features a low-top design with Max Air cushioning for a fresh look and a smooth ride. Rock this old school classic off-court for a hoops-inspired street-ready style.",
      price: "160",
      category: "Street",
      brand: "Nike",
      gender: "Male",
    },
    {
      name: "Nike Air More Uptempo",
      imgURL:
        "https://images.footlocker.com/is/image/EBFL2/D8150100_a1?wid=500&hei=500&fmt=png-alpha",
      description:
        "Up the ante and up your game with the classic Nike Air More Uptempo. Nothing’s out of reach when you have a midsole made of three performance Air-Sole® units. Full-grain leather with elastic reinforcement combines for a premium fit and feel, and the durable rubber outsole ensures grip and reliable traction.",
      price: "130",
      category: "Street",
      brand: "Nike",
      gender: "Male",
    },
    {
      name: "Nike Air More Uptempo",
      imgURL:
        "https://images.footlocker.com/is/image/EBFL2/D8150100_a1?wid=500&hei=500&fmt=png-alpha",
      description:
        "Up the ante and up your game with the classic Nike Air More Uptempo. Nothing’s out of reach when you have a midsole made of three performance Air-Sole® units. Full-grain leather with elastic reinforcement combines for a premium fit and feel, and the durable rubber outsole ensures grip and reliable traction.",
      price: "130",
      category: "Street",
      brand: "Nike",
      gender: "Male",
    },
    {
      name: "Nike Air More Uptempo",
      imgURL:
        "https://images.footlocker.com/is/image/EBFL2/D8150100_a1?wid=500&hei=500&fmt=png-alpha",
      description:
        "Up the ante and up your game with the classic Nike Air More Uptempo. Nothing’s out of reach when you have a midsole made of three performance Air-Sole® units. Full-grain leather with elastic reinforcement combines for a premium fit and feel, and the durable rubber outsole ensures grip and reliable traction.",
      price: "130",
      category: "Street",
      brand: "Nike",
      gender: "Male",
    },
  ];

  // insert products into database
  await Product.insertMany(products);
  console.log("Created users & products!");

  // close database connection. done.
  db.close();
};

insertData();
