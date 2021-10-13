import { Link } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import "./ProductCard.css";



export default function ProductCard(props) {
  const {
    _id,
    name,
    price,
    imgURL
  } = props;

  return (

    <CardContent className="hotness"
        sx={{
                width: "75%",
                height: "90%",
                m: "0 auto"
        }}>
        <Link to={`/products/${_id}`}>
            <CardMedia
              component="img"
              alt="sneakers"
              src={imgURL} alt={name} 
              sx={{
                  height: "60%"
              }}
            />
            <Typography gutterBottom>
                {name}
            </Typography>
            <Typography gutterBottom color="text.secondary">
              ${price}
            </Typography>
            <Typography gutterBottom color="text.secondary">
                Learn More
            </Typography>
        </Link>
    </CardContent>

    //   </CardContent>
    // </Card>
  );
}
{/* //     return (
//         <div className="product-card">
//                 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                     New Addition!
//                 </Typography>
//                     <img className="product-card-img" src={imgURL} alt={name} />
//                     <div className="product-card-info">
//                         <div>{name}</div>
//                         <div>{price}</div>
//                     </div>
//                   
//         </div>
//     )
//  */}