import Layout from "../../components/Layout/Layout";
import ProductCards from "../../components/ProductCards/ProductCards";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import Slider from "../../components/Slider/Slider";
import Banner1 from "../../assets/Banner1.jpeg";
import Banner2 from "../../assets/Banner2.jpg";
import Banner6 from "../../assets/Banner6.jpg";

export default function Home(props) {
  let items = [
    {
      name: "EXPLORE",
      description: "Adventure awaits with JayWalkin",
      image: Banner6,
      link: "/products/",
      button: "Shop Now",
    },

    {
      name: "FIND YOUR STYLE",
      description: "JayWalkin offers a wide collection of shoes",
      image: Banner1,
      link: "/products/",
      button: "View All",
    },
    {
      name: "NEW ARRIVAL",
      description: "Start JayWalkin Now",
      image: Banner2,
      link: "/products/616850296d03be26618efd08",
      button: "Shop Latest Shoe",
    },
  ];
  return (
    <Layout user={props.user}>
      <div className="home-container">
        <Carousel>
          {items.map((item, i) => (
            <Slider key={i} item={item} />
          ))}
        </Carousel>
        <div className="latest-container">
          <ProductCards />
        </div>
      </div>
    </Layout>
  );
}
