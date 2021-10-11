import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../services/products";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./ProductCards.css";


export default function ProductCards() {
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const allProducts = await getProducts();
            const latest = allProducts.slice((allProducts.length - 3), allProducts.length);
            setLatestProducts(latest);
        };
        fetchProducts();
    }, [])

    const CARDS =
        latestProducts.map(product => (
            <CardContent>
                <ProductCard
                    _id={product._id}
                    name={product.name}
                    price={product.price}
                    imgURL={product.imgURL}
                    key={product._id}
                />
            </CardContent>
        ))

    if (!latestProducts) return <h1>Loading</h1>

    return (
        <div className="product-cards">
            <Box>
                <div className="latest">Latest Hotness</div>
                <Card variant="outlined" className="cards">{CARDS}</Card>
            </Box>
        </div>
    )
}
