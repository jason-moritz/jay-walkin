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
    <Card className="hotness">
      <CardMedia className="cardimage"
        component="img"
        alt="sneakers"
        src={imgURL} alt={name} 
      />
      <CardContent>
        <Typography  className="name" gutterBottom variant="h5" component="div">
        <div>{name}</div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div> ${price} </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Link className="card" to={`/products/${_id}`}>
          <Button className="learnmore" size="small">Learn More</Button>
          {/* <div>View</div> */}
        </Link>
      </CardActions>
    </Card>
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
