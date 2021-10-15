import db from "../db/connection.js";
import Product from "../models/product.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  const user1 = new User({
    username: "nathan",
    email: "nathan@test.com",
    password_digest: await bcrypt.hash("test", 11),
    cart: [],
  });
  await user1.save();

  const user2 = new User({
    username: "jason",
    email: "test@test.com",
    password_digest: await bcrypt.hash("test", 11),
    cart: [],
  });
  await user2.save();

  const user3 = new User({
    username: "diego",
    email: "diego@test.com",
    password_digest: await bcrypt.hash("test", 11),
    cart: [],
  });
  await user3.save();

  const user4 = new User({
    username: "chace",
    email: "chace@test.com",
    password_digest: await bcrypt.hash("test", 11),
    cart: [],
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
      userId: null,
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
      userId: null,
    },
    {
      name: "adidas ZX Fury",
      imgURL:
        "https://images.footlocker.com/is/image/EBFL2/GW0369_a1?wid=500&hei=500&fmt=png-alpha",
      description:
        "Legend meets icon! The adidas ZX Fury fuses two of the most iconic sneaker brands – adidas and Reebok. The futuristic look of Reebok’s Instapump Fury replaces the laces on adidas’ legendary ZX 8000 to deliver unrivaled style and comfort. A striking combination of bold colors and cutting-edge technology make them a must-have in your collection. Inspired by the OG ZX, the vibrant colorways flash throughout the silhouette bringing summer vibes to your rotation. Get the best of both worlds while pumping up the fury with the adidas ZX Fury!",
      price: "200",
      category: "Street",
      brand: "Adidas",
      gender: "Male",
      userId: null,
    },
    {
      name: "adidas 4D Fusio",
      imgURL:
        "https://images.footlocker.com/is/image/EBFL2/FY5929_a1?wid=500&hei=500&fmt=png-alpha",
      description:
        "The adidas Originals 4D Fusio will help you blaze through intense workouts easily. Made with TPU clip and glow-in-the-dark elements, these shoes will make you pop out in style..",
      price: "149.99",
      category: "Street",
      brand: "Adidas",
      gender: "Male",
      userId: null,
    },
    {
      name: "Jordan 6 Rings",
      imgURL:
        "https://images.footlocker.com/is/image/EBFL2/22992106_a1?wid=500&hei=500&fmt=png-alpha",
      description:
        "The Men’s Jordan 6 Rings is a classic hybrid sneaker that combines all six of the Air Jordan models Michael Jordan wore en route to his six championships. The unique design combines elements of the Air Jordan 6, Air Jordan 7, and Air Jordan 8 from his first three-peat from 1991-93; and the Air Jordan 11, Air Jordan 12, and Air Jordan 13 from the second set of consecutive championships from 1996-98. The most pronounced details from the six iconic models include the sole unit of the AJ 13, the patent leather mudguard of the AJ 11, the straps and chenille Jumpman tongue patch of the AJ 8, and the rear “spoiler” heel tab of the AJ 6. Smaller details call out the AJ 7 and AJ 12, with the perforated detailing and “TWO3” text running down the tongue, respectively. All these details combine to form a fresh silhouette that still retains the iconic style of the originals.",
      price: "170",
      category: "Street",
      brand: "Jordan",
      gender: "Male",
      userId: null,
    },
    {
      name: "Nike Adapt Auto Max",
      imgURL:
        "https://images.footlocker.com/is/image/EBFL2/Z6804001_a1?wid=500&hei=500&fmt=png-alpha",
      description:
        "Define your future while celebrating the past with these Nike Adapt Auto Max Shoes. Made with FitAdapt technology, the Adapt Auto Max extends the storied concept into 2020 with power laces that allow you to set and save the perfect fit, including customized lighting..",
      price: "400",
      category: "Street",
      brand: "Nike",
      gender: "Male",
      userId: null,
    },
    {
      name: "PUMA x Alexander John G-Tag",
      imgURL:
        "https://images.footlocker.com/is/image/EBFL2/93233201_a1?wid=500&hei=500&fmt=png-alpha",
      description:
        "For artist, designer, and visionary Alexander-John, the creativity never stops. Alexander-John has combined his eye-popping style with the iconic PUMA Suede in the G-Tag Suede x Alexander-John. Step into a classic like you've never seen it before today.",
      price: "250",
      category: "Street",
      brand: "Puma",
      gender: "Male",
      userId: null,
    },
    {
      name: "Air Yeezy 2 Red October",
      imgURL:
        "https://styleguide-farfetch.blackandwhite-ff.com/BWStaticContent/10000/c06c0f3b-dad8-4683-905f-be0ae03dfbf0_09-yeezyredoct.jpg",
      description:
        "Handmade upper woven with tubular fabric ribbons,Suede label with Valentino Garavani rubber logo on the tongue.",
      price: "980.00",
      category: "Casual",
      brand: "VALENTINO GARAVANI",
      gender: "Male",
      userId: null,
    },
    {
      name: "Jordan x Dior Air Jordan High sneakers",
      imgURL:
        "https://styleguide-farfetch.blackandwhite-ff.com/BWStaticContent/10000/5898d60d-fe91-4203-ad45-79d25f9c0a11_01-ajdior.jpg",
      description:
        "Supplied by a premier sneaker marketplace dealing with unworn, already sold out, in demand rarities. Each product is rigorously inspected by experienced experts guaranteeing authenticity. These red Air Yeezy sneakers are crafted from leather and feature a round toe, a touch strap fastening, a lace-up front fastening, a logo patch at the tongue, a signature Nike swoosh, a flat rubber sole and a touch strap fastening.",
      price: "21,630",
      category: "Casual",
      brand: "Nike",
      gender: "Male",
      userId: null,
    },
  ];

  // insert products into database
  await Product.insertMany(products);
  console.log("Created users & products!");

  // close database connection. done.
  db.close();
};

insertData();
