import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../services/products";
import { Box, Card, Typography } from "@mui/material";
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

  const CARDS = latestProducts.map((product, i) => (
    <div className="latest-products-card-container">
      <ProductCard
        _id={product._id}
        name={product.name}
        price={product.price}
        imgURL={product.imgURL}
        key={product._id}
      />
    </div>
  ));

  if (!latestProducts) return <h1>Loading</h1>;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        textAlign: "center",
        width: "100%",
        height: "100%"
      }}
    >
    <Typography 
      gutterBottom 
      color="text.secondary"
      sx={{ fontSize: 42 }}
    >
      Latest Hotness
    </Typography>
      <Card
        className="latest-products-cards-container"
        variant="outlined"
      >
        {CARDS}
      </Card>
    </Box>
  );
}
