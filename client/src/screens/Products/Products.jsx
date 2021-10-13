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
        products.map(product => (
            <Card
                className="card"
                key={product._id}
            >
                    <ProductCard
                        _id={product._id}
                        name={product.name}
                        price={product.price}
                        imgURL={product.imgURL}
                        key={product._id}
                    />
            </Card>
        ))

    if (!products) return <h1>Loading</h1>

    return (
        <Layout user={props.user}>
            <div className="product-cards">
                <Box
                    className="box-product-cards"
                    sx={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        justifyContent: "center", 
                        alignItems: "center" 
                    }}
                >
                    <Typography 
                        gutterBottom 
                        sx={{ fontSize: 48 }}
                    >
                        View All Shoes
                    </Typography>
                    <Card 
                        className="card-container"
                        variant="outlined"
                        sx={{ 
                            width: "90%", 
                            display: "flex", 
                            flexDirection: "row", 
                            flexWrap: "wrap", 
                            alignItems: "center", 
                            justifyContent: "center" 
                        }}
                    >
                        {CARDS}
                    </Card>
                </Box>
            </div>
        </Layout>
    )
}
