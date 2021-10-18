import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";
import BackButton from "../../components/BackButton/BackButton";
import Search from "../../components/Search/Search";
import Category from "../../components/Category/Category";
import Sort from "../../components/Sort/Sort";
import { AZ, ZA, lowestFirst, highestFirst, sortByBrand } from "../../utils/sort";
import { getProducts } from "../../services/products";
import { Box, Card, Typography } from "@mui/material/";
import "./Products.css";


export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");
  const [applySort, setApplySort] = useState(false);
  const [category, setCategory] = useState("all");
  const [sortType, setSortType] = useState("name-ascending");
  
  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);

      if (category === "all") {
        setSearchResult(allProducts)
        
      }else if (category === "unisex") {
        setSearchResult(allProducts.filter((product) => product.gender.toLowerCase() === "unisex"))
        
      } else if (category === "male") {
        setSearchResult(allProducts.filter((product) => product.gender.toLowerCase() === "male"))
        
      } else if (category === "female") {
        setSearchResult(allProducts.filter((product) => product.gender.toLowerCase() === "female"))
      };
    }
    fetchProducts();
  }, [category]);

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type);
    }

    switch (type) {
      case "name-ascending":
        setSearchResult(AZ(searchResult))
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

      case "brand":
        setSearchResult(sortByBrand(searchResult));
        break;

      default:
        break;
    }
  }

  if (applySort) {
    handleSort(sortType);
    setApplySort(false);
  }

  const handleSearch = (e) => {      
    setSearch(e.target.value);

    if (category === "all") {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchResult(results);

    } else {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setSearchResult(results);
    }

    setApplySort(true);
  };

  const handleSubmit = (e) => e.preventDefault();

  const CARDS = searchResult.map((product, i) => (
    <div 
      key={i} 
      className="products-card-container"
    >
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
      <BackButton />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          my: 2
        }}
      >  
        <Search 
          search={search} 
          searchResult={searchResult} 
          handleSearch={handleSearch} 
          handleSubmit={handleSubmit} 
        />
        <Sort 
          handleSubmit={handleSubmit} 
          handleSort={handleSort} 
        />
      </Box>
      <Box
        sx={{
          width: "100%"
        }}>
          <Category
          handleSubmit={handleSubmit}
          setCategory={setCategory}
        />
      </Box>
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
        <Typography 
          gutterBottom 
          color="text.secondary" 
          sx={{ 
            fontSize: 42 
          }}
        >
          All Shoes
        </Typography>
        <Card
          className="products-cards-container"
          variant="outlined"
          sx={{
            height: "100%"
          }}
        >
          {CARDS}
        </Card>
      </Box>
    </Layout>
  );
}
