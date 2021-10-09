import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/products";
import Layout from "../../components/Layout/Layout";


export default function Home(props) {
    const [latestShoes, setLatestShoes] = useState([])

    useEffect(() => {
        const fetchShoes = async() => {
            const allShoes = await getProducts()
            setLatestShoes(allShoes.slice(0, 3))
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
                        {latestShoes.map((latestShoe) => (
                            <div className="shoe-card">
                                <div className="shoe-container">
                                    <Link to={`/product/${latestShoe._id}`}>
                                        <img src={latestShoe.imgURL} alt={latestShoe._id} />
                                        <div className="shoe-info">
                                            <div>{latestShoe.name}</div>
                                            <div>{latestShoe.price}</div>
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
