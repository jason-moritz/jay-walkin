import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Product from "../../components/Product/Product";
import { getProducts } from "../../services/products";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./Products.css";


export default function Products(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const allProducts = await getProducts()
            setProducts(allProducts)
        }
        fetchProducts()
    },[])

    return (
        <Layout user={props.user}>
            <div className="products">
            <Box>
                <Card variant="outlined" className="cards-container" sx={{ maxWidth: 800 }}>
                    {products.map((product) => (
                        <CardContent className="card-content-container">
                            <Product
                                _id={product._id}
                                name={product.name}
                                imgURL={product.imgURL}
                                price={product.price}
                                key={product._id}
                            />
                        </CardContent>
                    ))}
                </Card>
            </Box>    
            </div>
        </Layout>
    )
}
