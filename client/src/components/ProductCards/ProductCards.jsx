import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../services/products";


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
        <ProductCard
            _id={product._id}
            name={product.name}
            price={product.price}
            imgURL={product.imgURL}
            key={product._id}
        />
        ))

    if (!latestProducts) return <h1>Loading</h1>

    return (
        <div className="product-cards">
            <div className="latest">Latest Hotness</div>
            <div className="cards">{CARDS}</div>
        </div>
    )
}
