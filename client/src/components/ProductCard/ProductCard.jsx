import { Link } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./ProductCard.css";


export default function ProductCard(props) {
    const {
        _id,
        name,
        price,
        imgURL
    } = props;

    return (
        <div className="product-card">
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    New Addition!
                </Typography>
                    <img className="product-card-img" src={imgURL} alt={name} />
                    <div className="product-card-info">
                        <div>{name}</div>
                        <div>{price}</div>
                    </div>
                    <CardActions>
                        <Button size="small">
                            <Link className="card" to={`/products/${_id}`}>
                                <div>View</div>
                            </Link>
                        </Button>
                    </CardActions>
        </div>
    )
}
