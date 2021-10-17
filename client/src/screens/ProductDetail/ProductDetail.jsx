import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { getProduct, deleteProduct } from "../../services/products";
import BackButton from "../../components/BackButton/BackButton";
import Layout from "../../components/Layout/Layout";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductDetail.css";

export default function ProductDetail(props) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProduct(id);
      setProduct(res);
      setLoading((prevLoading) => !prevLoading);
    };
    fetchProduct();
  }, [id]);

  const handleDelete = async (e) => {
    e.preventDefault();

    await deleteProduct(id);
    toast(`Ref Code 187 - ${product.name} has been destroyed`)
    history.push("/products");
  };

  if (loading) return <CircularProgress />;

  const redirect = () => {
    history.push("/sign-up");
  };

  return (
    <Layout user={props.user}>
      <BackButton className="product-detail-back-button" />        
      <Box className="box-product-detail">
        <Card variant="outlined" className="card-container-product-detail">
          <CardContent className="card-content-container">
            <div className="product-detail">
              <div className="product-detail-image-container">
                <img
                  className="product-detail-image"
                  src={product.imgURL}
                  alt={product.name}
                />
              </div>
              <div className="product-detail-info">
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                  component="div"
                >
                  <div><h2>{product.name}</h2></div>
                  <div><h3>{`$${product.price}`}</h3></div>
                  <div className="product-detail-description"><p>{product.description}</p></div>
                </Typography>
                <div className="product-detail-button-container">
                  <CardActions>
                    <Button>
                      <Link className="edit-button" to={`/products/${id}/edit`}>
                        edit
                      </Link>
                    </Button>
                    <Button
                      className="delete-button"
                      onClick={props.user ? handleDelete : redirect}
                    >
                      delete
                    </Button>
                  </CardActions>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </Layout>
  );
}
