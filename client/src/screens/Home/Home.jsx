import Layout from "../../components/Layout/Layout";
import ProductCards from "../../components/ProductCards/ProductCards";


export default function Home(props) {
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
                    <ProductCards />
                </div>
            </div>
        </Layout>
    )
}
