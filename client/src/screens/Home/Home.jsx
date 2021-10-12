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
      name: "Random Name #1",
      description: "This is the description for Name #1",
      image: Banner,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: Banner2,
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
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
