import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProducts } from "../../services/products";
import { Box, Card, Typography } from '@mui/material/';
import "./Products.css";


export default function Products(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const allProducts = await getProducts();
            setProducts(allProducts);
        };
        fetchProducts();
    }, [])

    const CARDS =
        products.map((product, i) => (
            <div 
                key={i}
                className="products-card-container"
            >
                <ProductCard
                    _id={product._id}
                    name={product.name}
                    price={product.price}
                    imgURL={product.imgURL}
                    key={product._id}
                />
            </div>
        ))

    if (!products) return <h1>Loading</h1>

    return (
        <Layout user={props.user}>
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
                    All Shoes
                </Typography>
                <Card 
                    className="products-cards-container"
                    variant="outlined"
                    sx={{
                        overflowY: "scroll"
                    }}
                >
                    {CARDS}
                </Card>
            </Box>
        </Layout>
    )
}
