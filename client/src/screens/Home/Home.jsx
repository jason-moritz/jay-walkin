import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/products";
import Layout from "../../components/Layout/Layout";


export default function Home(props) {
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        const fetchShoes = async() => {
            const allProducts = await getProducts()
            const latest = allProducts.slice((allProducts.length - 3), allProducts.length)
            setLatestProducts(latest)
        };
        fetchShoes();
    },[])

    return (
        <Layout user={props.user}>
            <div className="home-container">
                <div className="banner">
                    <img
                        src=""
                        alt="shoe-banner"
                    />
                </div>
                <div className="latest-container">
                    <div className="latest-label">Latest</div>
                    <div className="latest-container">
                        {latestProducts.map((latestProduct) => (
                            <div className="phoe-card">
                                <div className="phoe-container">
                                    <Link to={`/products/${latestProduct._id}`}>
                                        <img src={latestProduct.imgURL} alt={latestProduct._id} />
                                        <div className="product-info">
                                            <div>{latestProduct.name}</div>
                                            <div>{latestProduct.price}</div>
                                        </div>
                                    </Link>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
