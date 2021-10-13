import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../services/products";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import "./ProductCards.css";

export default function ProductCards() {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      const latest = allProducts.slice(
        allProducts.length - 3,
        allProducts.length
      );
      setLatestProducts(latest);
    };
    fetchProducts();
  }, []);

  const CARDS = latestProducts.map((product) => (
    <Card
      className="card"
      sx={{
        width: "30%",
        m: 2,
      }}
    >
      <ProductCard
        _id={product._id}
        name={product.name}
        price={product.price}
        imgURL={product.imgURL}
        key={product._id}
      />
    </Card>
  ));

  if (!latestProducts) return <h1>Loading</h1>;

  return (
    <div className="product-cards">
      <Box
        className="box-product-cards"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className="latest">Latest Hotness</div>
        <Card
          className="card-container"
          variant="outlined"
          sx={{ width: "90%", display: "flex", justifyContent: "center" }}
        >
          {CARDS}
        </Card>
      </Box>
    </div>
  );
}
