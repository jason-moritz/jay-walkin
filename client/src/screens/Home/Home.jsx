import Layout from "../../components/Layout/Layout";
import ProductCards from "../../components/ProductCards/ProductCards";


export default function Home(props) {
    return (
        <Layout user={props.user}>
            <div className="home-container">
                <div className="banner">
                    <img
                        src="https://wallpapercave.com/wp/wp2927406.jpg"
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
