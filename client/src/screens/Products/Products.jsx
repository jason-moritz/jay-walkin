import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Product from "../../components/Product/Product";
import { getProducts } from "../../services/products";


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
                {products.map((product) => (
                    <Product
                        _id={product._id}
                        name={product.name}
                        imgURL={product.imgURL}
                        price={product.price}
                        key={product._id}
                    />
                ))}    
            </div>
        </Layout>
    )
}
