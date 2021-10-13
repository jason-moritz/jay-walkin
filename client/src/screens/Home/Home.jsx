import Layout from "../../components/Layout/Layout";
import ProductCards from "../../components/ProductCards/ProductCards";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import Slider from "../../components/Slider/Slider";
import Banner1 from "../../assets/Banner1.jpeg";
import Banner from "../../assets/Banner.jpeg";
import Banner3 from "../../assets/Banner3.jpeg";

export default function Home(props) {
  let items = [
    {
      name: "FIND YOUR STYLE",
      description: "JayWalkin offers a wide collection of shoes",
      image: Banner1,
      link: "/products/",
      button: "Shop Now",
    },
    {
      name: "ALWAYS ON YOUR GAME",
      description:
        "Sign Up for JayWalkin to receive the latest updates on new shoe DROPS",
      image: Banner,
      link: "/sign-up/",
      button: "Sign Up Today",
    },
    {
      name: "REALIZE YOUR IDENTITY",
      description: "Pick out a shoe that defines YOU",
      image: Banner3,
      link: "/products/",
      button: "Shop Now",
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
