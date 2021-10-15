import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort";
import { getProducts } from "../../services/products";
import { Box, Card, Typography } from "@mui/material/";
import "./Products.css";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState("name-ascending");

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };
    fetchProducts();
  }, []);

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type);
    }

    switch (type) {
      case "name-ascending":
        setSearchResult(AZ(searchResult));
        break;
      case "name-descending":
        setSearchResult(ZA(searchResult));
        break;
      case "price-ascending":
        setSearchResult(lowestFirst(searchResult));
        break;
      case "price-descending":
        setSearchResult(highestFirst(searchResult));
        break;
      default:
        break;
    }
  };

  if (applySort) {
    handleSort(sortType);
    setApplySort(false);
  }

  const handleSearch = e => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResult(results);
    setApplySort(true);
  };

  const handleSubmit = e => e.preventDefault();

  const CARDS = products.map((product, i) => (
    <div key={i} className="products-card-container">
      <ProductCard
        _id={product._id}
        name={product.name}
        price={product.price}
        imgURL={product.imgURL}
        key={product._id}
      />
    </div>
  ));

  if (!products) return <h1>Loading</h1>;

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography gutterBottom color="text.secondary" sx={{ fontSize: 42 }}>
          All Shoes
        </Typography>
        <Card
          className="products-cards-container"
          variant="outlined"
          sx={{
            overflowY: "scroll",
          }}
        >
          {CARDS}
        </Card>
      </Box>
    </Layout>
  );
}
