import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./ProductCard.css";


export default function ProductCard(props) {
  const { _id, name, price, imgURL } = props;

  return (
    <Link 
      to={`/products/${_id}`}
      className="link-product-card"
    >
      <Card
        className="card-product-card"
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <CardMedia
          component="img"
          src={imgURL}
          alt={name}
          sx={{
            height: "100%",
            top: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
            objectFit: "contain"
          }}
        />
      <CardContent
        sx={{
          height: "40%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none"
        }}
      >
        <Typography 
          gutterBottom
          noWrap
          align="center"
          sx={{
            width: "90%",
            fontSize: 22
          }}
        >
          {name}
        </Typography>
        <Typography 
          gutterBottom 
          color="text.secondary"
          sx={{
            fontSize: 18
          }}
        >
          ${price}
        </Typography>
      </CardContent>
      </Card>
    </Link>
  );
}
