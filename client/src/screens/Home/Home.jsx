import Layout from "../../components/Layout/Layout";
import ProductCards from "../../components/ProductCards/ProductCards";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import Slider from "../../components/Slider/Slider";
import Banner from "../../assets/Banner.jpeg";
import Banner2 from "../../assets/Banner2.png";
import Banner3 from "../../assets/Banner3.jpeg";

export default function Home(props) {
  let items = [
    {
      name: "FIND YOUR STYLE",
      description: "Our collection is ",
      image: Banner,
    },
    {
      name: "ALWAYS ON YOUR GAME",
      description: "Try out our new collection",
      image: Banner2,
    },
    {
      name: "REALIZE YOUR IDENTITY",
      description: "Pick out a shoe that defines who you are",
      image: Banner3,
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
