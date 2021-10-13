import { Link } from "react-router-dom";
import { CardMedia, CardContent, Typography } from "@mui/material";
import "./ProductCard.css";


export default function ProductCard(props) {
  const {
    _id,
    name,
    price,
    imgURL
  } = props;

  return (
    <CardContent
      sx={{
              width: "75%",
              height: "90%",
              m: "0 auto"
      }}>
      <Link to={`/products/${_id}`}>
          <CardMedia
            component="img"
            src={imgURL} 
            alt={name} 
            sx={{
                height: "60%"
            }}
          />
          <Typography gutterBottom>
            {name}
          </Typography>
          <Typography 
            gutterBottom 
            color="text.secondary"
          >
            ${price}
          </Typography>
          <Typography 
            gutterBottom 
            color="text.secondary"
          >
              Learn More
          </Typography>
      </Link>
    </CardContent>
  )
}